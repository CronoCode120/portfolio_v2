import Link from "next/link"
import { useStateContext } from "@/context/StateContext"

import { SiGmail } from "react-icons/si"
import { TbPencil } from "react-icons/tb"

const ContactCard = () => {
  const { showSign, hideSign } = useStateContext()

  return (
    <article className='rounded-3xl bg-gray-200 lg:col-start-2 p-5 max-lg:h-[70px] flex lg:flex-col justify-evenly items-center lg:hover:bg-white lg:hover:shadow-lg lg:hover:shadow-gray-700 lg:hover:translate-y-[-5px] lg:transition-all lg:duration-300'>
      <a
        href='#contact'
        onMouseEnter={e => showSign(e, 'Send a message :)')}
        onMouseLeave={hideSign}
        className='font-bold flex justify-center items-center gap-[5px] border-b-[2px] max-lg:border-black lg:border-transparent lg:hover:border-black lg:transition-all lg:duration-300'
      >
        <SiGmail /> Contact
      </a>
      <Link
        href={'/résumé.pdf'}
        target="_blank"
        download
        onMouseEnter={e => showSign(e, 'Take a look!')}
        onMouseLeave={hideSign}
        className='font-bold flex justify-center items-center gap-[5px] border-b-[2px] max-lg:border-black lg:border-transparent lg:hover:border-black lg:transition-all lg:duration-300'
      >
        <TbPencil /> Résumé
      </Link>
    </article>
  )
}

export default ContactCard
