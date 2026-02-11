import samuel from "../../assets/images/samuel-sanchez.jpeg"
import sofi from "../../assets/images/sofia-luis.jpeg"
import jefferson from "../../assets/images/jefferson.jpeg"

export default function About() {

    const itemsUs = [
    
        { photo: sofi, names:"Sofia Luis", description: '"Une lógica de ingeniería y visión creativa para transformar ideas complejas en soluciones digitales funcionales y estéticas."', habilidad: "Desarrolladora Frontend" },
        { photo: samuel, names: "Samuel Sanchez", description: '"Especialista en sistemas escalables y de alto rendimiento. Enfocado en gestionar infraestructuras con código limpio."', habilidad: "Desarrollador Full Stack" },
        { photo: jefferson, names: "Jefferson Irausquin", description: '"Entusiasta del software con gran aprendizaje autónomo. Destaca por su versatilidad en programación competitiva y desarrollo de algoritmos"', habilidad: "Desarrollador Frontend" }
      ]

  return (

<div className="bg-fondo-light min-h-screen flex flex-col items-center justify-center p-5 md:p-10">
  <h1 className="text-4xl font-bold text-fondo-dark mb-8 text-center">Conoce a Nuestro Equipo</h1>

  <div className="bg-fondo-light rounded-3xl shadow-lg p-6 md:p-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {itemsUs.map((item, index) => (
      <div
        key={index}
        className="bg-fondo-light rounded-2xl  p-6 md:p-8 flex flex-col items-center w-full max-w-sm">

        <figure className="relative mb-4">
          <img src={item.photo} className="w-24 h-24 rounded-full border-4 border-primary object-cover"/>
        </figure>

        <h1 className="text-xl font-bold text-fondo-dark mb-2 text-center">{item.names}</h1>

        <h2 className="text-sm font-semibold text-primary mb-1">{item.habilidad}</h2>

        <p className="text-gray-500 text-center  px-4 text-[14px] font-Inter italic">{item.description}</p>

      </div>
    ))}
  </div>
</div>

  )
}
