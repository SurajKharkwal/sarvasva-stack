import { mkdir, writeFile, appendFile } from "fs/promises";
import { execa } from "execa";
import path from "path";
import type { PM } from "./types";

export async function echo(filePath: string, message: string, append = false) {
  await mkdir(path.dirname(filePath), { recursive: true });
  if (append) await appendFile(filePath, message, "utf8");
  else await writeFile(filePath, message, "utf8");
}

const dependencies = {
  bun: "bun add",
  npm: "npm install",
};

const devDependencies = {
  bun: "bun add -D",
  npm: "npm install --save-dev",
};

const bin = {
  bun: "bunx",
  npm: "npx",
};

type OPTS = {
  silent?: boolean;
  isDev?: boolean;
  dir?: string;
};

export async function install(pm: PM, command: string | string[], opts?: OPTS) {
  const { silent = true, isDev = false, dir = process.cwd() } = opts || {};
  const args = Array.isArray(command) ? command : [command];
  const cmd = isDev ? devDependencies[pm] : dependencies[pm];
  const [bin, ...binArgs] = cmd.split(" ");
  try {
    await execa(bin!, [...binArgs, ...args], {
      cwd: dir,
      stdio: silent ? "ignore" : "inherit",
    });
  } catch (err) {
    console.error(
      `❌ Failed to install ${isDev ? "dev " : ""}dependencies: ${args.join(", ")}`,
    );
    process.exit(1);
  }
}

export async function runx(
  pm: PM,
  command: string | string[],
  opts?: { silent: boolean; dir?: string },
) {
  const { silent = true, dir = process.cwd() } = opts || {};
  const args = Array.isArray(command) ? command : [command];
  for (const arg of args) {
    try {
      await execa(bin[pm], [...arg.split(" ")], {
        cwd: dir,
        stdio: silent ? "ignore" : "inherit",
      });
    } catch (err) {
      console.error(`❌ Failed to run command: ${arg}`);
      process.exit(1);
    }
  }
}
