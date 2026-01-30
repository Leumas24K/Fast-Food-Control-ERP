import { Link } from 'react-router'

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-fondo-dark text-center flex flex-col items-center justify-center p-10  gap-10 overflow-hidden relative">

      <div className="absolute w-96 h-96 top-[-10%] left-[-10%] blur-3xl opacity-10 bg-primary rounded-full"></div>
      <div className="absolute w-96 h-96 bottom-[-10%] right-[-10%] blur-3xl opacity-10 bg-indigo-600 rounded-full"></div>

      <span className="text-secondary font-bold uppercase">FastFood Pro Management v1.0</span>

      <h1 className="text-white text-6xl md:text-7xl font-extrabold" >Sabor Real a la <br />

        <span className="text-primary">Velocidad </span>
        <span className="text-secondary">Digital.</span>

      </h1>

      <p className="text-lg text-slate-400 md:px-30 xl:px-80 ">Bienvenido a la nueva era de <strong>FastFood Pro</strong>. Gestiona tu negocio con precisión quirúrgica
        o disfruta de nuestro menú diseñado para los amantes de la verdadera comida rápida.
      </p>

      <Link

        to="/home"
        className="bg-indigo-400 text-white px-6 py-3 rounded-2xl hover:bg-indigo-500"
        >Comienza la Experiencia

      </Link>

    </main>
  )
}

export default LandingPage
