'use client'

import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets';
import { useDarkMode } from '../hooks/Theme';
// import { useThemeStore} from '../store/theme.store';



export default function Navbar() {

  // const { isDarkMode, toggleTheme } = useThemeStore();
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const { toggle, isDarkMode} = useDarkMode();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect (() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50){
        setIsScroll(true)
      } else{
        setIsScroll(false)
      }
    })
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
   <>
    <div className=' fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image alt='' src={assets.header_bg_color} className='w-full'/>
    </div>
    <nav className={`bg-[var(--color-bg)] w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? ' bg-opacity-50 backdrop-blur-lg shadow-sm bg-[var(--color-bg)] hover:shadow-[var(--shadow-white)]' : ''}`}>
      <a href='#top' >
        <Image alt='' src={isDarkMode? assets.logo_dark: assets.logo} className='w-28 cursor-pointer mr-14'/>
      </a>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : ' bg-opacity-50 border border-[var(--color-border)] shadow-sm ' }`}>
        <li><a className='font-Ovo' href='#top'>Home</a></li>
        <li><a className='font-Ovo' href='#about'>About me</a></li>
        <li><a className='font-Ovo' href='#services'>Services</a></li>
        <li><a className='font-Ovo' href='#work'>My Work</a></li>
        <li><a className='font-Ovo' href='#contact'>Contact me</a></li>
      </ul>
      <div className='flex items-center gap-4'>
        <button onClick={toggle}><Image alt='' src={isDarkMode? assets.sun_icon :assets.moon_icon} className='w-6'/></button>
        <a href='#contact' className='dark:border-white-50 hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'> 
          Contact
          <Image src={isDarkMode ? assets.arrow_icon_dark: assets.arrow_icon} className='w-3 ' alt=''/>

        </a>
        <button onClick={openMenu} className='block md:hidden ml-3'><Image alt='' src={ isDarkMode? assets.menu_white: assets.menu_black} className='w-6'/></button>
      </div>

      {/* mobile menu */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[var(--color-rose)] transition duration-500 '> 
        <div className='absolute right-6 top-6'>
          <Image alt='' src={isDarkMode? assets.close_white:assets.close_black} className='w-5 cursor-pointer' onClick={closeMenu}/>
        </div>
        <li><a onClick={closeMenu} className='font-Ovo' href='#top'>Home</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href='#about'>About me</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href='#services'>Services</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href='#work'>My Work</a></li>
        <li><a onClick={closeMenu} className='font-Ovo' href='#contact'>Contact me</a></li>
      </ul>
    </nav>
   </>
  )
}
