import { Link } from "react-router"
import iconUser from "./assets/icons/user-light.svg"
import IconStaff from "./assets/icons/dashboard-square-1.svg"

function App() {

  return (

    <main className="bg-fondo-light min-h-screen w-[375px] m-auto  ">


      <div>

        <div className="bg-fondo-dark h-1/2 flex flex-col items-center gap-2 px-6 py-6 ">

          <figure>
            <img src={iconUser} alt="iconUser" />
          </figure>

          <h2 className="text-3xl font-extrabold text-primary">¡Quiero Comer!</h2>

          <p className="text-white text-center text-sm" >Explora nuestro menú, personaliza tu pedido y paga de forma rápida.</p>

          <Link
            to="/client"
            className="bg-primary text-white font-bold px-8 py-3 rounded-full">
            Ver Menú
          </Link>

        </div>

        <div className="bg-primary h-full flex flex-col items-center gap-2 px-6 py-6">

          <figure>
            <img src={IconStaff} alt="Icon Staff" />
          </figure>

          <h1 className="text-3xl font-extrabold text-fondo-dark">Acceso Staff</h1>

          <p className="text-center text-sm text-white">Gestión de inventario, control de mesas y procesamiento de pedidos.</p>

          <Link
            className="bg-fondo-dark text-white font-bold px-8 py-3 rounded-full"
            to="/signin">
            Iniciar Sesion

          </Link>

        </div>


      </div>

    </main >
  )
}

export default App
