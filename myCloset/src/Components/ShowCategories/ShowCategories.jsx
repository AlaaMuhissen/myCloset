import React from 'react'
import { categories } from '../../../public/data/categories'

import CategoryCard from '../CreateCard/CategoryCard';
import { basicCategories } from '../../../public/data/basicCategories';
import FetchCategory from '../Logics/FetchCategory';

export default function ShowCategories() {
    
  return (
    
    <>
     {basicCategories.map((category,index)=>(
        <FetchCategory
          key={index}
          mainCategory={category}
          subCategories= {category.subOptions}
        />
      ))}
    <div className='flex flex-wrap overflow-x-auto p-4 space-x-4 scroll-snap-type-x  overflow-hidden'>
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
