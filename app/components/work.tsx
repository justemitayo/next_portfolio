import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../hooks/Theme'
import { motion } from 'motion/react'

export default function Work() {
  const {isDarkMode} =useDarkMode()
  return (
    <motion.div 
    initial={{ opacity:0,}}
    whileInView={{ opacity:1,}}
    transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
                                     initial={{ opacity:0, y:-20}}
                                     whileInView={{ opacity:1, y:0}}
                                     transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 font-Ovo text-lg'>My Portfolio</motion.h4>
      <motion.h2
              initial={{ opacity:0, y:-20}}
              whileInView={{ opacity:1, y:0}}
              transition={{duration:0.5, delay:0.5}}
      className='text-center font-Ovo text-5xl'>My Latest Work</motion.h2>
      <motion.p
              initial={{ opacity:0,}}
              whileInView={{ opacity:1,}}
              transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of Projects showcasing my ever growing knowledge in front-end development</motion.p>
      <motion.div 
              initial={{ opacity:0,}}
              whileInView={{ opacity:1,}}
              transition={{duration:0.6, delay:0.9}}
      className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10'>
        {
          workData.map((project, index) => (
            <motion.div
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold text-black'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image alt='send icon' src={assets.send_icon} className='w-5'/>
                </div>
              </div>
            </motion.div>
          ))
        }
      </motion.div>
      <motion.a 
              initial={{ opacity:0,}}
              whileInView={{ opacity:1,}}
              transition={{duration:0.5, delay:1.1}}
      href='' className='w-max flex items-center justify-center gap-2 text-[var(--color-text)] border-[0.5px] border-[var(--border)] rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-hover)]  duration-500'>
        Show more <Image alt='right arrow' src={isDarkMode? assets.right_arrow_white:assets.right_arrow_bold} className='w-4'/>
      </motion.a>
    </motion.div>
  )
}
