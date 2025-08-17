import { heroSetup } from "@/ui/hero/hero.setup";
import { shadcnSetup } from "@/ui/shadcn/shadcn.setup";
import { install, runx, sparseClone } from "@repo/core";
import { standardSetup } from "@/eslint/standard/standard.setup";
import type { OPTIONS } from "./utils";

let dependencies: string[] = [];
let devDependencies: string[] = [];
let exec: string[] = [];

const storeData = (result?: {
  dependencies?: string[];
  devDependencies?: string[];
  exec?: string[];
}) => {
  if (!result) return;
  dependencies.push(...(result.dependencies ?? []));
  devDependencies.push(...(result.devDependencies ?? []));
  exec.push(...(result.exec ?? []));
};

const locate = {
  ui: { shadcn: shadcnSetup, hero: heroSetup },
  eslint: { standard: standardSetup },
};

export async function main(opts: OPTIONS) {
  const { appName, packageManager, eslint, theme, ui } = opts;
  await sparseClone(
    "https://github.com/SurajKharkwal/sarvasva/",
    "base/vite/tanstack-router/skeleton",
    appName,
    { silent: true, overrideDir: true },
  );
  if (ui === "shadcn") {
    const res = await locate.ui.shadcn(appName, theme!);
    storeData(res);
  }
  if (ui === "hero") {
    const res = await locate.ui.hero(appName);
    storeData(res);
  }
  if (eslint === "standard") {
    const res = await locate.eslint[eslint](appName);
    storeData(res);
  }

  await install(packageManager, dependencies, {
    silent: true,
    dir: appName,
    isDev: false,
  });

  await install(packageManager, devDependencies, {
    silent: true,
    dir: appName,
    isDev: true,
  });
  await runx(packageManager, exec, {
    silent: true,
    dir: appName,
  });
  console.log("Project setup complete!");
}
