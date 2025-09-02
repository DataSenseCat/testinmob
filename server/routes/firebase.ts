import type { RequestHandler } from "express";
import { getFirebaseAdmin } from "../lib/firebase-admin";

export const pingFirebase: RequestHandler = async (_req, res) => {
  try {
    const { db } = await getFirebaseAdmin();
    await db.listCollections();
    res.json({ ok: true });
  } catch (e: any) {
    res.json({ ok: false, error: e?.message || String(e) });
  }
};

export const getCollection: RequestHandler = async (req, res) => {
  const name = String(req.params.name);
  try {
    const { db } = await getFirebaseAdmin();
    const ref = db.collection(name);
    let snap: any = null;
    try {
      snap = await ref.get();
    } catch (err: any) {
      const msg = (err?.message || String(err)).toUpperCase();
      if (
        msg.includes("NOT_FOUND") ||
        msg.includes("UNAVAILABLE") ||
        msg.includes("PERMISSION_DENIED")
      ) {
        return res.json({ count: 0, items: [] });
      }
      throw err;
    }
    const items = snap.docs.map((d: any) => ({ id: d.id, ...d.data() }));
    res.json({ count: items.length, items });
  } catch (e: any) {
    res.json({ count: 0, items: [], error: e?.message || String(e) });
  }
};

export const listStorage: RequestHandler = async (req, res) => {
  try {
    const { storage } = await getFirebaseAdmin();
    const bucketName = process.env.FIREBASE_STORAGE_BUCKET;
    const [files] = await storage
      .bucket(bucketName)
      .getFiles({ prefix: String(req.query.prefix || "") });
    res.json({
      bucket: bucketName,
      files: files.map((f) => ({
        name: f.name,
        size: f.metadata.size,
        contentType: f.metadata.contentType,
      })),
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || String(e) });
  }
};

export const signUrl: RequestHandler = async (req, res) => {
  try {
    const { storage } = await getFirebaseAdmin();
    const bucketName = process.env.FIREBASE_STORAGE_BUCKET!;
    const path = String(req.query.path || "");
    const file = storage
      .bucket(bucketName)
      .file(path.replace(/^gs:\/\/[^/]+\//, ""));
    const [url] = await file.getSignedUrl({
      action: "read",
      expires: Date.now() + 1000 * 60 * 60,
    });
    res.json({ url });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || String(e) });
  }
};
