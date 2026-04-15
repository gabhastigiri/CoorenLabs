import { createApp } from "../src/app";

let app: Awaited<ReturnType<typeof createApp>> | null = null;

async function getApp() {
  if (!app) {
    app = await createApp();
  }
  return app;
}

export default async function handler(request: Request): Promise<Response> {
  const instance = await getApp();
  return instance.fetch(request);
}
