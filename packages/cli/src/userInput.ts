import type { PromptObject } from "prompts";
import prompts from "prompts";

export const questions: PromptObject[] = [
  // Framework selection
  {
    type: "select",
    name: "framework",
    message: "Choose your project framework:",
    choices: [
      { title: "Next.js", value: "next" },
      { title: "React.js (Vite)", value: "vite" },
    ],
  },

  // Next.js: router selection
  {
    type: (_, values) => (values.framework === "next" ? "select" : null),
    name: "router",
    message: "Select the router type for Next.js:",
    choices: [
      { title: "App Router", value: "next-apps" },
      { title: "Page Router", value: "next-pages" },
    ],
  },

  // React.js: router selection
  {
    type: (_, values) => (values.framework === "vite" ? "select" : null),
    name: "router",
    message: "Select a router for React:",
    choices: [
      { title: "React Router", value: "react-router" },
      { title: "TanStack Router", value: "tanstack-router" },
    ],
  },

  // UI library selection
  {
    type: "select",
    name: "ui",
    message: "Choose a UI library:",
    choices: [
      { title: "None", value: "none" },
      { title: "ShadCN", value: "shadcn" },
      { title: "Hero UI / Next UI", value: "hero" },
    ],
  },
  {
    type: (_, values) => (values.ui === "shadcn" ? "select" : null),
    name: "theme",
    message: "Choose a Theme:",
    choices: [
      { title: "Neutral", value: "neutral" },
      { title: "Zinc", value: "zinc" },
      { title: "Gray", value: "gray" },
      { title: "Slate", value: "slate" },
      { title: "Stone", value: "stone" },
    ],
  },

  // Next.js: authentication provider
  {
    type: (_, values) => (values.framework === "next" ? "select" : null),
    name: "auth",
    message: "Select an authentication provider for Next.js:",
    choices: [
      { title: "None", value: "none" },
      { title: "Clerk", value: "clerk" },
    ],
  },

  // Next.js: database selection
  {
    type: (_, values) => (values.framework === "next" ? "select" : null),
    name: "database",
    message: "Select a database for Next.js projects:",
    choices: [
      { title: "None", value: "none" },
      { title: "MongoDB", value: "mongodb" },
      { title: "MySQL", value: "mysql" },
      { title: "PostgreSQL", value: "postgres" },
      { title: "SQLite", value: "sqlite" },
    ],
  },

  // Next.js: ORM selection
  {
    type: (_, values) =>
      values.framework === "next" && values.database !== "mongodb"
        ? "select"
        : null,
    name: "orm",
    message: "Select an ORM for Next.js projects:",
    choices: [
      { title: "None", value: "none" },
      { title: "Prisma", value: "prisma" },
      { title: "Drizzle", value: "drizzle" },
    ],
  },

  // Package manager selection
  {
    type: "select",
    name: "packageManager",
    message: "Choose a package manager:",
    choices: [
      { title: "bun", value: "bun" },
      { title: "npm", value: "npm" },
      { title: "pnpm", value: "pnpm" },
    ],
  },

  // Package manager selection
  {
    type: "text",
    initial: "my-app",
    name: "appName",
    message: "what should your app be called",
  },
];

const onCancel = () => {
  console.log("Installation aborted by the user.");
  process.exit(1);
};

export async function getResponse() {
  return await prompts(questions, { onCancel });
}
