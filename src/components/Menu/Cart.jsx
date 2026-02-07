import { useCart } from '../../context/CartContext';
import { Trash, Minus, Plus, } from 'lucide-react';
import NavbarMenu from './NavbarMenu';

export default function Cart() {

  const { cart, updateQuantity, deleteProduct } = useCart();

  const handleIncreaseQuantity = (productId) => {

    updateQuantity(productId, 1)

  }

  const handleDecreaseQuantity = (productId) => {

    const product = cart.find((item) => item.id === productId)
    if (product.quantity > 1) {

      updateQuantity(productId, -1)
    }
  }
  const iva = 2;
  const subTotal = cart.reduce((acc, product) =>
    acc + product.price * product.quantity, 0
  );
  const total = subTotal + iva;

  return (


    <div className='px-10 mt-2'>
      <NavbarMenu />
      <h2 className='text-3xl text-fondo-dark font-bold'>TU <span className='text-primary'>CARRITO</span></h2>
      {(!cart || cart.length) === 0 ?
        (
          <p className='text-center text-3xl text-gray-300'>Tu carrito está vacío</p>
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
                        <button
                          onClick={() => handleDecreaseQuantity(prod.id)}
                          className="text-gray-400 hover:text-black disabled:opacity-50">
                          <Minus size={16} />
                        </button>
                        <span className='min-w-5 text-center'> {prod.quantity} </span>
                        <button
                          onClick={() => handleIncreaseQuantity(prod.id)}
                          className="text-gray-400 hover:text-black">

                          <Plus size={16} />
                        </button>
                      </div>
                    </td>

                    {/* TOTAL */}
                    <td className='p-5 text-center font-semibold border-y border-gray-100'>
                      {((prod.quantity) * (prod.price ?? 0)).toFixed(2)}
                    </td>

                    {/* ACCIÓN */}
                    <td className='p-5 text-center rounded-r-xl border-y border-r border-gray-100'>
                      <button
                        onClick={() => deleteProduct(prod.id)}
                        className='text-red-500 hover:text-red-700 transition-colors'>
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/*FACTURA */}
            <div className='bg-white shadow-lg rounded-xl my-10 w-full flex flex-col gap-3 p-4'>
              <h2 className='text-3xl text-fondo-dark font-bold'>TU <span className='text-primary'>CARRITO</span></h2>
              <p className='flex justify-between border-b-2 py-1 border-slate-300'>Total Parcial: <span className='font-bold'>${subTotal.toFixed(2)}</span> </p>
              <p className='flex justify-between border-b-2 py-1 border-slate-300'>iva: <span className='font-bold'>${iva.toFixed(2)}</span> </p>
              <p className='flex justify-between border-b-2 py-1 border-slate-300'>Total: <span className='font-bold'>${total.toFixed(2)}</span></p>
              <button className='bg-fondo-dark text-white px-5 py-3 rounded-lg  font-bold'>ENVIAR PAGO</button>
            </div>
          </div>

        )
      }
    </div>

  )
}
