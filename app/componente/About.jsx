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
            Hello, I'm Sama, a passionate Front-End Web Developer. I specialize in creating beautiful and user-friendly web interfaces that are both functional and visually engaging. My main focus is on developing responsive and accessible designs that provide smooth user experiences across various devices.
          </p>
          <p className="mb-4 text-black dark:text-white">
            With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I thrive on turning complex problems into simple, intuitive solutions. I'm deeply committed to improving my skills, learning new technologies, and collaborating on innovative projects.
          </p>
          <p className="text-black dark:text-white">
            Throughout my career, I’ve worked on several projects that involved front-end technologies, focusing on building responsive layouts, interactive features, and optimizing websites for performance. I enjoy working in a team and am always looking for new challenges to grow as a developer.
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
            <strong>Front-End Trainee</strong> – Bharat Electronics Limited (BEL), Bengaluru, India
          </p>
          <p className="text-gray-600 dark:text-white mt-2">
            Worked as a Front-End Trainee for a year, contributing to projects involving defense, medical, and navy applications. My role involved collaborating with developers to build responsive web interfaces and optimizing the user experience for various applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
