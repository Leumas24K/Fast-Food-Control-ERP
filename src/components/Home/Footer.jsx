
import { Facebook, Twitter, Phone } from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-fondo-dark text-white overflow-hidden relative">
      <div className="absolute w-96 h-96 top-[-10%] left-[-10%] blur-3xl opacity-10 z-0 bg-primary rounded-full"></div>
      <div className="absolute w-96 h-96 bottom-[-10%] right-[-10%] blur-3xl opacity-10 z-0 bg-indigo-600 rounded-full"></div>

      <section className="max-w-6xl mx-auto px-6 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">
          {/*Marca y descripción*/}
          <section className="flex items-start md:items-center gap-4">


            <div>
              <h3 className="text-lg font-semibold">Fast Food Control</h3>
              <p className="text-sm mt-1 max-w-xs md:max-w-sm" >
                Comida rápida de calidad, servicio eficiente y control profesional para tu negocio.
              </p>
            </div>
          </section>

          {/*Enlaces a redes sociales*/}
          <nav className="flex flex-col items-center md:items-center gap-4">
            <p className="font-medium">Síguenos</p>
            <ul className="flex gap-3">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61588027586864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/584129020819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/ControlFas38375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>

          {/*Contacto rapidos*/}
          <address className="not-italic flex flex-col items-center md:items-end gap-2" >
            <p className="text-sm font-medium">Contacto</p>
            <div className="flex flex-col text-sm items-center md:items-end">
              <a
                href="mailto:fastfoodcontrol@gmail.com"
                className="hover:underline z-100"
              >
                fastfoodcontrol@gmail.com
              </a>
              <a
                href="tel:+584129020819"
                className="hover:underline mt-1 z-100"
              >
                +58 4129020819
              </a>
            </div>
          </address>
        </div>

        <div className="mt-8 pt-6 border-t" >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-sm text-center md:text-left">© 2026 Fast Food Control. Todos los derechos reservados.</p>
            <p className="text-sm text-center md:text-right z-100">
              Hecho con ♥ para tu negocio
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
