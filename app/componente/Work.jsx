
import { assets, workData, serviceData } from '@/assets/assets'
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

  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20 text-black dark:text-white'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio </h4>
      <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Here's a quick overview of my QA and frontend projects, including a featured To-Do app with live link access.</p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => openSummary(project)}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  onClick={(e) => e.stopPropagation()} // prevent summary modal
                  className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'
                >
                  <Image src={assets.send_icon} alt='send icon' className='w-5' />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' onClick={closeModal}>
          <div className='bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg max-w-md w-full relative' onClick={(e) => e.stopPropagation()}>
            <h2 className='text-xl font-semibold mb-2'>{selectedProject.title}</h2>
            <p className='mb-4'>{selectedProject.summary}</p>
            <button onClick={closeModal} className='absolute top-2 right-4 text-lg font-bold'>&times;</button>
          </div>
        </div>
      )}

      <a
        href=""
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
        rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 
        dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        show more
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow" className='w-4' />
      </a>
    </div>
  )
}

export default Work
