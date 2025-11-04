UVA DSA Website
================

This repository hosts the UVA DSA website. The application code lives in the `uva-dsa` folder and is a Next.js (React + TypeScript) app styled with Tailwind CSS.

Quick Start
-----------

1) Clone the repo

```bash
# HTTPS
git clone https://github.com/uva-dsa/uva-dsa.github.io.git

# or SSH
git clone git@github.com:uva-dsa/uva-dsa.github.io.git
```

2) Change into the app directory

```bash
cd uva-dsa.github.io/uva-dsa
```

3) Install dependencies (Node.js required; see prerequisites below)

```bash
npm install
```

4) Run the dev server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

Prerequisites
-------------

- Git
- Node.js (20 LTS recommended; >= 18.18 supported)
- npm (bundled with Node.js)

Verify your tools:

```bash
git --version
node -v
npm -v
```

Install Node.js
---------------

Windows
- Recommended: Install Node.js LTS using one of:
  - Winget: `winget install OpenJS.NodeJS.LTS`
  - Chocolatey: `choco install nodejs-lts`
  - Installer: download the LTS installer from nodejs.org and follow prompts
- After install, restart your terminal and verify `node -v` and `npm -v`.

macOS
- Using Homebrew (recommended):
  - `brew install node@20`
  - Optionally, set it as default: `brew link --force --overwrite node@20`
- Or use the macOS installer from nodejs.org.

Linux
- Using a package manager may provide older versions. Two common options:
  - Node Version Manager (nvm): install from nvm-sh and then run `nvm install --lts`.
  - NodeSource (Debian/Ubuntu): `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -` then `sudo apt-get install -y nodejs`.

Project Scripts (from `uva-dsa`)
--------------------------------

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build for production (outputs to .next)
npm run build

# Start production server (after build)
npm start

# Lint the codebase
npm run lint
```

Preview Production Build
------------------------

To preview the optimized build locally:

```bash
cd uva-dsa
npm run build
npm start
```

Open http://localhost:3000 to test the production server.

Repository Structure
--------------------

- `./` – Repo root (this README)
- `./uva-dsa` – Next.js application (source, config, scripts)
  - `src/` – App source code
  - `public/` – Static assets
  - `next.config.ts`, `tsconfig.json`, `tailwind.config.ts` – Project config

Troubleshooting
---------------

- Command not found: node or npm
  - Ensure Node.js is installed and your terminal restarted.
  - On macOS/Linux, confirm your PATH includes your Node installation.

- Node version errors when starting/building
  - Upgrade to Node 20 LTS (recommended) or >= 18.18.
  - If multiple Node versions are installed, use `nvm use --lts` (if using nvm).

- Port already in use (3000)
  - Stop the process using the port or run `PORT=3001 npm run dev`.

Contributing
------------

From the repo root, work inside `uva-dsa`. Use feature branches and open PRs. Run `npm run lint` and ensure the site starts locally before submitting changes.
