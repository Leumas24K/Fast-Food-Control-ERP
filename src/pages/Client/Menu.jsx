import { useState, useEffect } from 'react';
import NavbarMenu from '../../components/Menu/NavbarMenu';
import { useCart } from '../../context/CartContext';

export default function Menu() {

  const [product, setProduct] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('todos');
  const {addToCart} = useCart (); 

  useEffect(() => {

    const fetchProducts = async () => {

      try {
        const response = await fetch('http://localhost:8000/products');

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

  const leakedProducts = currentCategory === 'todos'

    ? product : product.filter(p => p.category === currentCategory);



  return (

    <section className='bg-fondo-light flex flex-col px-10 pb-8 gap-10'>

      <NavbarMenu />

      <div className="flex flex-col md:flex-row gap-5">

        {['todos', 'hamburguesas', 'acompañamientos', 'bebidas'].map(cat => (
          <button
            key={cat}
            onClick={() => setCurrentCategory(cat)}
            className={`px-4 py-2 rounded-full transition ${currentCategory === cat
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {leakedProducts.map(prod => (

            <div className='bg-white flex flex-col gap-6 border border-gray-100 shadow-lg p-5 rounded-xl' key={prod.id}>
              <figure className='aspect-video w-full rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={prod.imagen} alt={prod.name} />
              </figure>

              <div className='flex flex-col gap-2'>
                <h1 className='text-[18px] font-bold text-fondo-dark'>{prod.name}</h1>
                <p className='text-sm font-Inter text-slate-600'>{prod.description}</p>
              </div>

              <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-primary'>${prod.price.toFixed(2)}</h2>
                <button
                  onClick={() => addToCart(prod)}
                  className='bg-fondo-dark hover:bg-primary text-sm transition-colors rounded-lg px-2 py-1 text-white'>
                  Agregar al carrito

                </button>
              </div>

            </div>

          ))}

        </div>

        <div>
          {leakedProducts.length === 0 && (
            <p className="text-center text-gray-400 mt-10">No hay productos en esta categoría.</p>
          )}
        </div>

      </section>

    </section>
  )
}

