import React, { useEffect, useState } from 'react';
import { db, storage } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { getAllCategories, updateCategories } from './SaveDataInLocalStorage';
import { useAuth } from '../Login/AuthContext';

 const FetchCategory = ({mainCategory , subCategories}) => {
  const [images, setImages] = useState([]);
  const {user} = useAuth();
  const userId = user.uid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        subCategories.forEach(async (sub) => {
          const querySnapshot = await getDocs(collection(db, `${userId}/${mainCategory}/${sub.label}`));
          const fetchedImages = [];
          for (const doc of querySnapshot.docs) {
            const imageInfo = doc.data();
            const imageUrl = await getDownloadURL(ref(storage, imageInfo.url));
            fetchedImages.push({ ...imageInfo, imageUrl });
          }
          setImages(fetchedImages);
        });
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
 
  }, []);
  
  useEffect(() => {
    const updateLocalStorage = () => {
      const x = getAllCategories();
      const updatedCategories = x.map((category) => {
        const updatedSubOptions = category.subOptions.map((subOption) => {
          if (subCategories.some((sub) => sub.label === subOption.label)) {
            const updatedData = images.filter((img) => subOption.label === img.subCategory);
            return { ...subOption, data: updatedData };
          }
          return subOption;
        });

        return { ...category, subOptions: updatedSubOptions };
      });

      updateCategories(updatedCategories);
    };

    updateLocalStorage();
  }, [images]);  
};


export default FetchCategory;