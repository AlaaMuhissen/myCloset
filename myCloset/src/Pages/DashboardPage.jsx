import React , {useState} from 'react'
import Header from '../Components/Header'
import Dashboard from '../Components/Dashboard/Dashboard'
import GetWeather from '../Components/GetWeather'
import { useAuth } from '../Components/Login/AuthContext'
import LoadingComponent from './LoadingPage/LoadingComponent'
import CategoryCard from '../Components/CreateCard/CategoryCard'
import ShowCategories from '../Components/ShowCategories/ShowCategories'
import NavBar from '../Components/NavBar'

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const[isClicked , setIsClicked] = useState(false);
  if (loading) {
    return <LoadingComponent />
  }
  
  return (
    <>
    <div
     className='pr-10 pl-10 h-full'
    >
    <Header
    name={"Alaa"}
    title={"Let's get you dressed"} />
    {/* <GetWeather /> */}
    <ShowCategories />
     {/* <Dashboard/> */}
   
    </div>
    <NavBar />
    </>
  )
}
