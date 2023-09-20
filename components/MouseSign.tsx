'use client'

import { FC, useEffect } from 'react'
import { MousePosition } from '@/context/StateContext'

interface SignProps {
  text: string
  pos: MousePosition
}

const MouseSign: FC<SignProps> = ({ text, pos }) => {
  useEffect(() => {
    const sign = document.getElementById('main');
    if (sign instanceof HTMLDivElement) {
      sign.style.top = `${pos.y}px`;
      sign.style.left = `${pos.x}px`;
    }
  }, [pos]);

  return (
    <div id='main' aria-hidden className='absolute z-40 -translate-x-1/2 -translate-y-[120%] flex flex-col items-center justify-center drop-shadow-[0_10px_10px_rgba(0,0,0,.6)]'>
      <p className='text-center px-2 py-1 rounded-lg bg-yellow-300'>{text}</p>
      <div className='w-0 h-0 -translate-y-[1px] border-t-[10px] border-t-yellow-300 border-x-[6px] border-x-transparent'></div>
    </div>
  )
}

export default MouseSign
