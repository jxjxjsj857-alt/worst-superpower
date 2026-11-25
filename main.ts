// Worst Superpower entry for make.fun.
// Writes one useless superpower (115 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I can teleport exactly three inches to the left, once a year, on a Tuesday, and I always land facing the wrong way.";

if (line.length > 140) throw new Error(`entry is ${line.length} characters, over the 140 limit`);
if (line.trim().length === 0) throw new Error("entry is blank");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} characters to /output/entry.txt`);
