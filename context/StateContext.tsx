'use client'

import { useContext, createContext, useState, useEffect } from 'react'

export type MousePosition = {
  x: number
  y: number
}

interface MouseSign {
  text: string,
  pos: MousePosition,
  shown: boolean
}

const initialSignValue: MouseSign = {
  text: '',
  pos: {
    x: 0,
    y: 0
  },
  shown: false
}

interface ContextInterface {
  mouseSign: MouseSign,
  showSign: (e: React.MouseEvent, text: string) => void,
  hideSign: () => void
}

const Context = createContext<ContextInterface>({
  mouseSign: initialSignValue,
  showSign: (e, text) => {},
  hideSign: () => {}
})

const StateContext = ({
  children
}: {
  children: React.ReactNode
}) => {

  const [mouseSign, setMouseSign] = useState<MouseSign>(initialSignValue);

  const handleMouseMove = (e: MouseEvent) => {
    const newPos: MousePosition = {
      x: e.pageX,
      y: e.pageY
    }
    setMouseSign(prevState => ({ ...prevState, pos: newPos }))
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
  }, []);

  const showSign = (e: React.MouseEvent, text: string) => {
    const newState: MouseSign = {
      text,
      pos: {
        x: e.pageX,
        y: e.pageY
      },
      shown: true
    };
    setMouseSign(newState);
  }

  const hideSign = () => setMouseSign(prevState => ({ ...prevState, shown: false }))

  return (
    <Context.Provider value={{
      mouseSign,
      showSign,
      hideSign
    }}>
      { children }
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)

export default StateContext
