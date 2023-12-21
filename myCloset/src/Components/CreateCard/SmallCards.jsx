import React from 'react'
import { getIconComponent } from '../Logics/createIconComponent'

export default function SmallCards({icon ,title}) {
    const IconComponent = getIconComponent(icon , 25 ,"#fff");
  return (
    <div className='flex bg-[#704F38] text-[#fff] rounded-md justify-between max-w-48 max-h-24 p-4'>
    <div>{IconComponent} </div> 
    <div className='ml-2  text-xl'> {title} </div> 
    </div>
  )
}
