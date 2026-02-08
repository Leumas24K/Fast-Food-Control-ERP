import { useState, useEffect } from 'react';

export default function AdminInventario() {
      const [product, setProduct] = useState([]);
  
      useEffect(() => {
  
          const fetchProducts = async () => {
  
              try {
                  const response = await fetch('http://localhost:8000/commodity');
  
                  if (!response.ok) {
                      throw new Error("Error al cargar los productos");
                  }
                  const data = await response.json();
                  console.log('Productos importados exitosamente:', data);
                  setProduct(data);
  
              } catch (error) {
  
                  console.error("Error cargando productos:", error);
              }
          }
          fetchProducts();
  
      }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">Módulo: Inventario</h1>
      <p> Aquí puedes gestionar el inventario.</p>
      <button className="bg-green-500 mt-15 px-5 py-2 rounded-2xl text-white">Agregar Nuevo Producto</button>

            <div className='overflow-x-auto'>
                <table className='w-full border-separate border-spacing-y-3'>
                    <thead>
                        <tr className='bg-white shadow-sm'>
                            <th className='p-5 text-center font-bold rounded-l-xl border-y border-l border-gray-100'>ID</th>
                            <th className='p-5 text-center font-bold border-y border-gray-100'>Prodcuto</th>
                            <th className='p-5 text-center font-bold border-y border-gray-100'>Stock</th>
                            <th className='p-5 text-center font-bold rounded-r-xl border-y border-r border-gray-100'>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {product.map((prod) => (
                            <tr key={prod.id} className='bg-white shadow-lg rounded-xl'>
                                <td className="p-5 text-center border-y border-gray-100">{prod.id}</td>
                                {/* PRODUCTO */}
                                <td className='p-5 rounded-l-xl border-y border-l text-center border-gray-100'>

                                    <span className='font-medium '>{prod.name}</span>

                                </td>

                                {/* CANTIDAD */}
                                <td className='p-5 border-y border-gray-100'>
                                    <div className='flex items-center justify-center gap-3 bg-white rounded-lg border border-gray-200 px-2 py-1 mx-auto w-max'>

                                        <span className='min-w-5 text-center'> {prod.stock} </span>

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
    </div>
  )
}
