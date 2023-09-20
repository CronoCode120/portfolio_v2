import { Navbar } from "."

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center pt-10">
      <Navbar />
      <h1 className="w-[70%] text-3xl sm:text-4xl text-center font-light my-8">Coding should be about helping other people.</h1>
    </header>
  )
}

export default Header
