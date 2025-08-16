import path from "path";
import { echo } from "@repo/core";
import { generatePrismaSchema, prisma, route } from "./data";
import type { ORM_DB } from "@/utils";

const dependencies: string[] = [
  "@prisma/client",
  "@prisma/extension-accelerate",
];
const devDependencies: string[] = ["prisma"];

const exec: string[] = ["prisma generate"];
const envs: string[] = ["DATABASE_URL="];

export async function prismaSetup(appDir: string, database: ORM_DB) {
  try {
    await echo(path.join(appDir, "src/app/api/example/route.ts"), route);
    await echo(path.join(appDir, "src/lib/db.ts"), prisma);
    await echo(path.join(appDir, ".env.example"), envs.join("\n"), true);
    await echo(
      path.join(appDir, "prisma/schema.prisma"),
      generatePrismaSchema(database),
    );
    return { dependencies, devDependencies, exec };
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
