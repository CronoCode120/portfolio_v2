import { useStateContext } from '@/context/StateContext'

import { SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiEslint, SiJest, SiVitest, SiTestinglibrary, SiGit } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const SkillsCard = () => {
  const { showSign, hideSign } = useStateContext()

  const techStack = [
    { label: 'HTML5', icon: SiHtml5 },
    { label: 'CSS3', icon: SiCss3 },
    { label: 'JavaScript', icon: SiJavascript },
    { label: 'React', icon: SiReact },
    { label: 'TypeScript', icon: SiTypescript },
    { label: 'TailwindCSS', icon: SiTailwindcss },
    { label: 'REST Api\'s', icon: TbApi },
    { label: 'Next.js', icon: SiNextdotjs },
    { label: 'Node.js', icon: SiNodedotjs },
    { label: 'MongoDB', icon: SiMongodb },
    { label: 'Git', icon: SiGit },
    { label: 'ESLint', icon: SiEslint },
    { label: 'Vitest', icon: SiVitest },
    { label: 'Jest', icon: SiJest },
    { label: 'React Testing Library', icon: SiTestinglibrary },
  ]

  return (
    <article className='lg:row-start-3 lg:row-span-2 lg:col-start-5 lg:col-span-2 w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-green-200 via-green-300 to-blue-500 text-black rounded-3xl'>
      <header className='lg:col-start-1 lg:col-span-2 max-lg:mb-5'>
        <h2 className='text-xl font-bold rounded-lg'>Skills</h2>
      </header>
      <ul className='grid grid-cols-5 grid-rows-3 w-full h-full justify-center items-center max-lg:gap-y-5 text-4xl'>
        {techStack.map(item => {
          const {icon: ItemIcon} = item
          return (
            <li
              key={item.label}
              aria-label={item.label}
              onMouseEnter={e => showSign(e, item.label)}
              onMouseLeave={hideSign}
              className='justify-self-center items-self-center hover:scale-150 transition-all duration-300'
            >
              <ItemIcon />
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default SkillsCard
