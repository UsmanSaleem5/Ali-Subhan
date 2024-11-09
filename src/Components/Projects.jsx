import React from 'react'
import { PROJECTS } from '../constants'
import { FaArrowRightLong } from "react-icons/fa6";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>    
      <div className="">
        {PROJECTS.map((project, index) => (
          <div className="mb-12 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4"> 
              <img 
                src={project.image} 
                width={150} 
                height={150} 
                className="mb-6 rounded" 
                alt={project.title} 
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span 
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900" 
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Conditionally render the View Site button for the first project only */}
              {index === 0 && (
                <a 
                  href="https://usmansaleem5.github.io/NFT_MarketPlace/"  // Replace with the actual project URL
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 w-[20%] justify-center items-center gap-3 px-2 py-1 text-sm bg-neutral-300 whitespace-nowrap text-black rounded hover:bg-blue-600 transition flex"
                >
                  View Site
                  <FaArrowRightLong />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
