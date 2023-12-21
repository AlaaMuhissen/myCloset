import React from 'react'
import TakePhoto from '../Components/addClothes/TakePhoto'
import UploadImg from '../Components/addClothes/UploadImg'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'

export default function AddClothesPage() {
  return (
   <>
   <Header
    name= {"jdsls"}
    title={"Let's add new item together!"}
   />
    <TakePhoto />
    <NavBar/>
   </>

  )
}
