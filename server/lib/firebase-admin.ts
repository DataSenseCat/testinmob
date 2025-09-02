import {
  initializeApp,
  applicationDefault,
  cert,
  getApps,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

/**
 * Initializes Firebase Admin using environment variables.
 * Prefer setting FIREBASE_SERVICE_ACCOUNT_JSON with the full JSON or fields.
 * Supports FIREBASE_SERVICE_ACCOUNT_URL to fetch JSON at runtime if needed.
 */
export async function getFirebaseAdmin() {
  if (!getApps().length) {
    const sa = await loadServiceAccount();
    if (sa) {
      initializeApp({
        credential: cert(sa as any),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      });
    } else {
      initializeApp({
        credential: applicationDefault(),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      });
    }
  }
  return {
    db: getFirestore(),
    storage: getStorage(),
  };
}

async function loadServiceAccount(): Promise<null | Record<string, string>> {
  const inline = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (inline) {
    try {
      const parsed = JSON.parse(inline);
      if (parsed.private_key && typeof parsed.private_key === "string") {
        parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
      }
      return parsed;
    } catch (e) {
      console.error("Invalid FIREBASE_SERVICE_ACCOUNT_JSON", e);
    }
  }

  const url = process.env.FIREBASE_SERVICE_ACCOUNT_URL;
  if (url) {
    try {
      const res = await fetch(url);
      const parsed = (await res.json()) as Record<string, string>;
      if (parsed.private_key && typeof parsed.private_key === "string") {
        parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
      }
      return parsed;
    } catch (e) {
      console.error("Failed to fetch service account URL", e);
    }
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (projectId && clientEmail && privateKey) {
    return {
      project_id: projectId,
      client_email: clientEmail,
      private_key: privateKey,
    } as any;
  }
  return null;
}
