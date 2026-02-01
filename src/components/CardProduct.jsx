import { Plus } from 'lucide-react';

export default function Cardproduct({imagen,nombre,descripcion,precio}) {

    

  return (
        <div className='bg-white flex flex-col gap-6 border border-gray-100 shadow-lg p-5 rounded-xl'>
            <figure className='aspect-video w-full rounded-xl overflow-hidden'>
                <img  className='w-full h-full object-cover' src={imagen} alt={nombre} />
            </figure>

            <div className='flex flex-col gap-2'>
                <h1 className='text-[18px] font-bold text-fondo-dark'>{nombre}</h1>
                <p className='text-sm font-Inter text-slate-600'>{descripcion}</p>
            </div>

            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-primary'>${precio.toFixed(2)}</h2>
                <button 
                   
                    className='bg-fondo-dark hover:bg-primary transition-colors rounded-full p-1 text-white'>
                    <Plus />
                </button>
            </div>


        </div>
  )
}
