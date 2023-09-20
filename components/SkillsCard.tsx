import techStack from '@/utils/techStack'

import { useStateContext } from '@/context/StateContext'

const SkillsCard = () => {
  const { showSign, hideSign } = useStateContext()

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
