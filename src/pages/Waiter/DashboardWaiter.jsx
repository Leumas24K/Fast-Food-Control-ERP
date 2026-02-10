/* eslint-disable react-hooks/set-state-in-effect */
import { LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext';


export default function DashboardWaiter() {

  const API_URL = ('http://localhost:8000/orders');

  const [orders, setOrders] = useState([]);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setOrders(data);

    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <main>

      <header className="bg-fondo-dark text-white shadow-lg sticky top-0 z-50">
        <div className=" px-10 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-bold">Dashboard de meseros</h1>
            <p className="text-xs text-blue-200">Hola, {user?.name || 'Mesero'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2  px-2 rounded-lg py-3 hover:bg-red-500 text-white hover:text-white transition-colors"
          >
            <span className='block float-left '><LogOut size={20} /></span>
            <span className='max-md:hidden'>Cerrar Sesión</span>
          </button>

        </div>
      </header>

      <div className='overflow-x-auto px-10'>
        <table className='w-full border-separate border-spacing-y-3'>
          <thead>
            <tr className='bg-white shadow-sm text-center'>
              <th className='p-5 font-bold rounded-l-xl border-y border-l border-gray-100'>ID</th>
              <th className='p-5 font-bold border-y border-gray-100'>Cliente</th>
              <th className='p-5 font-bold border-y border-gray-100'>Fecha</th>
              <th className='p-5 font-bold border-y border-gray-100'>Monto</th>
              <th className='p-5 font-bold rounded-r-xl border-y border-r border-gray-100'>Estado</th>

            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index} className='text-center font-Inter'>
                <td className='p-5 border-y border-gray-100 font-bold '>{item.id}</td>
                <td className='p-5 rounded-l-xl border-y border-l border-gray-100'>{item.client}</td>
                <td className='p-5 border-y border-gray-100'>{new Date(item.date).toLocaleDateString()}</td>
                <td className='p-5 border-y border-gray-100 font-bold'>${item.total}</td>
                <td className="p-5 font-bold rounded-r-xl border-y border-r border-gray-100"> <span className={`px-4 py-2 rounded-xl ${item.status === 'pendiente' ? 'bg-primary text-white' : 'text-white bg-green-600'}`}>{item.status}</span></td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </main>
  )
}

