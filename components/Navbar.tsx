import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-[50] bg-gray-100/80 backdrop-blur-[10px] top-0 left-0 w-full h-14">
      <ul className="w-full h-full flex justify-center lg:justify-end items-center gap-[45px] px-6">
        <li className="font-semibold text-gray-600 hover:text-black transition-all duration-300"><a href='#home'>Home</a></li>
        <li className="font-semibold text-gray-600 hover:text-black transition-all duration-300"><a href='#projects'>Projects</a></li>
        <li className="font-semibold text-gray-600 hover:text-black transition-all duration-300"><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
