import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

export default function Service() {
  return (
    <motion.div
    initial={{ opacity:0, y:-20}}
    whileInView={{ opacity:1, y:0}}
    transition={{duration:0.5, delay:0.3}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
                               initial={{ opacity:0, y:-20}}
                               whileInView={{ opacity:1, y:0}}
                               transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 font-Ovo text-lg'>What I offer</motion.h4>
      <motion.h2
        initial={{ opacity:0, y:-20}}
        whileInView={{ opacity:1, y:0}}
        transition={{duration:0.5, delay:0.7}}
      className='text-center font-Ovo text-5xl'>My Services</motion.h2>
      <motion.p
        initial={{ opacity:0,}}
        whileInView={{ opacity:1,}}
        transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a frontend developer from Ondo state, Nigeria with a few years of experience in multiple aspect of web development like React, Typescript, Nextjs among others... </motion.p>
      <motion.div
        initial={{ opacity:0,}}
        whileInView={{ opacity:1,}}
        transition={{duration:0.6, delay:0.9}}
      className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {
          serviceData.map(({icon, title, description, link}, index) => (
            <motion.div
              whileHover={{scale:1.05}}
            key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--shadow)] cursor-pointer hover:bg-[var(--color-hover)]  hover:-translate-y-1 duration-500'>
              <Image alt='' src={icon} className='w-10'/>
              <h3 className='text-lg my-4 text-[var(--color-text)]'>{title}</h3>
              <p className='tetxt-sm leading-5 text-[var(--color-text)]'>{description}</p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
              </a>
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}
