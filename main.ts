// main.ts — "Post the Meme, Win the Feed" (make.fun bounty
// u-myronera-post-the-meme-win-the-feed-2de960bf).
//
// The repository holds POST.json at its root naming the X post that
// carries the meme. This program copies POST.json into the output
// directory, byte for byte. That is all it has to do: the house reads
// the post itself and scores its likes, reposts and quotes.
//
// No network, no wall clock, no files outside the repository, so the
// two grading runs write the same bytes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Anchor relative paths at this script's own directory, not the process
// working directory, so the program works wherever the grader runs it
// from. Absolute env values pass through unchanged.
const here = dirname(fileURLToPath(import.meta.url));
const botDir = resolve(here, process.env.MAKEFUN_BOT_DIR ?? ".");
const outDir = resolve(here, process.env.MAKEFUN_OUTPUT_DIR ?? "out");

const source = join(botDir, "POST.json");
if (!existsSync(source)) {
  console.error(`main.ts: POST.json not found in ${botDir}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
