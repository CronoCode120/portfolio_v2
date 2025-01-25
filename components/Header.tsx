import { Navbar } from "."

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center pt-10">
      <Navbar />
      <p className="w-[70%] text-3xl sm:text-4xl text-center font-light my-8">Coding should be about helping other people.</p>
    </header>
  )
}

export default Header
