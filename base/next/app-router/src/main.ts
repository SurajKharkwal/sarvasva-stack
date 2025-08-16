import { heroSetup } from "@/ui/hero/hero.setup";
import { shadcnSetup } from "@/ui/shadcn/shadcn.setup";
import { clerkSetup } from "@/auth/clerk/clerk.setup";
import { mysqlSetup } from "@/db/mysql/mysql.setup";
import { postgresSetup } from "@/db/postgres/postgres.setup";
import { sqliteSetup } from "@/db/sqlite/sqlite.setup";
import { mongodbSetup } from "@/db/mongodb/mongodb.setup";
import { standardSetup } from "@/eslint/standard/standard.setup";
import { prismaSetup } from "@/orm/prisma/prisma.setup";
import { drizzleSetup } from "@/orm/drizzle/drizzle.setup";
import path from "path";
import type { OPTIONS } from "./utils";
import { echo, install, runx, sparseClone } from "@repo/core";
import { layout } from "../extra/common/layout";

let dependencies: string[] = [];
let devDependencies: string[] = [];
let exec: string[] = [];

const storeData = (result?: {
  dependencies?: string[];
  devDependencies?: string[];
  exec?: string[];
}) => {
  if (!result) return;
  if (result.dependencies?.length) dependencies.push(...result.dependencies);
  if (result.devDependencies?.length)
    devDependencies.push(...result.devDependencies);
  if (result.exec?.length) exec.push(...result.exec);
};

const locate = {
  ui: { shadcn: shadcnSetup, hero: heroSetup },
  auth: { clerk: clerkSetup },
  database: {
    mysql: mysqlSetup,
    postgresql: postgresSetup,
    sqlite: sqliteSetup,
    mongodb: mongodbSetup,
  },
  eslint: { standard: standardSetup },
  orm: { prisma: prismaSetup, drizzle: drizzleSetup },
};

export async function main(opts: OPTIONS) {
  const { appName, packageManager, auth, database, eslint, orm, theme, ui } =
    opts;
  await sparseClone(
    "https://github.com/SurajKharkwal/sarvasva-stack",
    "base/next/app-router/template",
    appName,
    { overrideDir: true, silent: true },
  );

  if (ui === "shadcn") {
    const res = await locate.ui.shadcn(appName, theme!);
    storeData(res);
  }
  if (ui === "hero") {
    const res = await locate.ui.hero(appName);
    storeData(res);
  }
  if (auth) {
    const res = await locate.auth[auth](appName);
    storeData(res);
  }
  if (database && orm !== "prisma") {
    const res = await locate.database[database](appName);
    storeData(res);
  }
  if (orm) {
    const res = await locate.orm[orm](appName, database as any);
    storeData(res);
  }
  if (eslint) {
    const res = await locate.eslint[eslint](appName);
    storeData(res);
  }
  await echo(
    path.join(appName, "src/layout.tsx"),
    layout(auth === "clerk", ui === "hero"),
  );
  await install(packageManager, devDependencies, {
    dir: appName,
    silent: true,
    isDev: true,
  });
  await install(packageManager, dependencies, {
    dir: appName,
    silent: true,
    isDev: false,
  });
  await runx(packageManager, exec, { dir: appName, silent: true });
}
