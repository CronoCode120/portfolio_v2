import Image from "next/image"
import keyboard from '@/public/keyboard.png'

const AboutCard = () => {
  return (
    <article className='group relative lg:col-start-3 lg:col-span-4 lg:row-start-1 lg:row-span-2 w-full max-lg:h-[400px] lg: p-5 bg-gray-200 text-black rounded-3xl overflow-hidden'>
      <header className="w-full max-lg:mb-6">
        <h2 className='text-xl font-bold w-full text-left'>About</h2>
      </header>
      <p className='font-light text-left lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[60%]'>Self-taught web developer with <span className='font-semibold'>strong learning aptitudes, autonomy, proactivity and sense of responsibility</span>. Passionate about programming and eager to acquire new skills to keep evolving. Ready to make use of my knowledge in a professional environment.</p>
      <div className='absolute w-[160%] lg:w-full h-[95%] top-[50%] lg:top-1/2 lg:-translate-y-1/2 left-[30%] lg:rotate-90 lg:scale-[40%] lg:group-hover:scale-100 lg:group-hover:rotate-0 lg:group-hover:left-[70%] lg:transition-all lg:duration-[500ms]'>
        <Image
          src={keyboard}
          alt='Keyboard'
          fill
          className='drop-shadow-[0_10px_15px_rgb(0,0,0)] object-contain'
        />
      </div>
    </article>
  )
}

export default AboutCard
