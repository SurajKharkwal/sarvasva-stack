import z from "zod";

const packageManager = z.enum(["bun", "npm"]);

export type PM = z.infer<typeof packageManager>;
