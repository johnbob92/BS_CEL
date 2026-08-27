#!/usr/bin/env node
/**
 * Turn a Next.js static export (`out/`) into a fully offline, double-click-openable
 * site:
 *   - rewrites absolute asset paths (/_next, /images, favicon, svgs) to relative
 *   - rewrites internal route links (/services -> services.html, depth-aware)
 *   - reveals framer-motion content that is server-rendered hidden (opacity:0)
 *   - removes the Next.js runtime scripts so navigation is plain full-page loads
 *   - injects a tiny vanilla theme toggle so the light/dark button still works
 *   - fixes url(/_next/static/...) references inside CSS chunks
 *
 * Usage: node make-offline.mjs <dir>   (transforms the directory in place)
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || "out");

const ASSET_PREFIXES = ["_next", "images"];

const toggleScript = `<script>(function(){function cur(){try{return localStorage.getItem('celtech-theme')||'auto'}catch(e){return 'auto'}}function night(){var h=new Date().getHours();return h>=19||h<7}function apply(t){document.documentElement.classList.toggle('dark',t==='dark'||(t==='auto'&&night()));}apply(cur());document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('button[aria-label^="Theme"]'):null;if(!b)return;var o=['auto','light','dark'];var n=o[(o.indexOf(cur())+1)%3];try{localStorage.setItem('celtech-theme',n)}catch(e){}apply(n);});})();</script>`;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.name.endsWith(".html")) {
      await transformHtml(full);
    } else if (entry.name.endsWith(".css")) {
      await transformCss(full);
    }
  }
}

function relPrefix(fileAbs) {
  const rel = path.relative(root, fileAbs);
  const dir = path.dirname(rel);
  const depth = dir === "." ? 0 : dir.split(path.sep).length;
  return "../".repeat(depth);
}

async function transformHtml(file) {
  let html = await fs.readFile(file, "utf8");
  const prefix = relPrefix(file);

  // 1) Absolute asset dirs -> relative
  for (const p of ASSET_PREFIXES) {
    html = html.replaceAll(`"/${p}/`, `"${prefix}${p}/`);
  }

  // 2) Any root-absolute file reference WITH an extension (favicon.ico,
  //    icon.svg, *.png, *.woff2, etc.) -> relative. Route links have no
  //    file extension and are handled in step 3.
  html = html.replace(
    /(href|src)="\/([^"?#]+\.[a-z0-9]+)((?:\?[^"]*)?)"/gi,
    (m, attr, p, q = "") => `${attr}="${prefix}${p}${q || ""}"`,
  );

  // 3) Internal route links (extensionless) -> relative .html (depth-aware)
  html = html.replace(
    /href="(\/[^"?#]*)((?:[?#][^"]*)?)"/g,
    (m, route, suffix = "") => {
      if (route.startsWith("/_next") || route.startsWith("/images")) return m;
      if (/\.[a-z0-9]+$/i.test(route)) return m; // skip files with extensions
      const target = route === "/" ? "index.html" : route.slice(1) + ".html";
      return `href="${prefix}${target}${suffix || ""}"`;
    },
  );

  // 4) Reveal server-rendered hidden content and drop entry transforms
  html = html.replace(/opacity:0([;"])/g, "opacity:1$1");
  html = html.replace(/transform:(?:translate|scale|rotate)[^;"']*;?/g, "");

  // 5) Remove Next runtime scripts + script preloads/prefetches
  html = html.replace(
    /<script\b[^>]*\bsrc="[^"]*_next[^"]*"[^>]*><\/script>/g,
    "",
  );
  html = html.replace(/<link\b[^>]*\bas="script"[^>]*>/g, "");
  html = html.replace(/<link\b[^>]*\brel="prefetch"[^>]*>/g, "");

  // 6) Inject the vanilla theme toggle
  html = html.replace("</body>", `${toggleScript}</body>`);

  await fs.writeFile(file, html);
}

async function transformCss(file) {
  let css = await fs.readFile(file, "utf8");
  // CSS chunks live in _next/static/chunks; media in _next/static/, so /_next/static/ -> ../
  css = css
    .replaceAll("url(/_next/static/", "url(../")
    .replaceAll('url("/_next/static/', 'url("../')
    .replaceAll("url('/_next/static/", "url('../");
  await fs.writeFile(file, css);
}

await walk(root);
console.log("Offline transform complete:", root);
