'use client'
import Navbar from "./componente/Navbar";
import Header from "./componente/Header";

import About from "./componente/About";
import Work from "./componente/Work";
import Contact from "./componente/Contact";
import Footer from "./componente/Footer";
import { useEffect, useState } from "react";
import Tools from "./componente/Tools";




export default function Home() {

const [isDarkMode, setIsDarkMode]=useState(false);

useEffect(()=>{
  if(localStorage.theme ==='dark'|| (!('theme' in localStorage)&& window.matchMedia('(prefers-color-scheme:Dark)').matches)){
    setIsDarkMode(true)}
    
  else{
    setIsDarkMode(false)
  }
},[])



useEffect(()=>{
if(isDarkMode){

  document.documentElement.classList.add('dark');
  localStorage.theme='dark';
}
else{
  document.documentElement.classList.remove('dark');
  localStorage.theme='';
}
}, [isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>

    <Tools isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>

    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
  
    </>
  );
}
