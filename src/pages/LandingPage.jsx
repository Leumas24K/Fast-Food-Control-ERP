import { Link } from 'react-router'
import CardHome from './CardHome'
import iconFood from '../assets/icons/icon_food.svg'
import iconManage from '../assets/icons/icon-manage.svg'

const LandingPage = () => {
  return (
    <section className='bg-fondo-light text-center min-h-screen flex flex-col md:flex-row md:items-center md:justify-center  '>

      <div className='bg-fondo-light flex-1 flex flex-col '>
        <CardHome

          icon={iconFood}
          tittle={"¡Quiero Comer!"}
          description={"Explora nuestro menú, personaliza tu pedido y paga de forma rápida."}

        />

        <button>
          <Link
            to="/menu"
            className='bg-primary hover:bg-amber-600 px-6 py-3 rounded-full text-white font-semibold'
          >Ver Menú
          </Link>
        </button>
      </div>

      <div className='bg-fondo-light flex-1 mt-10 md:mt-0 flex flex-col '>
        <CardHome

          icon={iconManage}
          tittle={"Acceso Staff"}
          description={"Gestión de inventario, control de mesas y procesamiento de pedidos."}

        />

        <button>
          <Link
            to="/signin"
            className='bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-full text-white font-semibold'
          >Iniciar Sesion
          </Link>
        </button>

      </div>

    </section>
  )
}

export default LandingPage
