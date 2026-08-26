/**
 * Lista tudo que ainda falta preencher no conteúdo do site.
 * Uso: npm run pendencias
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dir = "src/content";
const marker = /\{\{([^}]+)\}\}/g;
let total = 0;

// types.ts só descreve o formato — os textos ficam em pt.ts e en.ts.
const contentFiles = readdirSync(dir).filter(
  (f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f),
);

for (const file of contentFiles) {
  const lines = readFileSync(join(dir, file), "utf8").split("\n");
  const hits = [];

  lines.forEach((line, i) => {
    for (const match of line.matchAll(marker)) {
      hits.push(`  ${dir}/${file}:${i + 1}  ${match[1].trim()}`);
      total += 1;
    }
  });

  if (hits.length) {
    console.log(`\n${file} — ${hits.length} pendência(s)`);
    console.log(hits.join("\n"));
  }
}

const site = readFileSync("src/site.ts", "utf8");
const empty = ["email", "resumePdf"].filter((key) =>
  new RegExp(`${key}:\\s*""`).test(site),
);

if (empty.length) {
  console.log(`\nsite.ts — ${empty.length} campo(s) vazio(s)`);
  empty.forEach((key) => console.log(`  src/site.ts  ${key}`));
  total += empty.length;
}

console.log(
  total === 0
    ? "\nNada pendente. O site pode ir ao ar."
    : `\nTotal: ${total} item(ns) a preencher antes de publicar.`,
);
