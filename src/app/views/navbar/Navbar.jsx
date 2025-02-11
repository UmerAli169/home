'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../../../components/shared/Button';
import MenuItem from '../../../components/navbar/MenuItems';
import data from './data.json';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMenuItems(data.menuItems);
  }, []);

  return (
    <header className='flex items-center justify-between py-3  bg-[#FFFCFC] px-10'>
      <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <img src='/svg/navbar/handburger.svg' alt='Logo' />}
      </button>

      <div className='absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 flex items-center space-x-3'>
        <img src='/svg/navbar/tinytribe.svg' alt='Logo' />
        <p className='text-2xl font-bold'>tiny tribe</p>
      </div>

      <nav className='hidden md:flex items-center justify-center flex-grow'>
        <ul className='flex space-x-6'>
          {menuItems.map((item) => (
            <MenuItem key={item.label} label={item.label} enabled={item.enabled} />
          ))}
        </ul>
      </nav>

      <div className='hidden md:block'>
        <Button text='Enroll now' className='bg-[#FF6666] text-[#FFFFFF] px-4 py-2' />
      </div>

      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden'>
          <ul className='flex flex-col space-y-4'>
            {menuItems.map((item) => (
              <MenuItem key={item.label} label={item.label} enabled={item.enabled} />
            ))}
          </ul>
          <Button text='Enroll now' className='bg-[#FF6666] text-[#FFFFFF] ' />
        </div>
      )}
    </header>
  );
};

export default Navbar;
