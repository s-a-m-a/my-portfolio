import { assets } from '@/assets/assets';
import React from 'react';
import { motion } from "framer-motion"; // Fixed import here
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-8 pt-[100px] text-black dark:text-white'>
      
      {/*  Picture Animation without Border */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <Image 
          src={assets.user_pic} 
          alt= 'user image' 
          className='rounded-full w-28 md:w-36'  // Removed the border classes
        />
      </motion.div>

      {/* Main Heading Animation with Gradient Text */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-Ovo font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4'
      >
        QA Engineer & Front-End Enthusiast
      </motion.h1>

      {/* Description with Smooth Font Style */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='max-w-2xl mx-auto font-Ovo text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide'
      >
        Hey, I'm Sama — a QA Engineer with a strong passion for front-end development.  
        I enjoy building intuitive, user-friendly interfaces while ensuring top-notch quality in everything I do.
      </motion.p>

      {/* Additional Details with Text Refinement */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='max-w-2xl mx-auto font-Ovo text-md sm:text-lg text-gray-500 dark:text-gray-400'
      >
        Whether it's ensuring quality or crafting beautiful web experiences, I bring precision and creativity to both worlds.
      </motion.p>

      {/* Buttons with Hover Effects */}
      <div className='flex flex-col sm:flex-row items-center gap-6 mt-8'>
        
        {/* Contact Button */}
        <a
          href="#contact"
          className='px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:border-white dark:text-white hover:scale-105 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg'
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='Arrow Icon' className='w-4' />
        </a>

        {/* Resume Download Button */}
        <a
          href="/Sama_resume.pdf"  // ✅ Make sure file is inside public/
          download
          className='px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black dark:bg-white dark:text-black hover:scale-105 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg'
        >
          My Resume
          <Image src={assets.download_icon} alt='Download Icon' className='w-4' />
        </a>
      </div>
    </div>
  );
};

export default Header;
