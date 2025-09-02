import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center rounded-md bg-slate-800 px-3 py-1 text-xs font-semibold text-white">
              CATAMARCA <span className="ml-1 font-normal">INMOBILIARIA</span>
            </div>
            <p className="mt-3 text-sm opacity-80">
              Más de 15 años conectando personas con sus hogares ideales en el
              corazón de Argentina.
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-400">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              Enlaces Rápidos
            </h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li>
                <Link to="/properties" className="hover:text-foreground">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link to="/emprendimientos" className="hover:text-foreground">
                  Emprendimientos
                </Link>
              </li>
              <li>
                <Link to="/tasaciones" className="hover:text-foreground">
                  Tasaciones
                </Link>
              </li>
              <li>
                <Link to="/la-empresa" className="hover:text-foreground">
                  La Empresa
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Servicios</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li>Venta de Propiedades</li>
              <li>Alquiler de Propiedades</li>
              <li>Tasaciones Gratuitas</li>
              <li>Desarrollos Inmobiliarios</li>
              <li>Asesoramiento Legal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li>Av Presidente Castillo 3814</li>
              <li>
                <a href="tel:+543834901545" className="hover:text-white">
                  +54 383 490-1545
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@inmobiliariacatamarca.com"
                  className="hover:text-white"
                >
                  info@inmobiliariacatamarca.com
                </a>
              </li>
              <li>
                <span className="text-white">Horarios</span>
                <br />
                Lun-Vie 08:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-center text-xs opacity-80 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Inmobiliaria Catamarca. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white">
              Términos de Uso
            </a>
            <a href="#" className="hover:text-white">
              Panel Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
