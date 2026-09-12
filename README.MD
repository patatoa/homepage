# Homepage

This is a personal homepage. This contains a categeorized list of my most frequently visited sites. There are seeperate pages for work and home. This is a server-side rendered page using Nuxt.

## History

This was once SSR with Nuxt, but cold server starts were too slow for this to be useful. This is now re-written using Astro to be static.

## Codex usage widget

The home page reads live, sanitized Codex allowance data from the Mac Mini over
Tailscale. Its dashboard URL is supplied through the `CODEX_USAGE` GitHub
Actions secret at build time. Devices outside the tailnet see a graceful
unavailable state while the rest of the static homepage continues to work.
