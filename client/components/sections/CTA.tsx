export default function CTA({
  title,
  subtitle,
  primary,
  secondary,
  tone = "blue",
}: {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "blue" | "green" | "orange";
}) {
  const colors = {
    blue: "from-primary to-blue-600",
    green: "from-green-600 to-emerald-600",
    orange: "from-orange-600 to-amber-600",
  } as const;
  return (
    <section className={`container mt-12`}>
      <div
        className={`rounded-2xl bg-gradient-to-r ${colors[tone]} p-8 text-center text-primary-foreground`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {subtitle ? (
          <p className="mt-1 text-sm opacity-90">{subtitle}</p>
        ) : null}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {primary ? (
            <a
              href={primary.href}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-medium text-primary shadow"
            >
              {primary.label}
            </a>
          ) : null}
          {secondary ? (
            <a
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-md bg-white/20 px-5 py-2 text-sm font-medium text-primary-foreground shadow"
            >
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
