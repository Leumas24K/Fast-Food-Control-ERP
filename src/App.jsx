import { Link } from "react-router"

function App() {

  return (

    <main className=" w-[375px] flex flex-col justify-center items-center m-auto bg-fondo-dark min-h-screen text-center py-10 px-6 text-white">

      <h4 className="font-bold text-secondary">FastFood Pro Management v1.0</h4>

      <h1 className="text-6xl text-primary font-extrabold mt-5">Sabor Real a la <span className="text-secondary">Velocidad Digital.</span></h1>

      <p className="text-sm text-slate-400 mt-10 ">
        "Bienvenido a la nueva era de <strong>FastFood Pro</strong>. Gestiona tu negocio
        con precisión quirúrgica o disfruta de nuestro menú diseñado para
        los amantes de la verdadera comida rápida. ¿Listo para empezar?"
      </p>


      <button className="mt-10">

        <Link
          to="/home"
          className="bg-slate-400 px-6 py-3 rounded-3xl hover:bg-slate-500"
        >
          Comenzar Experiencia →
        </Link>

      </button>

    </main>
  )
}

export default App
