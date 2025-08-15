import { install, runx } from "../src/utils";
import type { PM } from "@/types";

const dependencies = ["lodash", "axios", "dayjs"];
const devDependencies = ["typescript", "eslint", "prettier"];
const run = ["eslint --version", "prettier --version", "tsc --version"];

export async function add(pm: PM, silent = false) {
  console.log("📦 Installing dependencies...");
  for (const dep of dependencies) {
    await install(pm, dep, { isDev: false, silent });
  }

  console.log("📦 Installing dev dependencies...");
  for (const dep of devDependencies) {
    await install(pm, dep, { isDev: true, silent });
  }

  console.log("⚡ Running test commands...");
  for (const cmd of run) {
    await runx(pm, cmd, { silent });
  }
}

export async function remove(pm: PM, silent = false) {
  console.log("🗑️ Removing dependencies...");
  if (pm === "npm") {
    await runx(pm, `npm uninstall ${dependencies.join(" ")}`, { silent });
    await runx(pm, `npm uninstall ${devDependencies.join(" ")}`, { silent });
  } else if (pm === "bun") {
    await runx(pm, `bun remove ${dependencies.join(" ")}`, { silent });
    await runx(pm, `bun remove ${devDependencies.join(" ")}`, { silent });
  } else {
    throw new Error(`Remove not implemented for package manager: ${pm}`);
  }
}

await add("npm", false);
