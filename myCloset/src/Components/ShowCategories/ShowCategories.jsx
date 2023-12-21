import React from 'react'
import { categories } from '../../../public/data/categories'

import CategoryCard from '../CreateCard/CategoryCard';

export default function ShowCategories() {
    
  return (
    <>
    <div className='flex flex-wrap'>
     {categories.map((category,index)=>(
          <CategoryCard
           key={index}
           icon= {category.icons} 
           title={category.label}/>
           ))}
    </div>
    </>
  )
 
}
