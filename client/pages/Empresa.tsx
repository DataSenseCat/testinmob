export default function Empresa() {
  return (
    <div className="pb-16">
      <section className="bg-primary/90 py-16 text-primary-foreground">
        <div className="container text-center">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            Desde 2008
          </span>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            Guerrero Inmobiliaria
          </h1>
          <p className="mx-auto mt-2 max-w-3xl text-sm opacity-90">
            Líderes en el mercado inmobiliario catamarqueño con más de 15 años
            de experiencia, conectando sueños con realidades a través del mejor
            servicio profesional.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href="/contact"
              className="rounded-md bg-white px-5 py-2 text-sm font-medium text-primary shadow"
            >
              Contáctenos Ahora
            </a>
            <a
              href="/properties"
              className="rounded-md bg-white/20 px-5 py-2 text-sm font-medium text-primary-foreground shadow"
            >
              Ver Propiedades
            </a>
          </div>
        </div>
      </section>

      <section className="container mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { t: "15+", d: "Años de experiencia" },
          { t: "2,500+", d: "Propiedades vendidas" },
          { t: "5,000+", d: "Clientes satisfechos" },
          { t: "98%", d: "Satisfacción" },
        ].map((i) => (
          <div
            key={i.d}
            className="rounded-xl border bg-card p-6 text-center shadow-sm"
          >
            <div className="text-2xl font-bold">{i.t}</div>
            <div className="text-sm text-muted-foreground">{i.d}</div>
          </div>
        ))}
      </section>

      <section className="container mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-base font-semibold">Nuestra Misión</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            <li>Servicio de alta calidad y profesional</li>
            <li>Transparencia en todas las operaciones</li>
            <li>Acompañamiento integral</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-base font-semibold">Nuestra Visión</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            <li>Liderazgo en el mercado regional</li>
            <li>Innovación tecnológica</li>
            <li>Expansión responsable</li>
          </ul>
        </div>
      </section>

      <section className="container mt-12">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Nuestro Equipo
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {new Array(3).fill(null).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-xl border bg-muted/30"
            />
          ))}
        </div>
      </section>

      <section className="mt-10 bg-accent/40 py-10">
        <div className="container">
          <h3 className="mb-3 text-base font-semibold">
            Lo que dicen nuestros clientes
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Venden en tiempo récord y al precio esperado.",
              "Atención cercana y confiable.",
              "Servicio profesional y transparente.",
            ].map((t, i) => (
              <blockquote
                key={i}
                className="rounded-xl border bg-card p-4 text-sm shadow-sm"
              >
                <div className="text-muted-foreground">{t}</div>
                <div className="mt-2 text-xs">Cliente</div>
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
            "Colegio de Martilleros de Catamarca",
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
            Contactanos hoy mismo y descubrí la diferencia de trabajar con
            profesionales.
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
