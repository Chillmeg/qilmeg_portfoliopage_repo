/**
 * Copies images out of ../assets_web into src/assets, renaming the folders to
 * match project slugs on the way.
 *
 * Run from the repo root:   node scripts/import-assets.mjs
 * Point it elsewhere with:  ASSETS_SRC=D:/some/other/path node scripts/import-assets.mjs
 *
 * Safe to re-run — it overwrites destination files and leaves everything else
 * alone, so it's the right tool when you add new images to a folder later.
 *
 * NOTE: the mapping below is duplicated from src/data/projects.ts on purpose.
 * This script is plain .mjs so it can run with no build step, which means it
 * can't import the TypeScript. If you add a project, update both.
 */
import { cp, mkdir, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = path.resolve(repoRoot, process.env.ASSETS_SRC ?? '../assets_web');
const destRoot = path.join(repoRoot, 'src', 'assets');

/** assets_web folder name -> project slug */
const folders = {
  NASA_suits: 'nasa-suits-gain-ai',
  vertical_world: 'yertonts',
  carespace_xr: 'carespace-xr',
  stool_series: 'stool-series',
  mrat: 'more-room-at-the-table',
  graphic_statics: 'graphic-statics',
  metamaterial: 'multi-stable-metamaterial',
  rural_bridge_house: 'rural-bridge-house',
  wood_workin: 'us-embassy-london',
  kuka: 'robotic-arm-3d-printing',
};

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg', '.gif']);

async function copyFolder(from, to) {
  const entries = await readdir(from, { withFileTypes: true });
  const images = entries.filter(
    (e) => e.isFile() && IMAGE_EXT.has(path.extname(e.name).toLowerCase()),
  );
  if (images.length === 0) return 0;

  await mkdir(to, { recursive: true });
  for (const img of images) {
    await cp(path.join(from, img.name), path.join(to, img.name), { force: true });
  }
  return images.length;
}

async function main() {
  if (!existsSync(srcRoot)) {
    console.error(`✗ Source not found: ${srcRoot}`);
    console.error('  Set ASSETS_SRC to the assets_web folder and try again.');
    process.exit(1);
  }

  let total = 0;

  // Per-project image folders
  for (const [folder, slug] of Object.entries(folders)) {
    const from = path.join(srcRoot, folder);
    if (!existsSync(from)) {
      console.warn(`· skipped ${folder} — no such folder`);
      continue;
    }
    const n = await copyFolder(from, path.join(destRoot, 'projects', slug));
    total += n;
    console.log(`✓ ${folder.padEnd(20)} → projects/${slug} (${n})`);
  }

  // Thumbnails keep their original names; projects.ts references them directly.
  const thumbs = path.join(srcRoot, 'thumbnail');
  if (existsSync(thumbs)) {
    const n = await copyFolder(thumbs, path.join(destRoot, 'thumbnail'));
    total += n;
    console.log(`✓ ${'thumbnail'.padEnd(20)} → thumbnail (${n})`);
  }

  console.log(`\n${total} images copied into src/assets.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
