import React from 'react';
import { aboutMe, assets, education, keyProjects, languages } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutMe = ({ isDarkMode }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-20 my-20">
      {/* Boxes for Description, Education, and Previous Work */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* About Me Box with keyProjects.map */}
        <motion.div
          className="p-6 border border-gray-400 rounded-xl bg-white dark:bg-gray-800 dark:border-white hover:scale-105 hover:translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_5px_rgba(255,0,255,0.5),0px_0px_20px_5px_rgba(0,255,255,0.5),0px_0px_20px_5px_rgba(0,0,255,0.5)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold mb-3">About Me</h3>

          {/* keyProjects Icons */}
          <div className="flex gap-4 mb-4">
            {aboutMe.map(({ icon, iconDark, title }, index) => (
              <Image
                key={index}
                src={isDarkMode ? iconDark : icon}
                alt={title}
                className="w-7 h-7"
              />
            ))}
          </div>

          <p className="mb-4 text-black dark:text-white">
  Hello, I'm Sama — a versatile Software QA Engineer and Front-End Developer with a passion for crafting reliable and engaging web experiences. I specialize in both manual and automation testing (Selenium + Java), and in building responsive, accessible UIs using React, Next.js, and Tailwind CSS.
</p>
<p className="mb-4 text-black dark:text-white">
  My journey bridges the gap between quality assurance and front-end development, allowing me to create user interfaces that are not only visually appealing but also robust and thoroughly tested. I focus on turning complex challenges into seamless, intuitive solutions that work flawlessly across devices.
</p>
<p className="text-black dark:text-white">
  I’ve contributed to impactful projects across defense, medical, and web domains—delivering quality, usability, and performance with every solution. I'm always eager to learn, grow, and collaborate on meaningful projects that make a difference.
</p>

        </motion.div>

        {/* Education Section with education.map */}
        <motion.div
          className="p-6 border border-gray-400 rounded-xl bg-white dark:bg-gray-800 dark:border-white hover:scale-105 hover:translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_5px_rgba(255,0,255,0.5),0px_0px_20px_5px_rgba(0,255,255,0.5),0px_0px_20px_5px_rgba(0,0,255,0.5)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold mb-3">Education</h3>

          {/* education Icons */}
          <div className="flex gap-4 mb-4">
            {education.map(({ icon, iconDark, title }, index) => (
              <Image
                key={index}
                src={isDarkMode ? iconDark : icon}
                alt={title}
                className="w-7 h-7"
              />
            ))}
          </div>

          <p className="text-gray-600 dark:text-white">
            <strong>BE in Computer Science</strong> – Visvesvaraya Technological University (VTU), Karnataka, India
          </p>
          <p className="text-gray-600 dark:text-white mt-2">
            Graduated with a CGPA of 8.10. I developed a keen interest in web development and programming during my studies and worked on various projects that deepened my understanding of computer science concepts.
          </p>
        </motion.div>

        {/* Previous Work with languages.map */}
        <motion.div
          className="p-6 border border-gray-400 rounded-xl bg-white dark:bg-gray-800 dark:border-white hover:scale-105 hover:translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_5px_rgba(255,0,255,0.5),0px_0px_20px_5px_rgba(0,255,255,0.5),0px_0px_20px_5px_rgba(0,0,255,0.5)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold mb-3">Previous Work Experience</h3>

          {/* languages Icons */}
          <div className="flex gap-4 mb-4">
            {languages.map(({ icon, iconDark, title }, index) => (
              <Image
                key={index}
                src={isDarkMode ? iconDark : icon}
                alt={title}
                className="w-7 h-7"
              />
            ))}
          </div>

          <p className="text-gray-600 dark:text-white">
  <strong>Trainee Software Engineer</strong> – Bharat Electronics Limited (BEL), Bengaluru, India
</p>
<p className="text-gray-600 dark:text-white mt-2">
  Worked as a Trainee Software Engineer for one year, contributing to 9 major projects across defense, medical, navy, and web domains. I designed and executed over 3000+ manual test cases with 99% requirement traceability, collaborated closely with developers to identify critical issues early, and improved QA efficiency by 20%. I also explored front-end technologies to better understand UI flows and user experience, expanding my technical skills beyond core responsibilities.
</p>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
