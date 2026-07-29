import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const serverOutputDirectory = resolve(projectDirectory, "dist", "server");

await mkdir(serverOutputDirectory, { recursive: true });
await copyFile(
  resolve(projectDirectory, "server", "index.js"),
  resolve(serverOutputDirectory, "index.js")
);
