import { Link, useLocation } from "react-router-dom";

export default function Placeholder() {
  const { pathname } = useLocation();
  const titleMap: Record<string, string> = {
    "/properties": "Propiedades",
    "/emprendimientos": "Emprendimientos",
    "/tasaciones": "Tasaciones",
    "/la-empresa": "La Empresa",
    "/contact": "Contacto",
  };
  const title = titleMap[pathname] || "Página";

  return (
    <div className="mx-auto max-w-4xl py-20 text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Esta sección se replicará 1:1 según el sitio de referencia. Indica si
        priorizamos esta página para completarla ahora.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
