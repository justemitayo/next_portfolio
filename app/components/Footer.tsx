import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../hooks/Theme';

export default function Footer() {
   const {  isDarkMode} = useDarkMode();
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image alt='' src={isDarkMode? assets.logo_dark:assets.logo} className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image alt='' src={isDarkMode? assets.mail_icon_dark:assets.mail_icon} className='w-6'/>
          temitayoakindeju@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Temitayo Akindeju. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://instagram.com/justemitayo'>GitHub</a></li>
          <li><a target='_blank' href='https://instagram.com/justemitayo'>LinkedIn</a></li>
          <li><a target='_blank' href='https://instagram.com/justemitayo'>Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}
