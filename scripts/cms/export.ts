import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId || !token) throw new Error("Set PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN before running cms:export.");

const root = fileURLToPath(new URL("../../", import.meta.url));
const backupDirectory = fileURLToPath(new URL("../../backups/", import.meta.url));
await mkdir(backupDirectory, { recursive: true });
const date = new Date().toISOString().slice(0, 10);
const destination = `${backupDirectory}fnbc-sanity-${dataset}-${date}.tar.gz`;
const processHandle = Bun.spawn(["bun", "x", "sanity", "dataset", "export", dataset, destination], {
  cwd: `${root}studio`,
  env: { ...process.env, SANITY_STUDIO_PROJECT_ID: projectId, SANITY_STUDIO_DATASET: dataset, SANITY_AUTH_TOKEN: token },
  stdout: "inherit",
  stderr: "inherit",
});
const status = await processHandle.exited;
if (status !== 0) throw new Error(`Sanity export failed with exit code ${status}.`);
console.log(`Created ${destination}`);
