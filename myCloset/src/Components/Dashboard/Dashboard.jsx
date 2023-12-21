import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/AuthContext';
import TakePhoto from '../addClothes/TakePhoto';
import Questionnaire from '../Questionnaire/Questionnaire';

import ShowCategories from '../ShowCategories/ShowCategories';
import SaveDataInLocalStorage, { getAllCategories } from '../Logics/SaveDataInLocalStorage';
import MakeDraggingPic from '../Dragging/MakeDraggingPic';
import ShowButtons from '../ShowCategories/ShowButtons';
import { chooseClothes } from '../Logics/chooseClothes';
import LoadingComponent from '../../Pages/LoadingPage/LoadingComponent'
import Header from '../Header';
import GetWeather from '../GetWeather';


export default function Dashboard() {

  
    return (
      <div>
          <h2>Try this outfit Today!</h2>
          
          
       
        {/* <ShowCategories/> */}
        {/* Your components that use user information */}
        {user ? (
          <div>
            <p>Welcome, {user.email}!</p>
            <button onClick={()=>setIsClicked(true)}>Take Aphoto</button>
            {
              isClicked? <LoadingComponent />: <div>No</div>
              
            }
          </div>
        ) : (
          <p>Please sign in</p>
        )}
      </div>
    );
  };