/**
 * Gera public/og.png (imagem de compartilhamento) a partir de tools/og.html.
 * Uso: npm run og
 *
 * Usa o Chrome ou o Edge já instalados na máquina — sem baixar navegador.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const chrome = CANDIDATES.find((path) => existsSync(path));

if (!chrome) {
  console.error(
    "Chrome não encontrado. Defina CHROME_PATH com o caminho do executável e rode de novo.",
  );
  process.exit(1);
}

const source = pathToFileURL(resolve("tools/og.html")).href;
const out = resolve("public/og.png");

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--virtual-time-budget=8000",
  "--window-size=1200,630",
  `--screenshot=${out}`,
  source,
]);

console.log(`public/og.png atualizada (1200x630) — fonte: tools/og.html`);
