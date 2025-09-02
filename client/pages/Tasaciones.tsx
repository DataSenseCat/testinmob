import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Tasaciones() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    tipoPropiedad: "",
    area: "",
    comentarios: "",
  });
  const onChange = (k: string) => (e: any) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = async () => {
    try {
      const res = await fetch("/api/forms/tasacion", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Solicitud enviada");
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        tipoPropiedad: "",
        area: "",
        comentarios: "",
      });
    } catch (e) {
      toast.error("No se pudo enviar");
      console.error(e);
    }
  };
  return (
    <div className="pb-16">
      <section className="bg-primary/90 py-12 text-primary-foreground">
        <div className="container text-center">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            Servicio gratuito
          </span>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Tasación Gratuita de tu Propiedad
          </h1>
          <p className="mx-auto mt-2 max-w-3xl text-sm opacity-90">
            Conocé el valor real de tu propiedad con nuestro tasación
            profesional y gratuita. Más de 15 años de experiencia en el mercado
            inmobiliario catamarqueño.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Badge>100% Gratuito</Badge>
            <Badge>Respuesta en 24hs</Badge>
            <Badge>Informe Completo</Badge>
          </div>
        </div>
      </section>

      <section className="container mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold">Solicitar Tasación Gratuita</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Completá el formulario y nos contactaremos contigo en las próximas
            24 horas.
          </p>

          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Nombre completo *"
                placeholder="Juan Perez"
                value={form.nombre}
                onChange={onChange("nombre")}
              />
              <Field
                label="Email *"
                type="email"
                placeholder="juan.perez@example.com"
                value={form.email}
                onChange={onChange("email")}
              />
            </div>
            <Field
              label="Teléfono"
              placeholder="+54 383 123 4567"
              value={form.telefono}
              onChange={onChange("telefono")}
            />
            <Field
              label="Dirección de la propiedad *"
              placeholder="Av. Belgrano 1250, Catamarca"
              value={form.direccion}
              onChange={onChange("direccion")}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label="Tipo de propiedad *"
                value={form.tipoPropiedad}
                onChange={onChange("tipoPropiedad")}
              >
                <option>Casa</option>
                <option>Departamento</option>
                <option>Terreno</option>
              </Select>
              <Field
                label="Área aproximada (m²)"
                placeholder="120"
                value={form.area}
                onChange={onChange("area")}
              />
            </div>
            <Textarea
              label="Comentarios adicionales"
              placeholder="Detalles adicionales sobre la propiedad..."
              value={form.comentarios}
              onChange={onChange("comentarios")}
            />
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow"
            >
              Solicitar Tasación Gratuita
            </button>
            <p className="text-xs text-muted-foreground">
              Al enviar este formulario, aceptás que podemos usar tus datos para
              contactarte. Respetamos tu privacidad.
            </p>
          </form>

          <div className="mt-6 rounded-xl border bg-muted/20 p-4 text-sm">
            <h3 className="font-semibold">¿Qué incluye la tasación?</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Evaluación presencial de la propiedad</li>
              <li>Análisis comparativo del mercado</li>
              <li>Informe con valor estimado</li>
              <li>Recomendaciones para mejorar el valor</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">¿Cómo funciona?</h3>
            <ol className="mt-3 space-y-3 text-sm">
              <li>
                <Step
                  title="1. Contacto Inicial"
                  text="Nos ponés en contacto para coordinar la visita y conocer más detalles de tu propiedad."
                />
              </li>
              <li>
                <Step
                  title="2. Visita Técnica"
                  text="Nuestro tasador profesional realiza una inspección detallada de la propiedad y su entorno."
                />
              </li>
              <li>
                <Step
                  title="3. Análisis de Mercado"
                  text="Analizamos propiedades comparables en la zona y las tendencias actuales del mercado."
                />
              </li>
              <li>
                <Step
                  title="4. Informe Detallado"
                  text="Recibís un informe completo con el valor estimado y recomendaciones para potenciar el precio."
                />
              </li>
            </ol>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">
              ¿Preferís contactarnos directamente?
            </h3>
            <div className="mt-4 grid gap-3 text-sm">
              <a
                href="https://wa.me/543834901545"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="mailto:rlolin1972@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="container mt-12">
        <h2 className="mb-4 text-center text-xl font-semibold">
          ¿Por qué elegir nuestra tasación?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "15+", d: "Años de experiencia" },
            { t: "Datos actualizados", d: "Análisis de mercado" },
            { t: "Gratuito", d: "Servicio completo" },
            { t: "24hs", d: "Respuesta rápida" },
          ].map((i) => (
            <div
              key={i.d}
              className="rounded-xl border bg-card p-6 text-center shadow-sm"
            >
              <div className="text-2xl font-bold">{i.t}</div>
              <div className="text-sm text-muted-foreground">{i.d}</div>
            </div>
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
              "Excelente servicio, informe muy completo.",
              "Muy conforme con el servicio.",
              "Profesionales serios y confiables.",
            ].map((t, i) => (
              <blockquote
                key={i}
                className="rounded-xl border bg-card p-4 text-sm shadow-sm"
              >
                <div className="text-muted-foreground">{t}</div>
                <div className="mt-2 text-xs">Propietario</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container mt-12">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Preguntas Frecuentes
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              q: "¿Realmente es gratuita la tasación?",
              a: "Sí, completamente gratuita. No incluye costos por la visita.",
            },
            {
              q: "¿Cuánto tiempo demora el proceso?",
              a: "Entre 3 a 5 días hábiles desde la solicitud hasta la entrega del informe.",
            },
            {
              q: "¿Qué incluye el informe?",
              a: "Valor estimado, análisis de mercado y recomendaciones.",
            },
            {
              q: "¿En qué zonas hacen tasaciones?",
              a: "Toda la provincia de Catamarca y alrededores.",
            },
          ].map((it) => (
            <div
              key={it.q}
              className="rounded-xl border bg-card p-4 text-sm shadow-sm"
            >
              <div className="font-semibold">{it.q}</div>
              <div className="mt-1 text-muted-foreground">{it.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center text-primary-foreground">
          <h3 className="text-xl font-semibold">
            ¿Estás pensando en vender tu propiedad?
          </h3>
          <p className="mt-1 text-sm opacity-90">
            Una tasación profesional es el primer paso para una venta exitosa.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/tasaciones"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-medium text-primary shadow"
            >
              Solicitar Tasación Gratuita
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white/20 px-5 py-2 text-sm font-medium text-primary-foreground shadow"
            >
              Contactar Asesor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-white/20 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function Field({ label, ...props }: any) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
function Select({ label, children, ...props }: any) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <select
        {...props}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
      >
        {children}
      </select>
    </div>
  );
}
function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <textarea
        {...props}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Step({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{text}</div>
    </div>
  );
}
