export type Property = {
  id: string;
  title?: string;
  price?: number | string;
  location?: string;
  type?: string;
  operation?: string;
  code?: string;
  images?: string[];
  [key: string]: any;
};

export async function fetchCollection<T = any>(name: string): Promise<T[]> {
  try {
    const res = await fetch(`/api/collection/${encodeURIComponent(name)}`);
    if (!res.ok) {
      let detail = "";
      try {
        detail = await res.text();
      } catch {}
      console.error(
        `Failed to load ${name}: ${res.status} ${res.statusText} ${detail}`,
      );
      return [] as T[];
    }
    const data = await res.json();
    return (data.items as T[]) || [];
  } catch (e) {
    console.error(`Failed to load ${name}:`, e);
    return [] as T[];
  }
}

export async function getImageUrl(
  path?: string | null,
): Promise<string | undefined> {
  if (!path) return undefined;
  if (/^https?:\/\//.test(path)) return path;
  const gs = path.startsWith("gs://")
    ? path
    : `gs://${process.env.FIREBASE_STORAGE_BUCKET || ""}/${path}`;
  const res = await fetch(`/api/storage/url?path=${encodeURIComponent(gs)}`);
  if (!res.ok) return undefined;
  const { url } = await res.json();
  return url as string;
}
