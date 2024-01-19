import React, { useState } from 'react';
import Header from '../Components/Header';
import SmallCards from '../Components/CreateCard/SmallCards';
import { getAllCategories } from '../Components/Logics/SaveDataInLocalStorage';
import { categories } from '../../public/data/categories';
import { useParams } from 'react-router-dom';
import FlipCard from '../Components/CreateCard/FlipCard';
import NavBar from '../Components/NavBar';

export default function DisplaySubCategory() {
  const { subCategory } = useParams();
  const userCategories = getAllCategories();
  const [curr, setCurr] = useState(null);
  const [isThereClothe, setIsThereClothe] = useState(true);


  const specificCategory = categories.find((cate) => cate.label === subCategory);

  const handleClick = (cat) => {
    const f = userCategories.find((catName) => catName.label === subCategory);
    if (f) {
      const d = f.subOptions.find((catName) => catName.label === cat.label);
      if (d.data.length !== 0) {
        setCurr(d.data);
        setIsThereClothe(true);
      } else {
        setCurr("");
        setIsThereClothe(false);
      }
    }
  };

  return (
    <>
      <div className='p-4 md:p-10 bg-[#f5f5f4] min-h-screen'>
        <Header name={'Alaa'} title={'Discover Your Closet'} />
        <div>
          {specificCategory && (
            <div className='flex flex-wrap gap-3'>
              {specificCategory.subOptions.map((cat) => (
                <SmallCards
                  icon={cat.icons}
                  title={cat.label}
                  key={cat.label}
                  category={cat}
                  handleClick={handleClick}
                />
              ))}
            </div>
          )}
          <div>
            {curr && (
              <div className='flex flex-wrap gap-3 mt-7'>
                {curr.map((cat, index) => (
                  <FlipCard category={cat} index={index} key={index} />
                ))}
              </div>
            )}
            {!isThereClothe && <div>This is empty for NOW</div>}
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}
