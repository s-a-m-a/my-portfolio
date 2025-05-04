import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    
       <div className='mt-20 pb-24'>
      {/* Floating message */}
      <div className=" flex items-center fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg text-sm md:text-base font-Outfit z-50 opacity-90 hover:opacity-100 transition-all duration-300 animate-fade-in-up">
        I'm enhancing the site, but feel free to browse through my evolving portfolio!
      </div>
      <div className='text-center'>
        <Image src ={isDarkMode? assets.logo_dark:assets.logo} alt='' className='w-36 mx-auto mb-2'/> 
      <div className='w-max flex items-center gap-2 mx-auto text-black dark:text-white'> 
      <Image src ={isDarkMode? assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6 '/> 
       Samaaa.1201@gmail.com
       
      </div>
      </div>

      <div className='text-center  sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-black dark:text-white'>
      <p> 2025 Sama all rights reserved. </p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
        <li> <a target='_blank' href='https://github.com/s-a-m-a'> Github </a></li>
            <li> <a target='_blank' href='https://www.linkedin.com/in/ssamah/' > LinkedIn  </a></li>
            <li> <a target='_blank' href='https://www.linkedin.com/in/ssamah/' > LinkedIn  </a></li>
            
        </ul>
        </div>
      </div>
    
  )
}

export default Footer
