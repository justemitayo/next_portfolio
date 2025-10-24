import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

import { motion } from 'motion/react'
export default function Contact() {
  return (
    <motion.div
    initial={{ opacity:0,}}
    whileInView={{ opacity:1,}}
    transition={{duration:1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] bg-[var(--bg)]'>
      <motion.h4 
      initial={{ opacity:0, y:-20}}
      whileInView={{ opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 font-Ovo text-lg'>Connect with me</motion.h4>
      <motion.h2 
      initial={{ opacity:0, y:-20}}
      whileInView={{ opacity:1, y:0}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center font-Ovo text-5xl'>Get in touch</motion.h2>
      <motion.p 
        initial={{ opacity:0,}}
        whileInView={{ opacity:1,}}
        transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>{`I'd love to hear from you! If you have any comments, questions or feedback, please use the form below`} </motion.p>

      <motion.form
      initial={{ opacity:0,}}
      whileInView={{ opacity:1,}}
      transition={{duration:0.5, delay:0.9}}
      className='max-w-2xl mx-auto'>
        <motion.div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
          <motion.input 
          initial={{ opacity:0, x:-50}}
          whileInView={{ opacity:1, x:0}}
          transition={{duration:0.6, delay:1.1}}
          type='text' placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-[var(--border)] bg-[var(--sd)] rounded-md ' />
          <motion.input
          initial={{ opacity:0, x: 50}}
          whileInView={{ opacity:1, x:0}}
          transition={{duration:0.6, delay:1.2}}
          type='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-[var(--border)]  bg-[var(--sd)] rounded-md ' />
        </motion.div>
        <motion.textarea 
        initial={{ opacity:0, y:100}}
        whileInView={{ opacity:1, y:0}}
        transition={{duration:0.6, delay:1.3}}
        rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-[var(--border)]  bg-[var(--sd)] rounded-md  mb-6' ></motion.textarea>
        <motion.button 
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-[var(--color-back)] text-white rounded-full mx-auto duration-500 hover:bg-[var(--borders)]'>Submit now <Image alt='' src={assets.right_arrow_white} className='w-4' /></motion.button>

        <motion.p className='mt-4'>sending...</motion.p>
      </motion.form>
    </motion.div>
  )
}
