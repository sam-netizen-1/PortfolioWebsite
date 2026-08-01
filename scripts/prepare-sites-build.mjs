import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const buildOutputDirectory = resolve(projectDirectory, "dist");
const serverOutputDirectory = resolve(buildOutputDirectory, "server");

await mkdir(serverOutputDirectory, { recursive: true });
await Promise.all([
  copyFile(resolve(projectDirectory, "server", "index.js"), resolve(serverOutputDirectory, "index.js")),
  copyFile(resolve(buildOutputDirectory, "index.html"), resolve(buildOutputDirectory, "404.html")),
]);
