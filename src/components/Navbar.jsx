import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav className='flex justify-between px-10 py-4 text-fondo-dark font-bold bg-fondo-light'>

        
        <Link
            to="/">FastFood Control
        </Link>

        <nav>
            <ul className="flex gap-5 ">
                <li><Link to="/menu">Ver menu</Link></li>
                <li><Link to="/login">Iniciar Sesion</Link></li>
            </ul>
        </nav>

      
    </nav>
  )
}
