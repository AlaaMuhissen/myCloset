import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

export default function Header({ name, title }) {
  const logOut = () => {
    // Implement your logout logic here
  };

  return (
    <header className='mb-5 flex flex-col md:flex-row justify-between items-center'>
      <div className='mb-3 md:mb-0 md:flex md:flex-col'>
        <h1 className='text-3xl md:text-5xl text-[#704F38] font-bold font-sans mb-1 md:mb-3'>
          Hi {name}
        </h1>
        <p className='text-lg md:text-2xl text-[#704F38] font-bold font-sans'>{title}</p>
      </div>

      <button onClick={logOut} className='md:ml-4'>
        <AiOutlineLogout color='#704F38' size={'2rem'} />
      </button>
    </header>
  );
}
