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
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
