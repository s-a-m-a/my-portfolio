import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);  // Controls whether navbar is sticky or fixed
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true); // Switch to fixed position after 50px scroll
        setShowNavbar(false); // scrolling down, hide navbar
      } else {
        setIsSticky(false); // Return to sticky at top
        setShowNavbar(true); // scrolling up, show navbar
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Fixed Banner Message */}
      <div className="fixed top-0 w-full z-50 bg-yellow-100 text-black text-center text-sm font-medium shadow-md dark:bg-yellow-200 dark:text-black py-2">
        I'm enhancing the site, but feel free to browse through my evolving portfolio!
      </div>

      {/* Navbar with Fixed Position on Scroll */}
      <nav className={`w-full ${isSticky ? 'fixed top-0' : 'sticky top-10'} px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 text-black dark:text-white 
        ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} 
        ${lastScrollY > 50 ? "bg-white bg-opacity-70 backdrop-blur-lg dark:bg-darkTheme" : "shadow-none dark:shadow-none"} 
        transform transition-all ease-in-out`}>
        
        {/* Logo */}
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt='' />
        </a>

        {/* Desktop Nav Links */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${lastScrollY > 50 ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} 
          shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out`}>
          <li className="transition-all duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">
            <a className='font-Ovo' href="#top">Home</a>
          </li>
          <li className="transition-all duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">
            <a className='font-Ovo' href="#about">About me</a>
          </li>
          <li className="transition-all duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">
            <a className='font-Ovo' href="#work">Work</a>
          </li>
          <li className="transition-all duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">
            <button
              className="font-Ovo"
              onClick={() => {
                const section = document.getElementById('skills');
                section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              Skills
            </button>
          </li>
          <li className="transition-all duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">
            <a className='font-Ovo' href="#contact">Contact</a>
          </li>
   
        </ul>

        {/* Dark Mode & Contact */}
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
            Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' />
          </a>

          {/* Mobile Menu Icon */}
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.clo : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
