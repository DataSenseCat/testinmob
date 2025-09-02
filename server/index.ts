import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  getCollection,
  listStorage,
  pingFirebase,
  signUrl,
} from "./routes/firebase";
import { submitContacto, submitTasacion } from "./routes/forms";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Firebase
  app.get("/api/firebase/ping", pingFirebase);
  app.get("/api/collection/:name", getCollection);
  app.get("/api/storage/list", listStorage);
  app.get("/api/storage/url", signUrl);

  // Forms
  app.post("/api/forms/tasacion", submitTasacion);
  app.post("/api/forms/contacto", submitContacto);

  return app;
}
