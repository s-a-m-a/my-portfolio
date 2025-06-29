import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutMe, education, languages } from '@/assets/assets';

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const About = ({ isDarkMode }) => {
  const sections = [
    {
      title: 'About Me',
      icons: aboutMe,
      content: (
        <div className="space-y-3 mt-4">
          <p>Hello, I'm Sama — a versatile Software QA Engineer and Front-End Developer with a passion for crafting reliable and engaging web experiences. I specialize in both manual and automation testing (Selenium + Java), and in building responsive, accessible UIs using React, Next.js, and Tailwind CSS.</p>
          <p>My journey bridges the gap between quality assurance and front-end development, allowing me to create user interfaces that are not only visually appealing but also robust and thoroughly tested.</p>
          <p>I've contributed to impactful projects across defense, medical, and web domains—delivering quality, usability, and performance with every solution.</p>
        </div>
      ),
    },
    {
      title: 'Education',
      icons: education,
      content: (
        <div className="space-y-3 mt-4">
          <p><strong>BE in Computer Science</strong> – Visvesvaraya Technological University (VTU), Karnataka, India</p>
          <p>Graduated with a CGPA of 8.10. I developed a keen interest in web development and programming during my studies and worked on various projects that deepened my understanding of computer science concepts.</p>
        </div>
      ),
    },
    {
  title: 'Previous Work Experience',
  icons: languages,
  content: (
    <div className="space-y-5 mt-4 text-[15px] font-Ovo">
      
      {/* Trainee Engineer */}
      <div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          Trainee Engineer – 1 (Software QA)
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Bharat Electronics Limited (BEL), Bengaluru, India &nbsp; | &nbsp; June 2025 – Present
        </p>
        <p>
          Worked on critical defense systems involving both web and embedded modules. Designed and executed functional, regression, and exploratory test cases; automated scenarios using Selenium and TestNG (boosting test efficiency by 30%). Collaborated with developers via JIRA to reduce issue resolution time by 25%. Conducted system-level performance testing using JMeter with a primary focus on defense-grade applications.
        </p>
      </div>

      {/* Graduate Apprentice */}
      <div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          Graduate Apprentice Trainee (Software QA)
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Bharat Electronics Limited (BEL), Bengaluru, India &nbsp; | &nbsp; Feb 2024 – Feb 2025
        </p>
        <p>
          Tested applications across defense, navy, and medical domains. Automated UI flows using Selenium and TestNG; performed functional and integration testing; logged and tracked defects in JIRA. Carried out performance testing using JMeter and LoadRunner. Executed 3500+ test cases with 99% traceability and achieved a 95% bug closure rate.
        </p>
      </div>

    </div>
  ),
}

  ];

  return (
    <div id="about" className="w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 my-20">

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 text-black dark:text-white w-full max-w-7xl">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.03,
              y: -10,
              transition: { type: 'spring', stiffness: 200, damping: 12 },
            }}
            className="p-6 rounded-3xl border bg-white/20 dark:bg-black/20 backdrop-blur-xl 
              shadow-xl transform-gpu transition-all duration-300 border-transparent 
              hover:border-purple-400/50 hover:bg-gradient-to-tr from-purple-400/10 to-cyan-400/10 
              overflow-hidden break-words"
          >
            <motion.h3
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="text-2xl font-bold mb-4 text-black dark:text-white tracking-tight relative"
            >
              {section.title}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 animate-pulse"></span>
            </motion.h3>

            <div className="flex gap-3 mb-4 flex-wrap">
              {section.icons.map(({ icon, iconDark, title }, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-8 h-8 rounded shadow-sm 
                      group-hover:scale-110 group-hover:rotate-6 
                      transition-transform duration-300 animate-pulse"
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {section.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
