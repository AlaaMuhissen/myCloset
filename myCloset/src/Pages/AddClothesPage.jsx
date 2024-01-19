import React from 'react';
import TakePhoto from '../Components/addClothes/TakePhoto';
import UploadImg from '../Components/addClothes/UploadImg';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';

export default function AddClothesPage() {
  return (
    <>
      <div className='p-4 md:p-10 lg:p-16 bg-[#f5f5f4] h-screen'>
        <Header
          name={"Alaa"}
          title={"Let's add a new item together!"}
        />
        <TakePhoto />
      </div>
      <NavBar />
    </>
  );
}
