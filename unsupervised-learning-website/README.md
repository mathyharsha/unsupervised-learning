# Unsupervised Learning — Informal Notes

A static, mobile-friendly webpage converted from Harsha Vardhan Tetali's LaTeX notes.

**Intended URL:** https://mathyharsha.github.io/unsupervised-learning/

## Included

- All sections of the source LaTeX notes, including equations and illustrations.
- Light copyediting of explanatory prose; the mathematical derivations have not been independently proofread or verified.
- Links to the original and copyedited LaTeX source (`latex/original-main.tex` and `latex/main.tex`).
- Accessible table of contents, clickable equation and figure references, and a light/dark theme.
- No build system: GitHub Pages can publish these files directly.

## Publish using a new GitHub repository (recommended)

1. Create a **public** GitHub repository called `unsupervised-learning` under `mathyharsha`.
2. Upload **all files and folders in this directory**, with `index.html` at the top level (not inside another directory).
3. In your new repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Choose `main` and `/(root)` and click **Save**.
6. Once deployed, open https://mathyharsha.github.io/unsupervised-learning/.

This method does not modify the existing `mathyharsha.github.io` repository or homepage.

## Alternative: put it inside the existing homepage repository

Upload all files to the `unsupervised-learning/` directory of your `mathyharsha.github.io` repository. Make sure that repository's GitHub Pages setup already publishes the branch containing that directory. This also gives the URL above, but may require adapting the setup if the current site is built using a framework or a GitHub Actions workflow.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/ in a browser. MathJax and the optional web fonts require an internet connection.

## Updating the notes

Edit `latex/main.tex` and regenerate HTML with Pandoc, then reapply the website layout; or make small prose updates directly in `index.html`. The version here is a ready-to-publish static export.

## Technical notes

- Math is rendered using MathJax loaded from jsDelivr.
- Figure and equation IDs are local to this website; equation tags follow the numbering from the original lecture notes (31.*, 40.*, 41.*).
- `.nojekyll` prevents GitHub Pages' default Jekyll processing from interfering with the static files.
