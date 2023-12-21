import { useState } from 'react'

import LoginWithEmail from './Components/Login/LoginWithEmail'
import LoginWithGmail from './Components/Login/LoginWithGmail'
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import { AuthProvider } from './Components/Login/AuthContext'
import Dashboard from './Components/Dashboard/Dashboard'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'
import DisplaySubCategory from './Pages/DisplaySubCategory'
import AddClothesPage from './Pages/AddClothesPage'

function App() {
 

  return (
    <>
    <div
     className='pt-20 pr-10 pl-10 bg-[#f5f5f4] h-full'
    >
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' exact element={<LoginPage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/dashboard/:subCategory' element={<DisplaySubCategory/>} />
          <Route path='/addClothe'  element={<AddClothesPage/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
