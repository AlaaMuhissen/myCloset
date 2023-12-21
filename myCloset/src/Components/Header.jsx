import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";


export default function Header({name ,title}) {

  const logOut = ()=>{

  }
  return (
   <>
  <header className='mb-5 flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h1 className='text-5xl text-[#704F38] font-bold font-sans mb-3'>
        Hi {name}
    </h1>
    <p className='text-2xl text-[#704F38] font-bold font-sans'>{title}</p>
    </div>
   
    <button onClick={logOut}><AiOutlineLogout color='#704F38' size={"50px"}/></button>  
  
  </header>
   </>
  )
}
