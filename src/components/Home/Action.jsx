import { Link } from 'react-router';
import { GlassWater,Users  } from 'lucide-react';

export default function Action() {

    const itemActions = [

        {icon:<GlassWater size={80}/>, tittle:"¡Quiero Comer!",description:"Explora nuestro menú, personaliza tu pedido y paga de forma rápida.",bgbtn:"bg-primary",hoverbgbtn:"bg-amber-600", btn:"Ver menú",direction:"/menu"},
        {icon:<Users size={80}/>, tittle:"Acceso Staff",description:"Gestión de inventario, control de mesas y procesamiento de pedidos.",bgbtn:"bg-indigo-500",hoverbgbtn:"bg-indigo-600", btn:"Iniciar Sesion",direction:"/login"}
    ]



  return (
    <section className='bg-fondo-light flex flex-col md:flex-row justify-center items-center p-10 min-h-screen'>

        {itemActions.map((item,index)=> (

            <div key={index} className='flex flex-col items-center text-center gap-5 p-10 '>

                <figure className='text-fondo-dark'>
                    {item.icon}
                </figure>

                <h1 className='text-4xl font-bold text-slate-900'>{item.tittle}</h1>
                <p className='text-sm font-Inter lg:px-30 text-slate-600'>{item.description}</p>
                <Link
                    to={item.direction} 
                    className={`${item.bgbtn} hover:${item.hoverbgbtn} px-6 py-3 rounded-full hover:scale-105 transition-all text-white font-semibold`}>{item.btn}
                </Link>

            </div>


        ))

        }
      
    </section>
  )
}
