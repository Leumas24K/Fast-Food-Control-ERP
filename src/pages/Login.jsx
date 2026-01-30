import { Link } from 'react-router';
import iconLogin from '../assets/icons/icon_login.svg';

export default function Login() {

  return (

    <section>

      <div className="min-h-screen bg-fondo-light flex flex-col items-center justify-center">

        <div className='bg-white border w-full max-w-md border-slate-300 rounded-2xl p-8'>

          <div className='flex flex-col items-center mb-8'>
            <figure>
              <img src={iconLogin} alt="" />
            </figure>

            <h1 className='text-2xl font-extrabold text-slate-800'>Staff Login</h1>

            <p className='text-sm font-Inter text-slate-500'>Ingresa tus credenciales de empleado</p>
          </div>

          <form className=' flex flex-col gap-8 mt-10'>

            <div>
              <label className='block text-sm font-medium mb-1'>Correo Electronico</label>
              <input
                type="email"
                className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='admin@fastfood.com'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Contraseña</label>
              <input
                type="password"
                className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='••••••'
                required
              />
            </div>

            <Link
              to="/dashboard-Admin"
              className='bg-indigo-500 text-center hover:bg-indigo-700 text-white px-6 py-3 rounded-lg'>

              Ingresar al Sistema

            </Link>
          </form>

          <div className='text-sm text-center mt-8'>
            <Link
              to="/home"
              className='underline text-slate-600 hover:text-indigo-700 '>
              Volver al inicio
            </Link>
          </div>

        </div>

      </div>

    </section>
  )
}

