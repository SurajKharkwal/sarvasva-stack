import z from "zod";

const packageManager = z.enum(["bun", "npm", "pnpm"]);

export type PM = z.infer<typeof packageManager>;
