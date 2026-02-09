import { Menu, PanelLeftClose, CircleUserRound, LayoutDashboard, ClipboardPenLine, Sofa, Receipt,ListTodo , LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SideBar() {

  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const handleLogout = () => {

    navigate('/login');

  };

  const navItems = [
    { tittle: "Dashboard General", icon: <LayoutDashboard />, route: '/dashboard-Admin' },
    { tittle: "Menu", icon: <Menu />, route: '/dashboard-Admin/menu' },
    { tittle: "Inventario", icon: <ClipboardPenLine />, route: '/dashboard-Admin/inventario' },
    { tittle: "Mesas", icon: <Sofa />, route: '/dashboard-Admin/mesas' },
    { tittle: "Ordenes", icon: <ListTodo />, route: '/dashboard-Admin/ordenes' },
    { tittle: "Facturacion", icon: <Receipt />, route: '/dashboard-Admin/facturacion' },
    
  ]


  return (

    <aside className={`bg-fondo-light h-screen flex flex-col  border-r border-slate-300 text-white duration-500 gap-5 px-5 pt-8 relative ${open ? "w-70" : "w-20"}`}>

      <div className='text-fondo-dark'>
        <PanelLeftClose
          size={45}
          onClick={() => setOpen(!open)}
          className={` bg-fondo-light border-2 border-slate-300 p-2 rounded-full absolute duration-500 -right-6 top-8 cursor-pointer ${!open && "rotate-180"}`}
        />
      </div>

      <div>
        <div className='inline-flex gap-3 items-center text-fondo-dark'>
          <CircleUserRound size={42} />
          <div className={`${!open && "scale-0"}`}>
            <h2 className='font-bold'>Administrador</h2>
            <h2 className='text-sm'>Admin</h2>
          </div>
        </div>

        <nav className='mt-8 '>
          <ul className='text-fondo-dark grid gap-5'>
            {
              navItems.map((item, index) => (

                <li
                  key={index}
                  onClick={() => navigate(item.route)}
                  className={`flex items-center gap-2 px-2 rounded-lg py-3 hover:bg-fondo-dark hover:text-white cursor-pointer duration-200 border-b border-slate-300`}>
                  <span className='block float-left '>{item.icon ? item.icon : <LayoutDashboard />}</span >
                  <span className={`${!open && "hidden"}`}>{item.tittle}</span>
                </li>

              ))
            }
          </ul>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 mt-4 px-2 rounded-lg py-3 hover:bg-red-500 text-red-500 hover:text-white transition-colors"
      >
        <span className='block float-left '><LogOut size={20} /></span>
        <span className={`${!open && "hidden"}`}>Cerrar Sesión</span>
      </button>





    </aside >
  )
}
