import { useEffect, useMemo, useState } from "react";
import { fetchCollection, getImageUrl, type Property } from "@/lib/data";

export default function Properties() {
  const [all, setAll] = useState<Property[] | null>(null);
  const [q, setQ] = useState({
    text: "",
    type: "",
    operation: "",
    location: "",
    city: "",
    max: "",
    rooms: "",
  });

  useEffect(() => {
    fetchCollection<Property>("properties").then(setAll).catch(console.error);
  }, []);

  const filtered = useMemo(() => {
    const list = all || [];
    return list.filter((p) => {
      const match = (v: any, s: string) =>
        String(v || "")
          .toLowerCase()
          .includes(s.toLowerCase());
      const price = Number((p as any)?.price || 0);
      const maxOk = q.max ? price <= Number(q.max) : true;
      const roomsOk = q.rooms
        ? String((p as any)?.rooms || "").includes(q.rooms)
        : true;
      return (
        (!q.text ||
          match(p.title || (p as any).code, q.text) ||
          match(p.location, q.text)) &&
        (!q.type || match(p.type, q.type)) &&
        (!q.operation || match(p.operation, q.operation)) &&
        (!q.location || match(p.location, q.location)) &&
        (!q.city || match((p as any).city, q.city)) &&
        maxOk &&
        roomsOk
      );
    });
  }, [all, q]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      <header className="py-6">
        <h1 className="text-2xl font-bold">Nuestras Propiedades</h1>
        <p className="text-sm text-muted-foreground">
          Refiná tu búsqueda para encontrar la propiedad perfecta.
        </p>
      </header>

      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-6">
          <input
            value={q.text}
            onChange={(e) => setQ({ ...q, text: e.target.value })}
            placeholder="Buscar por código..."
            className="w-full rounded-md border px-3 py-2 text-sm text-foreground md:col-span-2"
          />
          <select
            value={q.operation}
            onChange={(e) => setQ({ ...q, operation: e.target.value })}
            className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
          >
            <option value="">Operación</option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>
          <select
            value={q.type}
            onChange={(e) => setQ({ ...q, type: e.target.value })}
            className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
          >
            <option value="">Tipo</option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Terreno</option>
          </select>
          <select
            value={q.city}
            onChange={(e) => setQ({ ...q, city: e.target.value })}
            className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
          >
            <option value="">Ciudad</option>
            <option>Catamarca</option>
          </select>
          <select
            value={q.max}
            onChange={(e) => setQ({ ...q, max: e.target.value })}
            className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
          >
            <option value="">Precio máximo</option>
            <option value="50000">USD 50.000</option>
            <option value="100000">USD 100.000</option>
            <option value="200000">USD 200.000</option>
          </select>
          <select
            value={q.rooms}
            onChange={(e) => setQ({ ...q, rooms: e.target.value })}
            className="w-full rounded-md border px-3 py-2 text-sm text-foreground"
          >
            <option value="">Ambientes</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
          </select>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>Filtros activos aplicados</div>
          <a className="text-blue-600" href="#">
            Ver todas las propiedades
          </a>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(filtered.length ? filtered : new Array(6).fill(null)).map((p, i) => (
          <PropertyCard key={p?.id ?? i} property={p ?? undefined} />
        ))}
      </div>

      <section className="mt-10 grid gap-4 rounded-xl border bg-card p-6 text-sm shadow-sm sm:grid-cols-3">
        <div className="text-center">
          <div className="font-medium">¿No encontrás lo que buscás?</div>
          <p className="text-muted-foreground">
            Contactanos y te ayudamos a encontrar tu propiedad ideal
          </p>
          <a
            href="/contact"
            className="mt-2 inline-flex rounded-md border px-4 py-2 hover:bg-accent"
          >
            Contactar Asesor
          </a>
        </div>
        <div className="text-center">
          <div className="font-medium">Tasación Gratuita</div>
          <p className="text-muted-foreground">
            Conocé el valor real de tu propiedad sin costo
          </p>
          <a
            href="/tasaciones"
            className="mt-2 inline-flex rounded-md border px-4 py-2 hover:bg-accent"
          >
            Solicitar Tasación
          </a>
        </div>
        <div className="text-center">
          <div className="font-medium">Emprendimientos</div>
          <p className="text-muted-foreground">
            Conocé los desarrollos inmobiliarios en construcción
          </p>
          <a
            href="/emprendimientos"
            className="mt-2 inline-flex rounded-md border px-4 py-2 hover:bg-accent"
          >
            Ver Emprendimientos
          </a>
        </div>
      </section>
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
