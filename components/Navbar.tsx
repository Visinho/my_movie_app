import React from 'react'
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className='w-full fixed z-40'>
      <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
        <img src='/images/Logo1.png' alt='Logo' className='h-4 lg:h-10'/>

        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
            <NavbarItem label='Home'/>
            <NavbarItem label='Home'/>
            <NavbarItem label='Home'/>
            <NavbarItem label='Home'/>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
