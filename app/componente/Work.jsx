'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Work = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const qaProjects = [
    {
      title: "GCS – Ground Control System",
      duration: "June 2025 – Present",
      description: "Manual testing of satellite-fetched data across modules.",
      summary: `• Conducting manual testing on a system that stores and processes satellite-fetched data across interconnected ground modules.\n• Validating data flow and communication between subsystems to ensure consistency and reliability of stored telemetry.\n• Designed test cases for system sync, data validation, and inter-module messaging, ensuring smooth backend operations.`,
    },
    {
      title: "Defense System - ACCCS",
      duration: "Feb 2025 – Present",
      description: "QA for a mission-critical defense control system.",
      summary: `• End-to-end testing of a large-scale, mission-critical defense application focusing on system reliability and performance.\n• Collaborated with developers and analysts to identify and resolve defects.\n• Validated system modules against stringent functional and defense-grade requirements.`,
    },
    {
      title: "Dialysis System",
      duration: "Jan 2025 – Feb 2025",
      description: "QA for software-hardware integration in medical system.",
      summary: `• Designed test cases covering 95% of software-hardware interaction points.\n• Detected defects in sensor accuracy and real-time monitoring with 75% detection accuracy.\n• Worked closely with developers to fix and deploy a stable system with 90% deployment success.`,
    },
    {
      title: "E-Mentorship In-house Application",
      duration: "Jun 2024 – Aug 2024",
      description: "Automated and performance tested an internal mentorship platform.",
      summary: `• Developed and executed automation test cases using Selenium + TestNG.\n• Performed functional, regression, and performance testing using JMeter and LoadRunner.\n• Improved application scalability by 15%; resolved UI/UX issues, achieving 96% navigation success.`,
    },
    {
      title: "Navy Application",
      duration: "Apr 2024 – Jun 2024",
      description: "Functional and hardware interface testing for Navy software.",
      summary: `• Built test cases for software-hardware interfaces, increasing coverage by 30%.\n• Conducted functional testing and maintained 98% traceability in documentation.\n• Reported and resolved hardware integration issues alongside developers.`,
    },
    {
      title: "Defense Application - ACCCS",
      duration: "Feb 2024 – Apr 2024",
      description: "QA for control system integration in defense.",
      summary: `• Authored test cases ensuring 95% system reliability.\n• Conducted rigorous manual testing and hardware validation.\n• Reported high-impact bugs that were resolved with a 94% success rate.`,
    },
  ]

  const frontendProjects = [
     {
      title: "Online Jewelry Store",
      duration: "May 2025",
      description: "Built a responsive Jewelry Store interface.",
      summary: "Interactive website, local storage, and a clean UI/UX experience.",
      link: "",
    },
 
    {
      title: "To-Do App",
      duration: "April 2025",
      description: "Task manager built with React and Tailwind.",
      summary: "Add/delete/complete tasks with data persisted in localStorage.",
      link: "https://to-do-list-gules-pi-13.vercel.app/",
    },
    ]

  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20 text-black dark:text-white'>
      <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Here's a quick overview of my QA and frontend projects, including live links and detailed summaries.
      </p>

      {/* Category Selection */}
      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10'>
        {/* Frontend Projects */}
        <div
          className='aspect-square rounded-lg cursor-pointer bg-cover bg-center hover:scale-105 transition-all relative'
          style={{ backgroundImage: "url('/work-3.png')" }}
          onClick={() => setSelectedCategory("Frontend")}
        >
          <div className='absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center'>
            <h3 className='text-xl font-Ovo text-white'>Frontend Projects</h3>
          </div>
        </div>

        {/* QA Projects */}
        <div
          className='aspect-square rounded-lg cursor-pointer bg-cover bg-center hover:scale-105 transition-all relative'
          style={{ backgroundImage: "url('/work-2.png')" }}
          onClick={() => setSelectedCategory("QA")}
        >
          <div className='absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center'>
            <h3 className='text-xl font-Ovo text-white'>QA Projects</h3>
          </div>
        </div>
      </div>

      {/* Project List Modal */}
      {selectedCategory && !selectedProject && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={() => setSelectedCategory(null)}
        >
          <div className='bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto'>
            <h2 className='text-xl font-Ovo font-semibold mb-4'>
              {selectedCategory === 'QA' ? 'QA Projects' : 'Frontend Projects'}
            </h2>

            {(selectedCategory === 'QA' ? qaProjects : frontendProjects).map((proj, index) => (
              selectedCategory === 'QA' ? (
                <div
                  key={index}
                  className='mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition'
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(proj)
                  }}
                >
                  <h3 className='text-lg font-Ovo font-semibold'>{proj.title}</h3>
                  <p className='text-sm italic'>{proj.duration}</p>
                  <p className='text-sm'>{proj.description}</p>
                </div>
              ) : (
                <div
                  key={index}
                  className='mb-3 p-4 bg-gray-100 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition'
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(proj)
                  }}
                >
                  <h3 className='text-lg font-Ovo font-semibold'>{proj.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300 italic'>{proj.duration}</p>
                  <p className='text-sm text-gray-700 dark:text-gray-300'>{proj.description}</p>
                </div>
              )
            ))}

            <button
              onClick={() => setSelectedCategory(null)}
              className='absolute top-2 right-4 text-lg font-bold text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={() => setSelectedProject(null)}
        >
          <div className='bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg max-w-lg w-full relative transform transition-all duration-300 hover:scale-105'>
            <h2 className='text-xl font-Ovo font-semibold mb-2'>{selectedProject.title}</h2>
            <p className='text-sm italic mb-2'>{selectedProject.duration}</p>
            <p className='text-base whitespace-pre-wrap font-Ovo mb-4'>{selectedProject.summary}</p>
            {selectedProject.link ? (
              <a href={selectedProject.link} target="_blank" className="text-blue-600 underline">View Project</a>
            ) : (
              <p className="text-gray-400 italic">No link available</p>
            )}
            <button
              onClick={() => setSelectedProject(null)}
              className='absolute top-2 right-4 text-lg font-bold text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Show More Button */}
      <a
        href="#"
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        show more
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow" className='w-4' />
      </a>
    </div>
  )
}

export default Work
