import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import iconLogin from '../assets/icons/icon_login.svg';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Traemos la función del contexto
  const navigate = useNavigate();

const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Buscamos en el json-server un usuario que coincida con ambos campos
            const response = await fetch(`http://localhost:8000/users?email=${email}&password=${password}`);
            const users = await response.json();

            if (users.length > 0) {
                // Si encontró coincidencia, el primer elemento del array es nuestro usuario
                const userFound = users[0];
                
                // Guardamos en el contexto
                login(userFound);

                // Redirigimos según el rol (coincida con los valores en data.json)
                if (userFound.rol === 'admin') {
                  navigate('/dashboard-Admin');
                } else if (userFound.rol === 'waiter') {
                  navigate('/dashboard-Waiter');
                } else {
                  navigate('/home');
                }
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error en el servidor:', error);
            alert('No se pudo conectar con el servidor');
        }
    };

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

          <form onSubmit={handleSubmit} className=' flex flex-col gap-8 mt-10'>

            <div>
              <label className='block text-sm font-medium mb-1'>Correo Electronico</label>
              <input
                type="email"
                className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='admin@fastfood.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Contraseña</label>
              <input
                type="password"
                className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className='bg-indigo-500 text-center hover:bg-indigo-700 text-white px-6 py-3 rounded-lg'>
              Ingresar al Sistema
            </button>
          </form>

          <div className='text-sm text-center mt-8'>
            <Link
              to="/"
              className='underline text-slate-600 hover:text-indigo-700 '>
              Volver al inicio
            </Link>
          </div>

        </div>

      </div>

    </section>
  )
}

