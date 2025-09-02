import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Building2,
  Clock,
  Route,
  ChevronRight,
  Check,
} from "lucide-react";

import { useState } from "react";

export default function Index() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [preferencia, setPreferencia] = useState("Email");
  return (
    <div className="space-y-10">
      <header className="mx-auto max-w-5xl pt-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Contactános
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
          ¿Tenés alguna consulta? Nos encantaría ayudarte. Contáctanos a través
          de cualquiera de nuestros canales de comunicación y te responderemos a
          la brevedad.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-600/10 px-2.5 py-1 font-medium text-green-700">
            <Check className="h-3 w-3" /> Respuesta rápida
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/10 px-2.5 py-1 font-medium text-blue-700">
            <Check className="h-3 w-3" /> Atención personalizada
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-pink-600/10 px-2.5 py-1 font-medium text-pink-700">
            <Check className="h-3 w-3" /> Asesoramiento gratuito
          </span>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={<Phone className="h-5 w-5" />}
          title="Teléfono"
          subtitle="+54 383 4901545"
          note="Lunes a Viernes de 9 a 18hs"
          action={{ label: "Llamar", href: "tel:+543834901545" }}
        />
        <Card
          icon={<MessageCircle className="h-5 w-5" />}
          title="WhatsApp"
          subtitle="+54 383 4901545"
          note="Respuesta inmediata"
          action={{ label: "Chatear", href: "https://wa.me/543834901545" }}
        />
        <Card
          icon={<Mail className="h-5 w-5" />}
          title="Email"
          subtitle="rlolin1972@gmail.com"
          note="Respuesta en 24hs"
          action={{ label: "Escribir", href: "mailto:rlolin1972@gmail.com" }}
        />
        <Card
          icon={<MapPin className="h-5 w-5" />}
          title="Oficina"
          subtitle="Av Presidente Castillo 3814"
          note=""
          action={{
            label: "Ver Mapa",
            href: "https://maps.google.com/?q=Av+Presidente+Castillo+3814",
          }}
        />
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold">Envíanos un Mensaje</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Completá el formulario y nos contactaremos contigo en las próximas
            24 horas.
          </p>

          <form
            className="mt-4 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const res = await fetch("/api/forms/contacto", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({
                    nombre,
                    email,
                    telefono,
                    asunto,
                    mensaje,
                    preferencia,
                  }),
                });
                if (!res.ok) throw new Error(await res.text());
                alert("Mensaje enviado");
                setNombre("");
                setEmail("");
                setTelefono("");
                setAsunto("");
                setMensaje("");
                setPreferencia("Email");
              } catch (err) {
                console.error(err);
                alert("No se pudo enviar");
              }
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Nombre completo
                </label>
                <input
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Teléfono (opcional)
              </label>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="+54 383 456 7890"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">
                ¿Cómo preferís que te contactemos?
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="contacto"
                    checked={preferencia === "Email"}
                    onChange={() => setPreferencia("Email")}
                    className="accent-blue-600"
                  />{" "}
                  Email
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="contacto"
                    checked={preferencia === "Llamada"}
                    onChange={() => setPreferencia("Llamada")}
                    className="accent-blue-600"
                  />{" "}
                  Llamada telefónica
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="contacto"
                    checked={preferencia === "WhatsApp"}
                    onChange={() => setPreferencia("WhatsApp")}
                    className="accent-blue-600"
                  />{" "}
                  WhatsApp
                </label>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Asunto</label>
              <select
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                className="w-full appearance-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Seleccionar asunto</option>
                <option>Consulta general</option>
                <option>Venta</option>
                <option>Alquiler</option>
                <option>Tasaciones</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Mensaje</label>
              <textarea
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Contanos en qué podemos ayudarte..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Enviar Mensaje
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              ¿Preferís contactarnos directamente?
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <a
                href="https://wa.me/543834901545"
                className="inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="mailto:rlolin1972@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="tel:+543834901545"
                className="inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
              >
                <PhoneCall className="h-4 w-4" /> Llamar
              </a>
            </div>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <MapPin className="h-4 w-4" /> Información de la Oficina
            </h3>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  Dirección
                </p>
                <p>Av Presidente Castillo 3814</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <p>
                  <span className="text-xs uppercase text-muted-foreground">
                    Horarios de Atención
                  </span>
                  <br /> Lun-Vier 08:13, 16-20
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Route className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <p>
                  <span className="text-xs uppercase text-muted-foreground">
                    Cómo llegar
                  </span>
                  <br /> Estamos ubicados en pleno centro de la ciudad, cerca de
                  bancos y comercios principales.
                </p>
              </div>
              <a
                href="https://maps.google.com"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
              >
                Ver en Google Maps <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">Departamentos</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="flex items-center gap-2 font-medium">
                  <Building2 className="h-4 w-4" /> Ventas
                </p>
                <a
                  href="mailto:ventas@inmobiliariacatamarca.com"
                  className="text-blue-600 hover:underline"
                >
                  ventas@inmobiliariacatamarca.com
                </a>
                <p className="text-muted-foreground">+54 383 456-7890</p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-medium">
                  <Building2 className="h-4 w-4" /> Alquileres
                </p>
                <a
                  href="mailto:alquileres@inmobiliariacatamarca.com"
                  className="text-blue-600 hover:underline"
                >
                  alquileres@inmobiliariacatamarca.com
                </a>
                <p className="text-muted-foreground">+54 383 456-7891</p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-medium">
                  <Building2 className="h-4 w-4" /> Tasaciones
                </p>
                <a
                  href="mailto:tasaciones@inmobiliariacatamarca.com"
                  className="text-blue-600 hover:underline"
                >
                  tasaciones@inmobiliariacatamarca.com
                </a>
                <p className="text-muted-foreground">+54 383 456-7892</p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-medium">
                  <Building2 className="h-4 w-4" /> Administración
                </p>
                <a
                  href="mailto:admin@inmobiliariacatamarca.com"
                  className="text-blue-600 hover:underline"
                >
                  admin@inmobiliariacatamarca.com
                </a>
                <p className="text-muted-foreground">+54 383 456-7893</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="mb-4 text-center text-lg font-semibold">
          Nuestra Ubicación
        </h2>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border bg-muted">
          <iframe
            title="Mapa"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Av+Presidente+Castillo+3814,+Catamarca&output=embed"
          ></iframe>
        </div>
      </section>

      <section className="container">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Preguntas Frecuentes
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-4 text-sm shadow-sm">
            <div className="font-semibold">
              ¿Cuál es el horario de atención?
            </div>
            <div className="mt-1 text-muted-foreground">
              Lun a Vie 08:00 a 18:00. Por WhatsApp respondemos las 24 hs.
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4 text-sm shadow-sm">
            <div className="font-semibold">¿Hacen tasaciones gratuitas?</div>
            <div className="mt-1 text-muted-foreground">
              Sí, completamente gratis y sin compromiso.
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4 text-sm shadow-sm">
            <div className="font-semibold">¿En qué zonas operan?</div>
            <div className="mt-1 text-muted-foreground">
              Catamarca capital y alrededores.
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4 text-sm shadow-sm">
            <div className="font-semibold">¿Cómo publicar mi propiedad?</div>
            <div className="mt-1 text-muted-foreground">
              Escribinos por WhatsApp o completá el formulario.
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 p-8 text-center text-primary-foreground">
          <h3 className="text-xl font-semibold">
            ¿Necesitás atención fuera del horario comercial?
          </h3>
          <p className="mt-1 text-sm opacity-90">
            Para emergencias relacionadas con propiedades, escribinos por
            WhatsApp. Respondemos 24 hs.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/543834901545"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-medium text-primary shadow"
            >
              WhatsApp 24hs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  icon,
  title,
  subtitle,
  note,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  note?: string;
  action: { label: string; href: string };
}) {
  return (
    <div className="rounded-xl border bg-card p-5 text-center shadow-sm">
      <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm">{subtitle}</p>
      {note ? (
        <p className="mt-1 text-xs text-muted-foreground">{note}</p>
      ) : null}
      <a
        href={action.href}
        className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95"
      >
        {action.label}
      </a>
    </div>
  );
}
