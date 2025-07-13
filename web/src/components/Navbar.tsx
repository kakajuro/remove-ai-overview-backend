import { FaGithub } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="flex flex-row items-center p-6 pt-8 h-8 w-screen">
      <div className="w-[15%] flex flex-row justify-between ml-6">
      <a href="/" className="hover:cursor-pointer hover:scale-105 transition-all ease-in-out">
        Home
      </a>
      <a href="/install" className="hover:cursor-pointer hover:scale-102 transition-all ease-in-out">Install</a>
      <a href="/about" className="hover:cursor-pointer hover:scale-102 transition-all ease-in-out">About</a>
      <a href="/donate" className="hover:cursor-pointer hover:scale-102 hover:text-red-600 transition-all ease-in-out">Donate</a>
      </div>
      <div className="ml-auto">
        <FaGithub className="text-xl"/>
      </div>
    </nav>
  )
}

