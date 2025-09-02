import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="w-full border-b bg-muted/40">
        <div className="container flex h-8 items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <a href="tel:+543834901545" className="hover:text-foreground">
              +54 383 490-1545
            </a>
            <a
              href="mailto:info@inmobiliariacatamarca.com"
              className="hidden hover:text-foreground sm:inline"
            >
              info@inmobiliariacatamarca.com
            </a>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span>Catamarca, Argentina</span>
            <a href="#" className="hover:text-foreground">
              Favoritos
            </a>
            <a href="#" className="hover:text-foreground">
              Admin
            </a>
          </div>
        </div>
      </div>
      <div className="border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <div className="container flex h-16 items-center gap-6">
          <Link to="/" className="flex items-center gap-2 whitespace-nowrap">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary shadow-sm">
              🏠
            </span>
            <span className="text-lg font-bold tracking-tight">INMOCAT</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link
              to="/properties"
              className="hover:text-foreground transition-colors"
            >
              Propiedades
            </Link>
            <Link
              to="/emprendimientos"
              className="hover:text-foreground transition-colors"
            >
              Emprendimientos
            </Link>
            <Link
              to="/tasaciones"
              className="hover:text-foreground transition-colors"
            >
              Tasaciones
            </Link>
            <Link
              to="/la-empresa"
              className="hover:text-foreground transition-colors"
            >
              La Empresa
            </Link>
            <Link
              to="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="ml-auto flex flex-1 items-center justify-end gap-3">
            <div className="relative hidden w-full max-w-xs md:block">
              <input
                placeholder="Buscar por código..."
                className="w-full rounded-md border bg-background pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <svg
                className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <a
              href="#publicar"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Publicar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
