import Image from "next/image"
import Link from "next/link"
import shotBg from '@/public/shot-bg.jpg'
import browserShot from '@/public/browser-shot.png'
import phoneShot from '@/public/phone-shot.png'
import { useStateContext } from "@/context/StateContext"

import { HiArrowRight } from "react-icons/hi"

const ProjectsCard = () => {
  const { showSign, hideSign } = useStateContext()

  return (
    <article className='relative lg:row-start-3 lg:row-span-2 lg:col-start-3 lg:col-span-2 max-lg:aspect-square w-full p-5 bg-gray-300 text-black rounded-3xl overflow-hidden group'>
      <header className='relative z-40 flex justify-between items-center'>
        <h2 className='text-xl font-bold rounded-lg'>Projects</h2>
        <Link
          href={'#projects'}
          aria-label='View work'
          onMouseEnter={e => showSign(e, 'View my work')}
          onMouseLeave={hideSign}
          className='bg-white rounded-full aspect-square w-[35px] h-[35px] flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300'
        >
          <HiArrowRight className='text-[1.5em]' />
        </Link>
      </header>
      <div className='absolute h-full w-full top-0 left-0'>
        <Image
          src={browserShot}
          alt='Project (browser view)'
          fill
          className='z-10 group-hover:-translate-y-full transition-all duration-[500ms]'
        />
        <div className='relative w-full h-full z-10 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-[20%] transition-all duration-[500ms]'>
          <Image
            src={phoneShot}
            alt='Project (phone view)'
            fill
          />
        </div>
      </div>
      <Image
        src={shotBg}
        alt='Project shot'
        fill
        className='object-cover z-0'
      />
    </article>
  )
}

export default ProjectsCard
