import React, { useState } from 'react';
import { getAllCategories } from '../Components/Logics/SaveDataInLocalStorage';
import MakeDraggingPic from '../Components/Dragging/MakeDraggingPic';
import Header from '../Components/Header';
import ButtonSelect from '../Components/Questionnaire/inputs/ButtonSelect';
import NavBar from '../Components/NavBar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { addDoc, collection, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../Components/Login/AuthContext';
import { v4 as uuidv4 } from 'uuid';

export default function CreateAnOutfit() {
  const [categories, setCategories] = useState(getAllCategories());
  const [subOptions, setSubOptions] = useState([]);
  const [selectedMainOption, setSelectedMainOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const {user}= useAuth();
 console.log(user);
  const [board, setBoard] = useState([]);
  const handleMainOptionSelect = (mainOption) => {
    setSelectedMainOption(mainOption);
    setSubOptions(mainOption.subOptions || []);
    setSelectedSubOption(null); 
  };

  const handleSubOptionSelect = (subOption) => {
    setSelectedSubOption(subOption);
  };

  const handleBoardChange = (updatedBoard) => {
    setBoard(updatedBoard);
  };
  const handleSaveOutfit = async () => {
    try {
      if (selectedMainOption && selectedSubOption) {
        const outfitData = {
          mainCategory: selectedMainOption.label,
          subCategory: selectedSubOption.label,
          images: board.map((image) => image.url),
        };

        await saveOutfitToDatabase(outfitData);
      } else {
        console.error('Main and Sub options must be selected.');
      }
    } catch (error) {
      console.error('Error saving outfit:', error);
    }
  };

  const saveOutfitToDatabase = async (outfitData) => {
    try {
      
      const outfitId = uuidv4();

      const collectionRef = query(collection(db, `${user.uid}/outfits/${outfitId}`));
         
      const docRef = await addDoc(collectionRef, outfitData);
  
      console.log('Outfit saved with ID: ', docRef.id);
    } catch (error) {
      console.error('Error saving outfit to database:', error);
    }
  };
  return (
    <>
      <div className="p-20 bg-[#f5f5f4] h-screen">
          <Header name={"Alaa"} title={"Let's Make The Magic Together"} />
        <div className="">
          <div className="flex justify-between items-center">
            
          <div id="firthSec" className="mb-6">
            <ButtonSelect options={categories} onSelect={handleMainOptionSelect} />
            {selectedMainOption && (
              <ButtonSelect options={subOptions} onSelect={handleSubOptionSelect} />
              )}
          </div>
          </div>
          <DndProvider backend={HTML5Backend}>
            {selectedSubOption && ( 
              <MakeDraggingPic 
              PictureList={selectedSubOption.data} 
              onBoardChange={handleBoardChange}/>
              )}
         </DndProvider>
         <button onClick={handleSaveOutfit} >Save My Outfit</button>
        </div>
      </div>

      <NavBar />
    </>
  );
}
