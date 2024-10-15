import Link from "next/link"
import Contact from '../app/contact/page';

function Navbar() {
  return (
    <nav className="flex justify-center bg-indigo-600">
    <ul className="flex gap-10  py-5 text-white text-2xl font-semibold ">
        <li className="hover:text-pink-400 transition-all duration-300 hover:scale-110">
            <Link href="/" >Home</Link>
        </li>
        <li className="hover:text-pink-400 transition-all duration-300 hover:scale-110">
            <Link href="/about">About me</Link>
        </li>
        <li className="hover:text-pink-400 transition-all duration-300 hover:scale-110">
            <Link href="/education">Education</Link>
        </li>
        <li className="hover:text-pink-400 transition-all duration-300 hover:scale-110">
            <Link href="/skills">Skills</Link>
        </li>
        <li className="hover:text-pink-400 transition-all duration-300 hover:scale-110">
            <Link href="/programming">Programming</Link>
        </li>
        <li className="hover:text-pink-400 transition-all duration-300 hover:scale-110">
            <Link href="/contact">Contact</Link>
        </li>
    </ul>  
    </nav>
  )
}

export default Navbar
