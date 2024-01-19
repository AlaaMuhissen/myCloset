import React, { useEffect, useState } from 'react';
import { db, storage } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { getAllCategories, updateCategories } from './SaveDataInLocalStorage';
import { useAuth } from '../Login/AuthContext';

const FetchCategory = ({ mainCategory, subCategories }) => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const { user } = useAuth();
  const userId = user.uid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedImages = [];

        for (const sub of subCategories) {
          const querySnapshot = await getDocs(collection(db, `${userId}/${mainCategory.label}/${sub.label}`));

          if (!querySnapshot.empty) {
            for (const doc of querySnapshot.docs) {
              const imageInfo = doc.data();
              const imageUrl = await getDownloadURL(ref(storage, imageInfo.url));
              fetchedImages.push({ ...imageInfo, imageUrl, subCategory: sub.label });
            }
          }
        }

        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, [userId, mainCategory.label, subCategories]);

  useEffect(() => {
    const updateLocalStorage = () => {
      const storedCategories = getAllCategories();

      const updatedCategories = storedCategories.map((storedCategory) => {
        const updatedSubOptions = storedCategory.subOptions.map((subOption) => {
          if (subCategories.some((sub) => sub.label === subOption.label)) {
            const updatedData = images.filter((img) => subOption.label === img.subCategory);
            return { ...subOption, data: updatedData };
          }
          return subOption;
        });
        return { ...storedCategory, subOptions: updatedSubOptions };
      });

      updateCategories(updatedCategories);
    };

    updateLocalStorage();
  }, [images, subCategories]);

};

export default FetchCategory;
