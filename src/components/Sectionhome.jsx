
import { Link } from 'react-router'
import iconFood from '../assets/icons/food-dish.svg'
import iconManage from '../assets/icons/user.svg'

const Sectionhome = () => {

    return (

        <section className='h-screen'>

            <div className='bg-fondo-dark h-1/2 flex flex-col items-center justify-center text-center gap-5 px-6 py-9'>

                <figure>
                    <img src={iconFood} alt="Icon client" />
                </figure>

                <h2 className="text-3xl font-bold text-primary">¡Quiero Comer!</h2>

                <p className='text-sm text-slate-400'>Explora nuestro menú, personaliza tu pedido y paga de forma rápida.</p>

                <button className='mt-5'>
                    <Link
                        to="/client"
                        className='bg-primary text-white hover:bg-orange-300 px-6 py-3 rounded-full '
                    >Ver Menú
                    </Link>
                </button>
            </div>

            <div className='bg-primary h-1/2 flex flex-col items-center justify-center text-center gap-5 px-6 py-9'>

                <figure>
                    <img src={iconManage} alt="icon administration" />
                </figure>

                <h2 className="text-3xl font-bold text-fondo-dark">Acceso Staff</h2>

                <p className='text-sm text-fondo-dark'>Gestión de inventario, control de mesas y procesamiento de pedidos.</p>

                <button className='mt-5'>
                    <Link
                        to="/signin"
                        className='bg-fondo-dark text-white hover:bg-slate-400 px-6 py-3 rounded-full'
                        >Iniciar Sesión
                    
                    </Link>
                </button>
            </div>


        </section>
    )
}

export default Sectionhome

