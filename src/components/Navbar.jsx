import { useState } from "react"
import { Link } from "react-router"
import { Menu } from 'lucide-react';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <header className='flex justify-between px-10 py-4 items-center text-fondo-dark font-bold bg-fondo-light '>


            <div className="flex items-center gap-5">
                <Link
                    to="/"
                    className="hover:scale-105 transition-all"
                >FastFood Control
                </Link>

                <nav className="max-md:hidden">
                    <ul className="flex gap-5 ">
                        <li className="px-3 py-2 hover:bg-primary hover:text-white rounded-3xl hover:scale-105 transition-all"><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>


            <div className="max-md:hidden flex gap-3 items-center">

                <Link
                    to="/menu"
                    className="px-3 py-2 border-2 text-fondo-dark hover:border-primary hover:text-primary rounded-xl hover:scale-105 transition-all"
                >Ver Menú
                </Link>
                <Link
                    to="/login"
                    className="px-3 py-2 bg-fondo-dark hover:bg-primary text-white rounded-xl hover:scale-105 transition-all"
                >Iniciar Sesión
                </Link>

            </div>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden block hover:scale-105 transition-all cursor-pointer ">
                <Menu />
            </button>

            <div className={`flex flex-col gap-5 md:hidden bg-white absolute top-14 left-0 w-full z-20 transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className="w-full text-center">
                    <li className="px-3 py-4 w-full list-none hover:bg-primary hover:text-white hover:scale-105 transition-all cursor-pointer">
                        <Link to="/" className="block w-full">Home</Link>
                    </li>
                    <li className="px-3 py-4 w-full list-none hover:bg-primary hover:text-white hover:scale-105 transition-all cursor-pointer">
                        <Link to="/menu" className="block w-full">Menu</Link>
                    </li>
                    <li className="px-3 py-4 w-full list-none hover:bg-primary hover:text-white hover:scale-105 transition-all cursor-pointer">
                        <Link to="/login" className="block w-full">Login</Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}
