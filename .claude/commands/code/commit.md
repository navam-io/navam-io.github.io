1. Run `git add .`
2. Create an appropriate commit message
3. Commit all changes to git
4. Push to BOTH master and main branches to ensure GitHub Pages deployment:
   - First push to master: `git push origin master`
   - Then push master to main: `git push origin master:main`

CRITICAL: GitHub Pages deploys from the `main` branch only. Always push to both branches to ensure the site updates.