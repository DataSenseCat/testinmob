export type FAQItem = { q: string; a: string };
export default function FAQ({
  items,
  title,
}: {
  items: FAQItem[];
  title?: string;
}) {
  return (
    <section className="container mt-12">
      {title ? (
        <h2 className="mb-4 text-center text-xl font-semibold">{title}</h2>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold">{it.q}</div>
            <div className="mt-1 text-sm text-muted-foreground">{it.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
