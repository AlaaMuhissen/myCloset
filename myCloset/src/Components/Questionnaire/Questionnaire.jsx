// src/components/Questionnaire.js
import React, { useState } from 'react';
import { db, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeInput from './inputs/RangeInput';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { RadioGroup } from '@mui/material';
import { categories } from '../../../public/data/categories';
import RadioInput from './inputs/RadioInput';
import ButtonSelect from './inputs/ButtonSelect';
import { updateSubCategory } from '../Logics/SaveDataInLocalStorage';
import LoadingComponent from '../../Pages/LoadingPage/LoadingComponent';
import { useAuth } from '../Login/AuthContext';
import { useNavigate } from 'react-router-dom';

const Questionnaire = ({img}) => {
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [waterproof, setWaterproof] = useState(false);
  const [range, setRange] = useState('');
  const [withHat, setWithHat] = useState(false);
  const seasons= ["Spring" , "Summer", "Autumn" , "Winter"];
  const [subOptions, setSubOptions] = useState([]);
  const [selectedMainOption, setSelectedMainOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const {user}= useAuth();
  const userId= user.uid;
  const navigate = useNavigate();
  const handleMainOptionSelect = (mainOption) => {
    setSelectedMainOption(mainOption);
    setSubOptions(mainOption.subOptions || []);
  };

  const handleSubOptionSelect = (subOption) => {
    setSelectedSubOption(subOption);
  };
 
  const submitResponse = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    try {
      setLoading(true);
      // Upload image to Firebase Storage
       // Decode Base64 string to binary data
    const binaryData = atob(img.split(',')[1]);

    // Create a Uint8Array from the binary data
    const uint8Array = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    // Create a Blob from the Uint8Array
    const blob = new Blob([uint8Array], { type: 'image/png' });

    // Upload the Blob to Firebase Storage
    const storageRef = ref(storage);
    const imageRef = ref(storageRef, `${selectedMainOption.label}/${selectedSubOption.label}/${Date.now()}`);
    const snapshot = await uploadBytes(imageRef, blob);
    const downloadURL = await getDownloadURL(snapshot.ref);
  
      // Store additional information in Firebase Database
      const imagesCollection = collection(db,`${userId}/${selectedMainOption.label}/${selectedSubOption.label}`);
      const imageInfo = {
        seasons: selectedSeasons,
        waterproof: waterproof,
        withHat: withHat,
        category: selectedMainOption.label,
        subCategory: selectedSubOption.label,
        temp: range,
        timestamp: Date.now(),
        url: downloadURL,
      };
      console.log(imageInfo);
  
      await addDoc(imagesCollection, imageInfo);
      updateSubCategory(selectedMainOption, selectedSubOption,imageInfo);
  
    } catch (error) {
      alert("You have to fill all the form!!");
      console.error("Error submitting response:", error);
    }finally {
      setLoading(false);
      navigate(`dashboard/${selectedMainOption.label}`)
    }
  };
  
  const handleFinalValue = (finalValue) => {
    setRange(finalValue)
  };

  const handleSeasonChange = (e) => {
    const selectedSeason = e.target.value;
    setSelectedSeasons((prevSeasons) => [...prevSeasons, selectedSeason]);
  };
  const handleHatChange =(e) =>{
    e === "With Hat" ? setWithHat(true) : setWithHat(false);
  }
  const handleWaterproofChange =(e) =>{
    e === "Waterproof" ? setWaterproof(true) : setWaterproof(false)
  }


  return (
    <>
    <div className="flex flex-col items-center justify-center overflow-y-auto ">
  <form className="bg-white p-8 rounded-md shadow-md max-w-md mb-4 overflow-y-auto">

    {img && (
      <div className="mb-8">
        <img
          className="w-full h-auto rounded-md shadow-md"
          src={img}
          alt="Captured Image"
        />
      </div>
    )}

    <section id="firstSec" className="mb-4">
        <div className="mb-4 font-bold">In which season/s do you prefer to wear this item?</div>
      <div className="flex items-center">
        {seasons.map((season, index) => (
          <Form.Check
            inline
            label={season}
            name="group1"
            type="checkbox"
            value={season}
            id={`inline-season-${index}`}
            key={index}
            onChange={handleSeasonChange}
          />
        ))}
      </div>
    </section>

    <div className="mb-4 font-bold">How do you feel when you wear it?</div>
    <div id="secondSec" className="mb-4">
      <RangeInput onFinalValueChange={handleFinalValue} />
    </div>
    <div id="thirdSec" className=" flex flex-row mb-4 justify-around">
      <div >
      <RadioInput
        option1="With Hat"
        option2="Without Hat"
        onRadioValChange={handleHatChange}
      />
      </div>
      <div>
      <RadioInput
        option1="Waterproof"
        option2="Non Waterproof"
        onRadioValChange={handleWaterproofChange}
      />
      </div>
    </div>

    <div id="firthSec" className="mb-6">
      <ButtonSelect options={categories} onSelect={handleMainOptionSelect} />
      {selectedMainOption && (
        <ButtonSelect options={subOptions} onSelect={handleSubOptionSelect} />
      )}
    </div>

    <button
      type="submit"
      id="formSum"
      onClick={submitResponse}
      className="bg-[#704F38] text-white py-2 px-4 rounded-md hover:bg-[#5c3d2f] focus:outline-none focus:ring focus:border-white-300"
    >
      Submit
    </button>
    {loading ? <LoadingComponent /> : null} 
  </form>
</div>

    </>
    
  );
};

export default Questionnaire;
