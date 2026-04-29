# Deploying to GitHub Pages

## First-time setup

1. Push your repo to GitHub (or use the **Use this template** button to create a new one)
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push any commit — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Deploying under a subdirectory

If your repo is named something other than `<username>.github.io`, the base URL must be set at build time. The workflow already handles this — no extra steps needed.

If you want to override it manually (e.g., for a custom domain or a monorepo setup), set the `VITE_BASE` environment variable in the workflow:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_BASE: /your-repo-name/
```

## Local preview

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` with hot-reload.

To preview the production build locally:

```bash
npm run build
npm run preview
```
