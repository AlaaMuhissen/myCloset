import React, { useState } from 'react';
import Header from '../Components/Header';
import Dashboard from '../Components/Dashboard/Dashboard';
import GetWeather from '../Components/GetWeather';
import { useAuth } from '../Components/Login/AuthContext';
import LoadingComponent from './LoadingPage/LoadingComponent';
import ShowCategories from '../Components/ShowCategories/ShowCategories';
import NavBar from '../Components/NavBar';
import FetchCategory from '../Components/Logics/FetchCategory';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [isClicked, setIsClicked] = useState(false);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className='p-4 md:p-10 bg-[#f5f5f4] min-h-screen'>
        <Header name={'Alaa'} title={"Let's get you dressed"} />
        <GetWeather />
        <ShowCategories />
  
      </div>

      <NavBar />
    </>
  );
}
