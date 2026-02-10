import React from 'react'
import { Store, ChartNoAxesCombined, MonitorSmartphone } from 'lucide-react';

export default function Services() {

  const itemsServices = [

    { icon: <Store size={40} color='white' />, bg:"bg-primary", tittle: "Inventario Inteligente", description: "Gestion a Tiempo Real." },
    { icon: <ChartNoAxesCombined size={40} color='white' />,bg:"bg-fondo-dark", tittle: "Sistema de Pedidos (POS)", description: "Interfaz ágil para la toma de pedidos y envío a cocina." },
    { icon: <MonitorSmartphone size={40} color='white' />,bg:"bg-secondary", tittle: "Módulo de Facturación", description: "Generación automática de tickets y cuentas de clientes." }
  ]

  return (

    <div className='flex flex-col md:flex-row p-10 gap-20 justify-center  bg-fondo-light '>

      {itemsServices.map((item, index) => (

        <div key={index} className='flex flex-col text-center items-center justify-center gap-5  '>

          <figure className={`${item.bg}  p-5 rounded-3xl shadow-xl/30`}>
            {item.icon}
          </figure>
          <h1 className='text-fondo-dark text-2xl font-bold '>{item.tittle}</h1>

          <p className='text-slate-600 text-sm px-10 md:px-0 font-semibold '>{item.description}</p>

        </div>

      ))}

    </div>

  )
}

