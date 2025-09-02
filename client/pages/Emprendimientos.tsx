import { useEffect, useMemo, useState } from "react";
import { fetchCollection, getImageUrl } from "@/lib/data";

type Project = {
  id: string;
  title?: string;
  status?: "En Planificación" | "En Construcción" | "Finalizado" | string;
  location?: string;
  images?: string[];
  [k: string]: any;
};

export default function Emprendimientos() {
  const [all, setAll] = useState<Project[] | null>(null);
  const [tab, setTab] = useState<string>("Todos");

  useEffect(() => {
    fetchCollection<Project>("emprendimientos")
      .then(setAll)
      .catch(console.error);
  }, []);

  const filtered = useMemo(() => {
    const list = all || [];
    if (tab === "Todos") return list;
    return list.filter((p) =>
      (p.status || "")
        .toLowerCase()
        .includes(tab.replace("En ", "").toLowerCase()),
    );
  }, [all, tab]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      <header className="py-10 text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Emprendimientos Inmobiliarios
        </h1>
        <p className="mx-auto mt-2 max-w-3xl text-sm text-muted-foreground">
          Descubrí los mejores desarrollos inmobiliarios en Catamarca. Desde
          complejos residenciales hasta barrios cerrados, encontrá la inversión
          perfecta para tu futuro.
        </p>
        <div className="mt-4 inline-flex gap-2 rounded-md border bg-card p-1 shadow-sm">
          {(
            [
              "Todos",
              "En Planificación",
              "En Construcción",
              "Finalizados",
            ] as const
          ).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium ${tab === t ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(filtered.length ? filtered : new Array(6).fill(null)).map((p, i) => (
          <ProjectCard key={(p as any)?.id ?? i} project={p ?? undefined} />
        ))}
      </div>

      <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-primary-foreground">
        <h3 className="text-xl font-semibold">
          ¿Tenés un proyecto inmobiliario?
        </h3>
        <p className="mt-1 text-sm opacity-90">
          Te ayudamos con la comercialización y marketing de tus unidades.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-medium text-primary shadow"
        >
          Contactar para Comercialización
        </a>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project?: Project }) {
  const [img, setImg] = useState<string | undefined>();
  useEffect(() => {
    let c = false;
    (async () => {
      const u = await getImageUrl(project?.images?.[0]);
      if (!c) setImg(u);
    })();
    return () => {
      c = true;
    };
  }, [project?.images?.[0]]);

  if (!project)
    return (
      <div
        className="animate-pulse rounded-xl border bg-muted/30 p-4"
        style={{ height: 280 }}
      />
    );

  return (
    <article className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-muted">
        {img && (
          <img
            src={img}
            alt={project.title || "emprendimiento"}
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute left-3 top-3 flex items-center gap-2 text-[11px]">
          {project.status && (
            <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-white">
              {project.status}
            </span>
          )}
          <span className="rounded-full bg-yellow-400/90 px-2 py-0.5 text-slate-900">
            Destacado
          </span>
        </div>
      </div>
      <div className="space-y-2 p-4 text-sm">
        <h3 className="line-clamp-1 text-base font-semibold">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground">{project.location}</p>
        <p className="line-clamp-2 text-muted-foreground">
          {project.description ||
            "Moderno complejo residencial con unidades, amenidades y espacios verdes."}
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-muted-foreground">Total de unidades</div>
            <div className="font-medium">{(project as any)?.units || "90"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Entrega</div>
            <div className="font-medium">
              {(project as any)?.delivery || "diciembre de 2025"}
            </div>
          </div>
        </div>
        <div className="mt-2 rounded-md bg-muted p-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Rango de precios</span>
            <span className="font-medium">
              USD {((project as any)?.min || 65000).toLocaleString()} - USD{" "}
              {((project as any)?.max || 180000).toLocaleString()}
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-white/60">
            <div className="h-full w-1/2 rounded bg-primary" />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <a
            href="#"
            className="inline-flex flex-1 items-center justify-center rounded-md border px-3 py-2 text-xs hover:bg-accent"
          >
            Ver Detalles
          </a>
          <a
            href="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-md bg-emerald-600 px-3 py-2 text-xs font-medium text-white hover:opacity-95"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
