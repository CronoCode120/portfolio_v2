import Link from "next/link"
import { useStateContext } from "@/context/StateContext"

import { TbBrandGithub } from "react-icons/tb"
import { FaLinkedinIn } from "react-icons/fa6"

const NetworkCard = () => {
  const { showSign, hideSign } = useStateContext()
  return (
    <article className='rounded-3xl bg-blue-700 lg:col-start-1 lg:row-start-4 max-lg:h-[70px] flex justify-evenly items-center text-3xl text-white'>
      <Link
        href={'https://www.linkedin.com/in/cristobal-tavera'}
        target="_blank"
        aria-label='Linkedin Profile'
        onMouseEnter={(e) => showSign(e, 'Linkedin Profile')}
        onMouseLeave={hideSign}
        className='hover:scale-150 transition-all duration-300'
      >
          <FaLinkedinIn />
        </Link>
      <Link
        href={'https://github.com/CronoCode120'}
        target="_blank"
        aria-label='Github Profile'
        onMouseEnter={(e) => showSign(e, 'Github Profile')}
        onMouseLeave={hideSign}
        className='hover:scale-150 transition-all duration-300'
      >
        <TbBrandGithub />
      </Link>
    </article>
  )
}

export default NetworkCard
