#!/usr/bin/env node
import { getResponse } from "./src/userInput";
import { generateCommand, runCommand } from "./src/utils";
import ora, { spinners } from "ora";

async function main() {
  const data = await getResponse();
  const { cmd, args } = generateCommand(data as any);

  const spinner = ora({
    text: `Running ${cmd} ${args.join(" ")}`,
    spinner: spinners.dots,
  }).start();

  try {
    await runCommand(cmd, args); // waits until command finishes
    spinner.succeed("Command finished successfully!");
  } catch (err) {
    spinner.fail("Command failed!");
    console.error(err);
  }
}

main().catch((err) => console.error(err));
