'use client'

import projectsList from '@/utils/projectsList'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { ProjectDetails } from '@/components'
import { useStateContext } from '@/context/StateContext'

const Projects = () => {
  const { showSign, hideSign } = useStateContext()
  
  const [selected, setSelected] = useState(0);
  const [windowDefined, setWindowDefined] = useState(false);

  useEffect(() => {
    setWindowDefined(true);
  }, [])

  const { title, desc, link, repoLink, usedTech, bgColor } = projectsList[selected];
  const details = { title, desc, link, repoLink, usedTech, bgColor };


  const updateDetails = (idx: number) => () => {
    setSelected(idx);
  }

  return (
    <section id='projects' className='w-full min-h-screen pt-14'>
      <header className='w-full mt-5'>
        <h1 className='w-full h-[55px] text-center font-semibold text-5xl'>Projects</h1>
      </header>
      <div id='project-details' className='w-full pt-14 max-lg:flex max-lg:flex-col max-lg:items-center lg:grid lg:grid-cols-3 lg:justify-items-center lg:items-center gap-[20px]'>
        <ProjectDetails details={details} />
        <ul className="w-full lg:max-w-[60vw] max-lg:mt-8 h-full lg:col-start-2 lg:col-span-2 grid grid-cols-2 justify-center items-center lg:gap-[10px]">
        {projectsList.map((project, idx) => (
          <li key={project.title} className="relative w-full max-w-[500px] aspect-[3/2]">
            {windowDefined && window.innerWidth <= 900 ? (
              <a href={'#project-details'}>
                <button
                  type="button"
                  aria-label={`About ${project.title} project`}
                  onClick={updateDetails(idx)}
                  onMouseEnter={e => showSign(e, project.title)}
                  onMouseLeave={hideSign}
                  className={`group relative w-full h-full rounded-lg overflow-hidden drop-shadow-[0_10px_15px_rgb(31,41,55)] ${idx === selected ? 'scale-100' : 'scale-75 opacity-60 hover:opacity-100'} transition-all duration-300`}
                >
                  <Image
                    src={project.image}
                    alt="Screenshot of the project"
                    fill
                    sizes='(max-width: 900px) 40vw, 35vw'
                    className="object-cover"
                  />
                </button>
              </a>
            ) : (
              <button
                type="button"
                aria-label={`About ${project.title} project`}
                onClick={updateDetails(idx)}
                onMouseEnter={e => showSign(e, project.title)}
                onMouseLeave={hideSign}
                className={`group relative w-full h-full rounded-lg overflow-hidden drop-shadow-[0_10px_15px_rgb(31,41,55)] ${idx === selected ? 'scale-100' : 'scale-75 opacity-60 hover:opacity-100'} transition-all duration-300`}
              >
                <Image
                  src={project.image}
                  alt="Screenshot of the project"
                  fill
                  className="object-cover"
                />
              </button>
            )}
            
          </li>
        ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
