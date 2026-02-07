import { Link } from 'react-router'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function LandingPage() {

  return (

    <main>

      <header id='Inicio' className='min-h-screen bg-fondo-dark text-center flex flex-col items-center justify-center p-10 gap-10 overflow-hidden relative'>
        <div className="absolute w-96 h-96 top-[-10%] left-[-10%] blur-3xl opacity-10 z-0 bg-primary rounded-full"></div>
        <div className="absolute w-96 h-96 bottom-[-10%] right-[-10%] blur-3xl opacity-10 z-0 bg-indigo-600 rounded-full"></div>

        <span className="text-secondary font-bold uppercase">FastFood Pro Management v1.0</span>

        <h1 className="text-white text-6xl md:text-7xl font-extrabold" >Sabor Real a la <br />

          <span className="text-primary">Velocidad </span>
          <span className="text-secondary">Digital.</span>

        </h1>

        <p className="text-lg font-Inter text-slate-400 max-w-2xl">Bienvenido a la nueva era de <strong>FastFood Pro</strong>. Gestiona tu negocio con precisión quirúrgica
          o disfruta de nuestro menú diseñado para los amantes de la verdadera comida rápida.
        </p>

        <Link

          to="/home"
          className="bg-indigo-400 text-white px-6 py-3 rounded-2xl z-20 hover:bg-indigo-500 active:scale-95"
        >Comienza la Experiencia

        </Link>
      </header>

      <section id='Servicios'>

        <Services/>

      </section>

      <section id='Nosotros'>
        
        <About/>
        
      </section>

      <section id='Contactos'>
        <Contact/>
      </section>


      <footer>
        <Footer/>
      </footer>

    </main>
  )
}

