import Image from "next/image"
import myPic from '@/public/myPic3.jpg'
import { useStateContext } from "@/context/StateContext"

const MainCard = () => {
  const { showSign, hideSign } = useStateContext()

  return (
    <div className='lg:row-span-3 lg:col-span-1 lg:col-span-2 w-full lg:h-full max-lg:h-[500px] p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-700 to-black to-50% text-gray-200 rounded-3xl flex flex-col items-center justify-between gap-[40px] shadow-lg shadow-gray-700'>
      <header>
        <h1 className='text-2xl font-bold text-center mb-2'>Cristóbal Tavera Fernández</h1>
        <p className='text-base text-center'>Front-End Web Developer</p>
      </header>
      <div className='relative h-full aspect-square rounded-full overflow-hidden'>
        <Image
          src={myPic}
          alt='This is me'
          fill
          sizes="(max-width: 900px) 75vw, 15vw"
          priority
          onMouseEnter={(e) => showSign(e, 'This is me')}
          onMouseLeave={hideSign}
          className='rounded-full'
        />
      </div>
      <p className='font-light'>Building modern, responsive and accessible web applications. Ambitious, commited, passionate, perfectionist.</p>
    </div>
  )
}

export default MainCard
