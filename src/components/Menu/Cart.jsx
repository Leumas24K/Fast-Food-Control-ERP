import { useCart } from '../../context/CartContext';
import { Trash, Minus, Plus, } from 'lucide-react';
import NavbarMenu from './NavbarMenu';

export default function Cart() {

  const { cart } = useCart();

  return (


    <div className='px-5 xl:px-30 mt-10'>
      <NavbarMenu />
      <h2 className='text-3xl text-fondo-dark font-bold'>TU <span className='text-primary'>CARRITO</span></h2>
      {(!cart || cart.length) === 0 ?
        (
          <p>Tu carrito está vacío</p>
        ) : (

          <div className='overflow-x-auto'>
            <table className='w-full border-separate border-spacing-y-3'>
              <thead>
                <tr className='bg-white shadow-sm'>
                  <th className='p-5 text-left font-bold rounded-l-xl border-y border-l border-gray-100'>Producto</th>
                  <th className='p-5 text-center font-bold border-y border-gray-100'>Precio</th>
                  <th className='p-5 text-center font-bold border-y border-gray-100'>Cantidad</th>
                  <th className='p-5 text-center font-bold border-y border-gray-100'>Total</th>
                  <th className='p-5 text-center font-bold rounded-r-xl border-y border-r border-gray-100'>Acción</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((prod) => (
                  <tr key={prod.id} className='bg-white shadow-lg rounded-xl'>
                    {/* PRODUCTO */}
                    <td className='p-5 rounded-l-xl border-y border-l border-gray-100'>
                      <div className='flex flex-col md:flex-row items-start md:items-center gap-5'>
                        <figure>
                          <img
                            className='w-16 h-16 rounded-lg object-cover'
                            src={prod.imagen}
                            alt={prod.name}
                          />
                        </figure>
                        <span className='font-medium'>{prod.name}</span>
                      </div>
                    </td>

                    {/* PRECIO */}
                    <td className='p-5 text-center border-y border-gray-100'>
                      ${prod.price?.toFixed(2)}
                    </td>

                    {/* CANTIDAD */}
                    <td className='p-5 border-y border-gray-100'>
                      <div className='flex items-center justify-center gap-3 bg-white rounded-lg border border-gray-200 px-2 py-1 mx-auto w-max'>
                        <button className="text-gray-400 hover:text-black disabled:opacity-50">
                          <Minus size={16} />
                        </button>
                        <span className='min-w-5 text-center'>
                          {prod.quantity ?? prod.cantidad ?? 1}
                        </span>
                        <button className="text-gray-400 hover:text-black">
                          <Plus size={16} />
                        </button>
                      </div>
                    </td>

                    {/* TOTAL */}
                    <td className='p-5 text-center font-semibold border-y border-gray-100'>
                      ${((prod.quantity ?? prod.cantidad ?? 1) * (prod.price ?? 0)).toFixed(2)}
                    </td>

                    {/* ACCIÓN */}
                    <td className='p-5 text-center rounded-r-xl border-y border-r border-gray-100'>
                      <button className='text-red-500 hover:text-red-700 transition-colors'>
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )
      }
    </div>

  )
}
