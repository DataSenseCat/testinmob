import { useEffect, useMemo, useState } from "react";

export default function ServerStatus() {
  const [status, setStatus] = useState<"loading" | "up" | "down">("loading");
  const [message, setMessage] = useState<string>("");

  const check = async () => {
    try {
      const res = await fetch("/api/ping", {
        headers: { "cache-control": "no-cache" },
      });
      if (!res.ok) throw new Error("Network");
      const data = (await res.json()) as { message: string };
      setMessage(data.message || "ping");
      setStatus("up");
    } catch {
      setStatus("down");
    }
  };

  useEffect(() => {
    check();
    const id = setInterval(check, 5000);
    return () => clearInterval(id);
  }, []);

  const badge = useMemo(() => {
    if (status === "loading")
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" />
          Comprobando...
        </span>
      );
    if (status === "up")
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-green-600/10 px-3 py-1 text-xs text-green-700 dark:text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          En ejecución
        </span>
      );
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-3 py-1 text-xs text-red-700 dark:text-red-400">
        <span className="h-2 w-2 rounded-full bg-red-600" />
        Detenido
      </span>
    );
  }, [status]);

  return (
    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold">Estado del servidor</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Respuesta de /api/ping: {message || "—"}
          </p>
        </div>
        {badge}
      </div>
      <div className="mt-4 flex gap-3">
        <button
          onClick={check}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Comprobar ahora
        </button>
        <a
          href="/api/demo"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          Ver demo API
        </a>
      </div>
    </div>
  );
}
