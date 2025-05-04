import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { toolsData } from '@/assets/assets'; // Make sure this points to an array of image paths

const Tools = ({ isDarkMode }) => {
  const toolsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }

    return () => {
      if (toolsRef.current) observer.unobserve(toolsRef.current);
    };
  }, []);

  return (
    <div
  id="tools"
  ref={toolsRef}
  className={`text-center mt-10 transition-all duration-700 scroll-mt-40 ${
    isVisible ? 'animate-fade-in-up' : 'opacity-0'
  }`}
>

      <h4 className="my-6 text-gray-700 font-Ovo text-xl dark:text-white">
        TOOLS
      </h4>
      <ul className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
      {toolsData.map((tool, index) => (
  <li
    key={index}
    className="relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300"
  >
    {/* Tooltip on hover */}
    <span className="absolute top-[-1.8rem] text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
      {tool.name}
    </span>

    {/* Tool icon */}
    <Image src={tool.src} alt={tool.name} width={28} height={28} />
  </li>
))}
      </ul>
    </div>
  );
};

export default Tools;
