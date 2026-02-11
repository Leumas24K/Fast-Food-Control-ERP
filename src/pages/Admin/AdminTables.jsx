import { useState, useEffect } from 'react';


export default function AdminMesas() {
  const [table, setTable] = useState([]);

  useEffect(() => {

    const fetchTables = async () => {

      try {
        const response = await fetch('http://localhost:8000/tables');

        if (!response.ok) {
          throw new Error("Error al cargar las mesas");
        }
        const data = await response.json();
        console.log('Mesas importados exitosamente:', data);
        setTable(data);

      } catch (error) {

        console.error("Error cargando Mesas:", error);
      }
    }
    fetchTables();

  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold">Módulo: Mesas</h1>
      <p> Aquí puedes ver y gestionar las mesas.</p>

      <button className="bg-green-500 mt-15 px-5 py-2 rounded-2xl text-white">Agregar Nuevo Mesa</button>
      <div className='mt-5'>
        <table className=' overflow-x-auto w-full border-separate border-spacing-y-3'>
          <thead>
            <tr className='bg-white shadow-sm'>
              <th className='p-5 text-center font-bold rounded-l-xl border-y border-l border-gray-100'>ID</th>
              <th className='p-5 text-center font-bold border-y border-gray-100'>Mesa</th>
              <th className='p-5 text-center font-bold border-y border-gray-100'>Capacidad</th>
              <th className='p-5 text-center font-bold border-y border-gray-100'>Estado</th>
              <th className='p-5 text-center font-bold rounded-r-xl border-y border-r border-gray-100'>Acción</th>
            </tr>
          </thead>

          <tbody>
            {table.map((prod) => (
              <tr key={prod.id} className='bg-white shadow-lg rounded-xl'>
                {/* ID */}
                <td className="p-5 text-center border-y border-gray-100">{prod.id}</td>

                {/* MESA */}
                <td className='p-5 rounded-l-xl border-y border-l text-center border-gray-100'>

                  <span className='font-medium '>{prod.name}</span>

                </td>

                {/* CAPACIDAD */}
                <td className='p-5 border-y border-gray-100'>
                  <div className='flex items-center justify-center gap-3 bg-white rounded-lg border border-gray-200 px-2 py-1 mx-auto w-max'>

                    <span className='min-w-5 text-center'> {prod.capacity} </span>

                  </div>
                </td>
                {/* ESTADO */}
                <td className='p-5 border-y border-gray-100'>
                  <div className='flex items-center justify-center gap-3 bg-white rounded-lg border border-gray-200 px-2 py-1 mx-auto w-max'>

                    <span className="min-w-5 text-center "> {prod.status} </span>

                  </div>
                </td>

                {/* ACCIÓN */}
                <td className=" p-5 flex gap-5 items-center justify-center text-center text-white">
                  <button className="bg-blue-500 px-5 py-2 rounded-2xl">Editar</button>
                  <button className="bg-red-500 px-5 py-2 rounded-2xl">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </section>
  )
}
