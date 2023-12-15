import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import LoginWithEmail from './Components/Login/LoginWithEmail'
import LoginWithGmail from './Components/Login/LoginWithGmail'
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import { AuthProvider } from './Components/Login/AuthContext'
import Dashboard from './Components/Dashboard/Dashboard'
function App() {
 

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' exact Component={LoginWithEmail}/>
          <Route path='/dashboard' Component={Dashboard}/>
        </Routes>

        {/* <div>
        <LoginWithEmail />
        <LoginWithGmail />
        </div>
     */}
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
