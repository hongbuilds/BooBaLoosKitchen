
# BooBaLoo's Kitchen

This is a personal site with a list of recipes that Melissa and I like.  
This will also serve as my learning to design a clean and easy-to-read food/recipe site template.

### MVP

- Home page  
- Food Recipes  
- Drink Recipes  
- About  

---

### Ideal Version

- Home page  
- Food Recipes  
- Drink Recipes  
- Dessert Recipes  
- Other Categories  
- Add cooked date, and time it took to prepare  
- About  
- Search option/randomize select  
- Contact/Suggestions  

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) installed (version 18 or higher; CI builds on Node 22)
- [Git](https://git-scm.com/) installed (optional but helpful)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/leehongc/BooBaLoosKitchen.git
   cd BooBaLoosKitchen
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

4. To build the project for production:
   ```bash
   npm run build
   ```

5. (Optional) Preview the production build locally:
   ```bash
   npm run preview
   ```

6. To deploy this site to GitHub pages:
   ```bash
   npm run deploy
   ```
### Folder Structure
- `src/` - Contains the source code (components, styles, assets, etc.)
- `public/` - Static assets available in the build
- `vite.config.js` - Vite configuration file

---

## About security alerts

GitHub will periodically flag "known security vulnerabilities" against this repo. Most of
them don't matter here, and it's worth knowing why before reacting to a red banner.

Dependencies split into two groups:

- **Ships to visitors' browsers** — `react`, `react-dom`, `react-router-dom`,
  `@radix-ui/*`, `lucide-react`, `@heroicons/react`. These are listed under
  `dependencies` in `package.json`. Alerts here are real and worth fixing promptly.
- **Runs only at build time** — `vite`, `eslint`, `rollup`, `@babel/*`, `postcss`,
  `tailwindcss`, and their many helpers. These are listed under `devDependencies`.
  This site deploys as static files to GitHub Pages, so no build tool is ever running
  anywhere a stranger can reach. Alerts here are not exploitable against the live site.

To see only what actually affects visitors:

```bash
npm audit --omit=dev
```

That's the number to care about. Plain `npm audit` includes the build tooling and will
usually look scarier than the situation warrants.

Most alerts resolve with:

```bash
npm audit fix
```

Dependabot (`.github/dependabot.yml`) also opens one grouped pull request per month with
routine updates, and CI (`.github/workflows/ci.yml`) builds every push so a bad update
can't land unnoticed. New advisories get published against healthy packages constantly —
that's normal, not a sign something is wrong with this project.

---
