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
import CreateAnOutfit from './Pages/CreateAnOutfit'
import OutfitsPage from './Pages/OutfitsPage'

function App() {
 

  return (
    <>
   
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' exact element={<LoginPage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/dashboard/:subCategory' element={<DisplaySubCategory/>} />
          <Route path='/addClothe'  element={<AddClothesPage/>}/>
          <Route path='/addAnOutfit'  element={<CreateAnOutfit/>}/>
          <Route path='/outfits'  element={<OutfitsPage/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>

    </>
  )
}

export default App
