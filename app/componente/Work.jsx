import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Work = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openSummary = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  // Sub-projects for Frontend Showcase
  const frontendShowcaseProjects = [
    {
      title: "To-Do App",
      description: "A task manager built with React and Tailwind.",
      summary: "Manage your tasks with features like add/delete/complete. Data persists using localStorage.",
      link: "https://to-do-list-gules-pi-13.vercel.app/",
    },
    {
      title: "Event Scheduling Website",
      description: "Built a responsive event scheduling website that lets users create and manage events.",
      summary: "Implemented interactive calendar views, local storage persistence, and user-friendly UI.",
      link: "",
    },
  ]

  // QA Projects content with specific project details
  const qaDetails = `
• Dialysis System   (01/2024 - 02/2025)
  - Achieved 95% test coverage for software-hardware interactions; identified sensor inaccuracies with a 75% detection rate.
  - Collaborated with developers to fix critical bugs, leading to a 90% successful deployment rate.

• E-Mentorship Application   (06/2024 - 08/2024)
  - Automated key functional tests using Selenium, reducing manual test load by 30%.
  - Performed load testing with LoadRunner; improved scalability by 15%.
  - Conducted UI/UX validation for smooth navigation (96% success rate).

• Navy Application   (04/2024 - 06/2024)
  - Ensured 95% pre-deployment defect detection in integration testing.
  - Maintained traceable documentation, enabling seamless QA handoffs.

• Defence Application   (02/2024 - 04/2024)
  - Drafted detailed test cases for software and hardware integration, maintaining 95% system reliability.
  - Validated system interactions, boosting hardware-software integration reliability by 20%.
`

  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20 text-black dark:text-white'>
      
      <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Here's a quick overview of my QA and frontend projects, including live link access.
      </p>

      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group transition-all duration-500 transform hover:scale-105 hover:shadow-lg'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => openSummary(project)}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-Ovo font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700 font-Ovo'>{project.description}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  onClick={(e) => e.stopPropagation()}
                  className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-all duration-300'
                >
                  <Image src={assets.send_icon} alt='send icon' className='w-5' />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Frontend Showcase */}
      {selectedProject && selectedProject.title === "Frontend Showcase" && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' onClick={closeModal}>
          <div className='bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg max-w-md w-full relative transform transition-all duration-300 hover:scale-105'>
            <h2 className='text-xl font-Ovo font-semibold mb-2'>{selectedProject.title}</h2>
            <p className='mb-4 font-Ovo'>{selectedProject.summary}</p>
            <div className="grid gap-4">
              {frontendShowcaseProjects.map((subProject, index) => (
                <div key={index} className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                  <h3 className='text-lg font-Ovo font-semibold'>{subProject.title}</h3>
                  <p className='text-sm mb-2 font-Ovo'>{subProject.description}</p>
                  <p className='text-sm mb-2 font-Ovo'>{subProject.summary}</p>
                  {subProject.link ? (
                    <a href={subProject.link} target='_blank' className='text-blue-600'>
                      View App
                    </a>
                  ) : (
                    <p className='text-gray-500'>Link coming soon</p>
                  )}
                </div>
              ))}
            </div>
            <button onClick={closeModal} className='absolute top-2 right-4 text-lg font-bold text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Modal for QA Projects */}
      {selectedProject && selectedProject.title === "QA Projects" && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' onClick={closeModal}>
          <div className='bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg max-w-2xl w-full relative transform transition-all duration-300 hover:scale-105 overflow-y-auto max-h-[80vh]'>
            <h2 className='text-xl font-Ovo font-semibold mb-4'>QA Projects</h2>
            <pre className='whitespace-pre-wrap text-sm leading-6 font-Ovo'>{qaDetails}</pre>
            <button onClick={closeModal} className='absolute top-2 right-4 text-lg font-bold text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'>
              &times;
            </button>
          </div>
        </div>
      )}

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
