import React from 'react'
import { BiCloset,BiHomeAlt } from "react-icons/bi";
import { LuBadgePlus } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import CreateDropdown from './CreateDropdown';


export default function NavBar() {
  return (
    <>
      <footer className="mt-auto">
    {/* Footer content */}
    <nav className='flex flex-row  pr-20 pl-20 pt-5 pb-5 bg-[#704F38] max-h-32 bottom-0 rounded-t-lg '>
        <ul className='flex justify-between items-center w-full'>
            <li><Link to="/dashboard"><BiHomeAlt color='#fff' size={"50px"}/></Link></li>
            <li>
              <CreateDropdown 
              title={<FiPlusCircle color='#fff' size={"50px"}/>}
              item1={"add clothe"}
              item2={"add outfit"}
              />
             </li> 
            <li><Link to="/dashboard"><BiCloset color='#fff' size={"50px"}/></Link></li>
        </ul>
    </nav>
  </footer>
     </>
  )
}
