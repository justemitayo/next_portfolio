'use client'

import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../hooks/Theme';
import {motion} from 'motion/react'

export default function About() {
  const {isDarkMode} = useDarkMode()
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{duration:1}}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
                 initial={{ opacity:0, y:-20}}
                 whileInView={{ opacity:1, y:0}}
                 transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 font-Ovo text-lg'>Introduction</motion.h4>
      <motion.h2
                 initial={{ opacity:0, y:-20}}
                 whileInView={{ opacity:1, y:0}}
                 transition={{duration:0.5, delay:0.5}}
      className='text-center font-Ovo text-5xl'>About me</motion.h2>
      <motion.div
                               initial={{ opacity:0}}
                               whileInView={{ opacity:1,}}
                               transition={{duration:0.8,}}
      className='w-full flex flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div 
                                 initial={{ opacity:0, scale:0.9}}
                                 whileInView={{ opacity:1, scale:1 }}
                                 transition={{duration:0.6,}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='' className='rounded-3xl w-full' />
        </motion.div>
        <motion.div 
                         initial={{ opacity:0}}
                         whileInView={{ opacity:1,}}
                         transition={{duration:0.6, delay:0.8}}
        className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaboration with prestigious organizations, contributing to their success and growth.
          </p>
          <motion.ul
                         initial={{ opacity:0}}
                         whileInView={{ opacity:1,}}
                         transition={{duration:0.8, delay:1}}          
          className='grid gridd-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li 
              whileHover={{ scale:1.05,}}
              className='border-[0.5px] border-[var(--color-text)] rounded-xl p-6 cursor-pointer hover:bg-[var(--color-hover)]  hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow)] ' key={index}>
                <Image src={isDarkMode? iconDark:icon} alt={title} className='w-7 mt-3'/>
                <h3 className='my-4 font-semibold text-[var(--color-text)]'>{title}</h3>
                <p className='text-[var(--color-text)]text-sm'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4 
                                   initial={{ opacity:0, y:20}}
                                   whileInView={{ opacity:1, y:0}}
                                   transition={{duration:0.5, delay:1.3}}
          className='my-6 text-[var(--color-text)] font-Ovo'>
            Tools I use 
          </motion.h4>
          <motion.ul 
                                   initial={{ opacity:0}}
                                   whileInView={{ opacity:1,}}
                                   transition={{duration:0.6, delay:1.5}}
          className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li 
                whileHover={{scale:1.05}}
              className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ' key={index}>
                <Image alt='tool' src={tool} className='w-5 sm:w-7'/>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
