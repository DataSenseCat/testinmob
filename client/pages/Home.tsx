import { useEffect, useMemo, useState } from "react";
import { fetchCollection, getImageUrl, type Property } from "@/lib/data";

export default function Home() {
  const [all, setAll] = useState<Property[] | null>(null);
  const [q, setQ] = useState({ type: "", operation: "", location: "" });

  useEffect(() => {
    fetchCollection<Property>("properties").then(setAll).catch(console.error);
  }, []);

  const featured = useMemo(() => (all || []).slice(0, 6), [all]);
  const [heroUrl, setHeroUrl] = useState<string | undefined>();
  useEffect(() => {
    (async () => {
      const url = await getImageUrl(
        "gs://catamarca-estates.firebasestorage.app/hero-catamarca.jpg",
      );
      setHeroUrl(url);
    })();
  }, []);

  return (
    <div className="pb-16">
      <Hero q={q} setQ={setQ} hero={heroUrl} />
      <section className="mx-auto mt-8 max-w-6xl px-4">
        <h2 className="mb-4 text-xl font-semibold">Propiedades destacadas</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(featured.length ? featured : new Array(6).fill(null)).map(
            (p, i) => (
              <PropertyCard key={p?.id ?? i} property={p ?? undefined} />
            ),
          )}
        </div>
      </section>

      <section className="container mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-base font-semibold">
            ¿Por qué elegir Inmobiliaria Catamarca?
          </h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Más de 15 años de experiencia
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Atención personalizada
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Tasaciones gratuitas
            </li>
          </ul>
          <a
            href="/la-empresa"
            className="mt-4 inline-flex rounded-md border px-4 py-2 text-sm hover:bg-accent"
          >
            Conocé Más Sobre Nosotros
          </a>
        </div>
        <div className="grid place-items-center rounded-xl border bg-muted/20 p-6 text-sm text-muted-foreground">
          Imagen de la empresa
        </div>
      </section>

      <section className="mt-10 bg-accent/40 py-10">
        <div className="container">
          <h3 className="mb-3 text-base font-semibold">
            Lo que dicen nuestros clientes
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Vendieron mi casa en tiempo récord y al precio que esperaba.",
              "Me ayudaron a encontrar la inversión perfecta.",
              "Excelente atención desde el primer día.",
            ].map((t, i) => (
              <blockquote
                key={i}
                className="rounded-xl border bg-card p-4 text-sm shadow-sm"
              >
                <div className="text-muted-foreground">{t}</div>
                <div className="mt-2 text-xs">Cliente satisfecho</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container mt-10">
        <h3 className="mb-3 text-center text-base font-semibold">
          Certificaciones y Membresías
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Colegio de Martilleros",
            "Cámara Inmobiliaria Argentina",
            "Registro Nacional de Administradores",
            "Certificación ISO 9001",
          ].map((t) => (
            <div
              key={t}
              className="rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground shadow-sm"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-primary-foreground">
          <h3 className="text-xl font-semibold">
            ¿Listo para tu próxima operación inmobiliaria?
          </h3>
          <p className="mt-1 text-sm opacity-90">
            Nuestro equipo está preparado para ayudarte a alcanzar tus
            objetivos.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-medium text-primary shadow"
            >
              Contactar Ahora
            </a>
            <a
              href="/tasaciones"
              className="inline-flex items-center justify-center rounded-md bg-white/20 px-5 py-2 text-sm font-medium text-primary-foreground shadow"
            >
              Solicitar Tasación Gratuita
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hero({
  q,
  setQ,
  hero,
}: {
  q: { type: string; operation: string; location: string };
  setQ: any;
  hero?: string;
}) {
  return (
    <div className="relative isolate h-[75vh] min-h-[640px] w-full">
      <img
        src={
          hero ||
          "https://images.unsplash.com/photo-1553697388-94e804e2f0f3?q=80&w=1600&auto=format&fit=crop"
        }
        alt="hero"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/45" />
      <div className="container flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Encontrá la propiedad de tus sueños
        </h1>
        <div className="mt-6 w-full max-w-4xl rounded-xl bg-white/95 p-4 text-left shadow-lg backdrop-blur">
          <div className="grid gap-3 sm:grid-cols-3">
            <select
              value={q.type}
              onChange={(e) => setQ({ ...q, type: e.target.value })}
              className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
            >
              <option value="">Tipo de Propiedad</option>
              <option>Casa</option>
              <option>Departamento</option>
              <option>Terreno</option>
            </select>
            <select
              value={q.operation}
              onChange={(e) => setQ({ ...q, operation: e.target.value })}
              className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
            >
              <option value="">Operación</option>
              <option>Venta</option>
              <option>Alquiler</option>
            </select>
            <input
              value={q.location}
              onChange={(e) => setQ({ ...q, location: e.target.value })}
              placeholder="Ubicación, barrio, o ciudad"
              className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
            />
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <button className="inline-flex flex-1 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow">
              Buscar Propiedades
            </button>
            <a className="text-xs text-blue-100 underline" href="/properties">
              Búsqueda avanzada
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property }: { property?: Property }) {
  const [img, setImg] = useState<string | undefined>();
  useEffect(() => {
    let cancelled = false;
    async function run() {
      const first = property?.images?.[0];
      const url = await getImageUrl(first);
      if (!cancelled) setImg(url);
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [property?.images?.[0]]);

  if (!property)
    return (
      <div
        className="animate-pulse rounded-xl border bg-muted/30 p-4"
        style={{ height: 280 }}
      />
    );

  return (
    <article className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <div className="aspect-[4/3] w-full bg-muted">
        {img ? (
          <img
            src={img}
            alt={property.title || "propiedad"}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="space-y-1 p-4 text-sm">
        <h3 className="truncate text-base font-semibold">
          {property.title || property.code || "Propiedad"}
        </h3>
        <p className="text-muted-foreground">{property.location}</p>
        {property.price ? (
          <p className="font-semibold">${String(property.price)}</p>
        ) : null}
        <div className="flex gap-2 text-xs text-muted-foreground">
          {property.type ? <span>{property.type}</span> : null}
          {property.operation ? <span>• {property.operation}</span> : null}
        </div>
      </div>
    </article>
  );
}
