import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs ,doc ,getDoc} from 'firebase/firestore';
import OutfitCard from '../Components/CreateCard/OutfitCard';
import { useAuth } from '../Components/Login/AuthContext';


const OutfitsPage = () => {
  const [outfits, setOutfits] = useState([]);
  const {user} = useAuth();
  console.log(user);
  useEffect(() => {
    const fetchOutfits = async () => {
        try {
  
          const querySnapshot = await getDocs(collection(db, `${user.uid}/outfits`));
       
          const outfitsData = [];
          querySnapshot.forEach((doc) => {
            outfitsData.push({ id: doc.id, ...doc.data() });
          });
      
         setOutfits(outfitsData);
        } catch (error) {
          console.error('Error fetching outfits:', error);
        }
      };
      
    fetchOutfits();
  });

  return (
    <div className="outfits-page">
      <h2>My Outfits</h2>
      <div className="outfit-container">
        {outfits.map((outfit) => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  );
};

export default OutfitsPage;
