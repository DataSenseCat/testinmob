import type { RequestHandler } from "express";
import { getFirebaseAdmin } from "../lib/firebase-admin";

function pick<T extends Record<string, any>>(obj: T, keys: string[]) {
  const out: Record<string, any> = {};
  for (const k of keys) if (k in obj) out[k] = obj[k];
  return out;
}

export const submitTasacion: RequestHandler = async (req, res) => {
  try {
    const { db } = await getFirebaseAdmin();
    const data = pick(req.body ?? {}, [
      "nombre",
      "email",
      "telefono",
      "direccion",
      "tipoPropiedad",
      "area",
      "comentarios",
    ]);
    data.createdAt = Date.now();
    const doc = await db.collection("tasaciones").add(data);
    res.json({ ok: true, id: doc.id });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
};

export const submitContacto: RequestHandler = async (req, res) => {
  try {
    const { db } = await getFirebaseAdmin();
    const data = pick(req.body ?? {}, [
      "nombre",
      "email",
      "telefono",
      "asunto",
      "mensaje",
      "preferencia",
    ]);
    data.createdAt = Date.now();
    const doc = await db.collection("contacto").add(data);
    res.json({ ok: true, id: doc.id });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
};
