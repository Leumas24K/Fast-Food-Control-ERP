import { Link } from 'react-router';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

export default function NavbarMenu() {
  return (
    <div>
      <nav className='flex justify-between items-center py-4'>

        <div className='flex gap-2 items-center'>

          <Link
            className='text-[18px] md:text-2xl text-fondo-dark font-bold'
            to="/menu">FastFood Menu
          </Link>
        </div>

        <div className='relative '>
          <Link
            to='/cart'>
            <ShoppingCart size={32} />
          </Link>
          <span className='absolute -top-2.5 right-0 text-sm text-white bg-indigo-600 px-1 rounded-full'>0</span>
        </div>

      </nav>
    </div>
  )
}
