'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { ProjectDetails } from '@/components'
import { useStateContext } from '@/context/StateContext'

export interface DetailsInterface {
  title: string
  desc: string
  link: string
  repoLink: string
  usedTech: string[]
  bgColor: string
}

interface ProjectType extends DetailsInterface {
  image: string
}

const Projects = () => {
  const { showSign, hideSign } = useStateContext()

  const projectsList: ProjectType[] = [
    {
      title: 'Reading List',
      desc: 'Explore a catalog of books, add them to your reading list and remove them as well. You can take a look on each book\'s details, such as the author or the synopsis.',
      image: '/readlist-shot.jpg',
      usedTech: ['Next.js', 'TypeScript', 'TailwindCSS', 'ESLint'],
      link: 'https://readlist-opal.vercel.app',
      repoLink: 'https://github.com/CronoCode120/readlist',
      bgColor: 'rgb(191,219,254)'
    },
    {
      title: 'Wordle',
      desc: 'A recreation of the classic Wordle game. Fully playable! Instructions are included in the page.',
      image: '/wordle-shot.jpg',
      usedTech: ['Next.js', 'TailwindCSS', 'TypeScript', 'ESLint'],
      link: 'https://wordle-zeta-five.vercel.app',
      repoLink: 'https://github.com/CronoCode120/wordle',
      bgColor: 'rgb(254,240,138)'
    },
    {
      title: 'E-commerce Site',
      desc: 'Online fictional shop where you can explore products, check their details, add them to a cart and buy them. The products are retrieved from a Sanity dashboard containing all the catalog data, which can be edited at any time.',
      image: '/ecommerce-shot.jpg',
      usedTech: ['Next.js', 'CSS', 'Sanity', 'Stripe', 'REST Api'],
      link: 'https://online-shop-five-alpha.vercel.app',
      repoLink: 'https://github.com/CronoCode120/online-shop',
      bgColor: 'rgb(245,208,254)'
    },
    {
      title: 'CRUD App',
      desc: 'A simple social app where you can create an account and log in; create, edit and delete posts; edit your profile, change your credentials and delete your own account. You can also like and comment other users\' posts.',
      image: '/social-shot.jpg',
      usedTech: ['Next.js', 'TailwindCSS', 'MongoDB', 'REST Api'],
      link: 'https://think-share.vercel.app',
      repoLink: 'https://github.com/CronoCode120/thinkShare',
      bgColor: 'rgb(167,243,208)'
    }
  ]
  
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
