/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

export default function AdminOrders() {

    const API_URL = ('http://localhost:8000/orders');

    const [orders, setOrders] = useState([]);

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
            <h1 className="text-2xl font-bold">Módulo: Ordenes</h1>
            <p> Aquí puedes ver y gestionar las ordenes.</p>


            <div className='overflow-x-auto'>
                <table className='w-full border-separate border-spacing-y-3'>
                    <thead>
                        <tr className='bg-white shadow-sm text-center'>
                            <th className='p-5 font-bold rounded-l-xl border-y border-l border-gray-100'>ID</th>
                            <th className='p-5 font-bold border-y border-gray-100'>Cliente</th>
                            <th className='p-5 font-bold border-y border-gray-100'>Fecha</th>
                            <th className='p-5 font-bold border-y border-gray-100'>Monto</th>
                            <th className='p-5 font-bold border-y border-gray-100'>Estado</th>
                            <th className='p-5 font-bold rounded-r-xl border-y border-r border-gray-100'>Accion</th>
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
                                <td className='p-5 flex gap-5 items-center justify-center text-center text-white'>
                                    <button className="bg-blue-500 px-5 py-2 rounded-2xl cursor-pointer">Editar</button>
                                    <button className="bg-red-500 px-5 py-2 rounded-2xl cursor-pointer">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>




        </main>
    )
}
