import React from 'react';
import Header from '../Components/Header';
import SmallCards from '../Components/CreateCard/SmallCards';
import { getAllCategories } from '../Components/Logics/SaveDataInLocalStorage';
import { categories } from '../../public/data/categories';
import { useParams } from 'react-router-dom';

export default function DisplaySubCategory() {
  const { subCategory } = useParams();
  const userCategories = getAllCategories();

  // Find the specific category based on the subCategory parameter
  const specificCategory = categories.find((cate) => cate.label === subCategory);

  return (
    <>
      <div
     className='p-20 bg-[#f5f5f4] h-full'
    >
      <Header name={"jff"} title={"Discover Your Closet"} />
      {specificCategory && (
        <div className='flex gap-3 flex-wrap'>
       { specificCategory.subOptions.map((cat) => (
          <SmallCards icon={cat.icons} title={cat.label} key={cat.label} />
        ))}
        </div>
      )}
      </div>
    </>
  );
}
