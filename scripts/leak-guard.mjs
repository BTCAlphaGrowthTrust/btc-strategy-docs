// PUBLIC LEAK GUARD for the docs. Fails if any real id / mechanism word appears in the
// authored docs (docs/**/*.mdx), the checked-in OpenAPI spec, or the built site (build/).
// Run: node scripts/leak-guard.mjs
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const FORBIDDEN = [
  /atg[_:]\w+/i,
  /\b\d+h_ema\b/i, /\bgx_\w+/i, /\brss_\w+/i, /\bosc_\w+/i, /\bema_\w+/i, /\bsmma\b/i,
  /\bEMA\b/, /\bRSS\b/, /\bGX\b/, /\bOSC\b/, /\bSMMA\b/,
  /golden[ -]?cross/i, /ribbon/i, /\bsqueeze\b/i, /stochastic/i, /oscillator/i,
  /\bSAR\b/, /parabolic/i, /50\/20\/200/, /EMA[- ]?trend/i,
];
const SCAN = [
  { dir: "docs", exts: [".mdx", ".md"] },
  { dir: "api-reference", exts: [".json"] },
  { dir: "build", exts: [".html"] },
];

function* walk(dir, exts) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* walk(p, exts);
    else if (exts.some((x) => p.endsWith(x))) yield p;
  }
}

const hits = [];
for (const { dir, exts } of SCAN)
  for (const f of walk(dir, exts)) {
    const text = readFileSync(f, "utf-8");
    for (const rx of FORBIDDEN) {
      const m = text.match(rx);
      if (m) hits.push(`${f}: ${m[0]}`);
    }
  }

if (hits.length) {
  console.error(`LEAK GUARD FAILED — ${hits.length} hit(s):`);
  for (const h of [...new Set(hits)].slice(0, 40)) console.error("  " + h);
  process.exit(1);
}
console.log("LEAK GUARD PASSED — no real id / mechanism word in docs / openapi / build.");
