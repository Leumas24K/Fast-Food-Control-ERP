import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import ContainerProduct from '../../components/ContainerProduct';



export default function Menu() {

  return (

    <section className='bg-fondo-light flex flex-col px-10 py-8 gap-10'>

      <nav className='flex  justify-between items-center  py-4  '>

        <div className='flex gap-5 items-center'>

          <Link
            className='text-fondo-dark hover:text-primary transition-colors'
            to="/home">
            <ArrowLeft size={32}  />
          </Link>

          <h1 className='text-[18px] md:text-2xl text-fondo-dark font-bold'>FastFood Menu</h1>
        </div>

        <div className='relative'>
          <ShoppingCart color='#0f172a' size={32} />
          <span className='absolute -top-2.5 right-0 text-sm text-white bg-indigo-600 px-1 rounded-full'>0</span>
        </div>

      </nav>

      <section>
        <ContainerProduct/>
      </section>


    </section>
  )
}

