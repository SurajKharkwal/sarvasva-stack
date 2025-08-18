import {
  createClerkHandler,
  signIn,
  signUp,
  severRoute,
  webhook,
} from "./data";
import path from "path";
import { echo } from "@repo/core";

const dependencies: string[] = ["@clerk/tanstack-react-start"];
const devDependencies: string[] = [];

const envs: string[] = [
  "VITE_CLERK_PUBLISHABLE_KEY=",
  "CLERK_SECRET_KEY=",
  "CLERK_SIGN_IN_URL=/sign-in",
  "CLERK_SIGN_IN_URL=/sign-up",
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=",
  "CLERK_SECRET_KEY=",
  "CLERK_WEBHOOK_SIGNING_SECRET=",
];

export async function clerkSetup(appDir: string) {
  try {
    await echo(path.join(appDir, "src/sign-in.$.tsx"), signIn);
    await echo(path.join(appDir, "src/sign-up.$.tsx"), signUp);
    // Write envs
    await echo(path.join(appDir, ".env.example"), envs.join("\n"), true);
    await echo(path.join(appDir, "src/server.ts"), createClerkHandler);
    await echo(
      path.join(appDir, "src/routes/api/clerk.example.ts"),
      severRoute,
    );
    await echo(path.join(appDir, "src/routes/api/clerk.webhook.ts"), webhook);

    return { dependencies, devDependencies };
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
