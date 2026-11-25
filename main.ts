// Make the AI Judge Feel Proud: A Family Scene
// Writes one original two-line family scene (<=280 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// Deterministic: no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "Dad spent all afternoon fixing the wobbly kitchen table.\n" +
  "At dinner he tapped it once, grinned at all of us, and said, 'One screw. Thirty years. Worth it.' Mom raised her glass to the table.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
