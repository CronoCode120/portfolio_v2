'use client'

import { AboutCard, ContactCard, MainCard, MouseSign, NetworkCard, ProjectsCard, ProjectsSection, SkillsCard, Header, Footer, ContactSection } from '@/components'

import { useStateContext } from '@/context/StateContext'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  const { mouseSign } = useStateContext();
  
  return (
    <div id='home' className='flex flex-col justify-center items-center gap-[40px] p-5'>
      <Toaster />
      <Header />
      <main className='w-full min-h-screen flex flex-col justify-center items-center gap-[40px]'>
        <section className='w-full max-lg:max-w-[450px] mb-12 max-w-[900px] flex flex-col lg:aspect-[3/2] lg:grid lg:grid-cols-1 lg:grid-cols-6 lg:grid-rows-4 gap-5'>
          <MainCard />
          <ContactCard />
          <NetworkCard />
          <AboutCard />
          <ProjectsCard />
          <SkillsCard />
        </section>
        <ProjectsSection />
        <ContactSection />
        {mouseSign.shown && <MouseSign text={mouseSign.text} pos={mouseSign.pos} />}
      </main>
      <Footer />
    </div>
  )
}
