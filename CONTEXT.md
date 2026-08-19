# Project context — qilmegd.com

Personal portfolio site. Read this before making architectural suggestions.

## Where things stand

- **Repo:** this one. Currently a single hand-written `index.html`, nothing else.
- **Domain:** qilmegd.com. Mid-transfer from Cargo to Porkbun, completes ~24 Aug 2026.
  DNS is not yet pointed anywhere new — that's the last step, deliberately.
- **Hosting:** Vercel, deploying from this repo. Not yet connected to the custom domain;
  currently reachable only at the `.vercel.app` URL.
- **Migrating off:** Cargo (hosted site builder). Content is being rebuilt from scratch —
  there was no export path, so nothing is being ported.

## Decisions already made

**Astro** is the intended framework, if/when the site outgrows plain HTML. Chosen
specifically for its adapter model: `@astrojs/node` and `@astrojs/vercel` mean the
deploy target can change without a rewrite. Don't suggest Next.js — it was considered
and passed over for being more Vercel-shaped.

**Vercel** over GitHub Pages, because Pages can't run a Node server and the option
needs to stay open.

**Porkbun** over Cloudflare Registrar, because it keeps registration and DNS separable —
nameservers can be delegated elsewhere later without moving the registration.

**MongoDB** if a database is ever needed. May not be needed at all.

## Guiding constraint: portability

The long-term goal is the option to **self-host on a personal VPS** rather than stay on
managed platforms indefinitely. Vercel is a convenience, not a commitment. Concretely:

- Keep platform-specific primitives (Vercel KV, edge middleware, etc.) out of the code.
  If one is genuinely needed, isolate it behind a single module so it's one file to replace.
- All database access goes in one module. Plain driver + connection string, no
  Atlas-specific features.
- Add a `Dockerfile` once there's a real Node app, even while deploying to Vercel.
  If it runs in a container locally, it runs on any rented box.
- Node is wanted as a **build tool** (bundling, static generation). A running backend
  server is a maybe, not a plan.

## Immediate tasks

1. Get the current `index.html` deploying cleanly on Vercel.
2. Decide whether to stay hand-written or scaffold Astro. Hand-written HTML/CSS is an
   acceptable permanent answer for a small portfolio — don't add tooling by default.
3. Build out the actual portfolio content.
4. Only then: connect the custom domain.

## DNS — do not guess values

When the time comes to point qilmegd.com at Vercel:

- Add **both** `qilmegd.com` and `www.qilmegd.com` in Vercel's Project Settings → Domains,
  and set one to redirect to the other.
- Vercel issues **per-project** DNS values now (e.g. `abc123.vercel-dns-017.com`), not the
  old universal `cname.vercel-dns.com` / `76.76.21.21`. Read the exact records off the
  project's own Domains page. Any value from a tutorial or from memory is likely stale.
- In Porkbun there are currently five leftover GitHub Pages records (four A on the apex,
  one `www` CNAME). **Delete these** when adding Vercel's — one destination per name, or
  visitors get split between hosts.
- Keep TTL at 600 during any cutover.

## Out of scope

Anything involving the domain transfer itself, the Porkbun account, or Cargo. That's
handled outside this repo.
