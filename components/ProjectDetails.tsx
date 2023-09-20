'use client'

import { useEffect } from "react";
import Link from "next/link";

import { TbExternalLink, TbBrandGithub } from 'react-icons/tb'


export interface DetailsInterface {
  title: string
  desc: string
  link: string
  repoLink: string
  usedTech: string[]
  bgColor: string
}

const ProjectDetails = ({ details }: { details: DetailsInterface }) => {
  const { title, desc, link, repoLink, usedTech, bgColor } = details

  useEffect(() => {
    const title = document.getElementById('title')
    if (title instanceof HTMLElement) {
      title.style.color = bgColor
    }
    const techs = Array.from(document.getElementsByClassName('tech'))
    techs.forEach(el => {
      if (el instanceof HTMLLIElement) {
        el.style.backgroundColor = bgColor
      }
    })
  }, [bgColor])

  return (
      <article className='relative w-full min-w-[280px] max-w-[340px] h-full min-h-[380px] max-h-[440px] p-5 text-white col-start-1 rounded-3xl flex flex-col justify-between bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-700 to-black to-40% shadow-lg shadow-gray-700 overflow-y-hidden transition-all duration-300'>
        <div>
          <header className="flex justify-between items-center">
            <h2 id="title" className="font-bold text-lg text-blue-200 w-fit rounded-full transition-all duration-300">{title}</h2>
            <Link href={link} target="_blank" className="flex justify-center items-center p-1 rounded-lg gap-[5px] text-white font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-200"><TbExternalLink className='text-xl' /> VISIT</Link>
          </header>
          <p className="mt-5 font-light text-gray-200 text-sm xl:text-base leading-relaxed">{desc}</p>
        </div>
        <div className="flex flex-col justify-end gap-[20px] h-full">
          <ul className="select-none flex flex-wrap justify-start items-center gap-[8px]">
            {usedTech.map(tech => (
              <li
                key={title + tech}
                className="rounded-full px-2 py-1 font-medium text-sm bg-blue-200 text-black tech"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center h-fit">
            <Link href={repoLink} target="_blank" className="w-fit px-2 py-1 rounded-lg flex items-center gap-[5px] hover:bg-white hover:text-black transition-all duration-300"><TbBrandGithub className='text-2xl' /> <span className="text-sm">
              Github repository</span>
            </Link>
          </div>
        </div>
      </article>
  )
}

export default ProjectDetails
