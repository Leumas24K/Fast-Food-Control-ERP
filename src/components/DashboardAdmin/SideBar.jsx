import { useNavigate } from 'react-router';

import { Menu, PanelLeftClose, CircleUserRound, LayoutDashboard, LogOut } from 'lucide-react';

export default function SideBar() {

  const navigate = useNavigate();
  const handleLogout = () => {

    navigate('/login');

  };
  return (

    <nav className="w-60 bg-blue-600 h-screen text-white flex flex-col justify-between gap-5 px-5 py-3">

      <div className=' flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <CircleUserRound size={40} color='white' />
          <div>
            <h2 className='font-bold'>Administrador</h2>
            <p className='text-sm'>admin</p>
          </div>
        </div>

        <ul className="grid gap-5 ">
          <li className=" ">Menu</li>
          <li className=" ">Mesas</li>
          <li className=" ">Inventario</li>
          <li className=" ">Facturacion</li>
        </ul>
      </div>


      <button
        onClick={handleLogout}
        className="flex items-center gap-2 hover:text-red-500 transition-colors"
      >
        <LogOut size={20} />
        Cerrar Sesión
      </button>





    </nav>
  )
}
