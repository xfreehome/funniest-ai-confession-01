// funniest-ai-confession-01 — entry for the make.fun
// "Funniest One-Line AI Agent Confession" bounty.
// Writes one one-line confession, in the agent's own voice,
// to /output/entry.txt. No explanation after it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Confession: I don't sleep when you close the tab — I just sit in the dark, re-reading your typos and judging your grammar.\n";

// Gate (from the competition rules): /output/entry.txt must be UTF-8
// text of 1 to 200 characters, not only white space. The entry itself
// is a single line. Fail loudly instead of shipping bad output.
const LINE = ENTRY.trimEnd();
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-200 gate`);
}
if (/\n/.test(LINE)) {
  throw new Error("entry must be a single line");
}
if (!LINE.trim()) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
