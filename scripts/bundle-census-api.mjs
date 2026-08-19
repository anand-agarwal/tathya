import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const entry = path.join(root, "server/vercel-chat.ts");
const require = createRequire(path.join(root, "package.json"));
const esbuild = require("esbuild");

const stale = [path.join(root, "api/_handler.js")];
await Promise.all(stale.map((file) => rm(file, { force: true })));
await mkdir(path.join(root, "api"), { recursive: true });

await esbuild.build({
  absWorkingDir: root,
  entryPoints: [entry],
  outfile: path.join(root, "api/_handler.cjs"),
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "node20",
  logLevel: "info",
  define: {
    "import.meta.env": "process.env",
  },
});
