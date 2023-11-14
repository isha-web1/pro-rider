import React from 'react';

const Header = () => {
  return (
    <nav className='my-container flex justify-between items-center bg-[#4f5427] rounded-sm'>
      <div>
        <h1 className='text-3xl font-bold text-yellow-300 my-4'>
          Pro- <span className='text-white'>rider</span>
        </h1>
      </div>
      <div className='flex'>
        <ul className='flex text-2xl text-white font-semibold '>
          <li className='mr-4'>Home</li>
          <li className='mr-4'>About</li>
          <li>Contact us</li>
        </ul>
        <button className='bg-yellow-400 ml-2 rounded p-2'>Search</button>
      </div>
    </nav>
  );
};

export default Header;
