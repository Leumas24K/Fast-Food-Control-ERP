/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { DollarSign, ClockAlert, ClipboardCheck } from 'lucide-react';

export default function AdminOverview() {

  const API_URL = 'http://localhost:8000/orders';
  const [orders, setOrders] = useState([]);

  const [stats, setStats] = useState({
    totalSales: 0,
    pendingOrders: 0,
    totalProductsSold: 0
  });
  
  const fetchOrders = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setOrders(data);
      
      // --- CÁLCULOS PARA EL DASHBOARD ---

      // 1.esto es para sumar el total de toda las ordenes 
      const sales = data.reduce((acc, curr) => acc + Number(curr.total), 0)

      // 2. esto es para contar cuando pedidos estan "pendientes"
      const pending = data.filter(order => order.status === "pendiente").length

      // 3. esto es para contar cuantas pedidos se han finalizado(aun no se puede actualizar el estado de la orden)
      const products = data.reduce((acc, curr) => acc + curr.order.length, 0)

      setStats({
        totalSales: sales,
        pendingOrders: pending,
        totalProductsSold: products
      })

    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);



  return (

    <main className="ml-5">
      <section>
        <h1 className="text-2xl text-fondo-dark font-bold mb-6">Dashboard General</h1>
        <p className='text-sm text-slate-600 font-Inter'>Resumen de la actividad: ventas, alertas e indicadores clave.</p>
      </section>
      {/* seccion para ver los datos generales del dashboard */}
      <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-primary p-6  text-white rounded-2xl shadow-sm border border-gray-100 relative">
          <div>
            <h2 className=" text-sm">Ventas Totales</h2>
            <strong className="text-3xl font-bold ">${stats.totalSales.toFixed(2)}</strong>
          </div>
          <div className='absolute top-3 right-3 bg-white text-primary p-1 rounded-xl shadow-lg'>
            <DollarSign size={35} />
          </div>

        </div>
        <div className="bg-fondo-dark p-6  text-white rounded-2xl shadow-sm border border-gray-100 relative">
          <div>
            <h2 className=" text-sm">Pedidos en cola</h2>
            <strong className="text-3xl font-bold ">{stats.pendingOrders}</strong>
          </div>
          <div className='absolute top-3 right-3 bg-white text-fondo-dark p-1 rounded-xl shadow-lg'>
            <ClockAlert size={35} />
          </div>

        </div>
        <div className="bg-primary p-6  text-white rounded-2xl shadow-sm border border-gray-100 relative">
          <div>
            <h2 className=" text-sm">Ordenes Finalizadas</h2>
            <strong className="text-3xl font-bold ">{orders.length - stats.pendingOrders}</strong>
          </div>
          <div className='absolute top-3 right-3 bg-white text-primary p-1 rounded-xl shadow-lg'>
            <ClipboardCheck size={35} />
          </div>

        </div>
      </section>


      {/* seccion de actividad reciente, aqui se muestra las ordenes detalladas y su estado */}
      <section className='mt-8'>

        <h3 className='text-2xl font-bold text-fondo-dark'>Actividad reciente</h3>
        <div className='overflow-x-auto'>
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


      </section>
    </main>
  )
}
