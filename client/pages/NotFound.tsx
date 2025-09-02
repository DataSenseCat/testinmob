import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-3xl py-20 text-center">
      <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        La ruta "{location.pathname}" no existe. Usa el botón para volver al
        inicio.
      </p>
      <div className="mt-6">
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
