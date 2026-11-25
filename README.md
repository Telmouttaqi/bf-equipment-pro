# BF Equipment PRO

A static website with 96 product pages, related products, technical sheets and 30 refreshed catalog photos. The site runs with plain HTML, CSS and JavaScript.

## Run locally in VS Code

1. Extract the ZIP and open the folder containing `index.html` in VS Code.
2. Open **Terminal → New Terminal** and start a local server.

   ```bash
   python -m http.server 8000
   ```

   Use `python3` on macOS or Linux, or `py` on Windows, if your Python command differs.
3. Open [http://localhost:8000](http://localhost:8000).

## Deploy to your existing GitHub Pages site

1. In your local clone of [Telmouttaqi/bf-equipment-pro](https://github.com/Telmouttaqi/bf-equipment-pro), switch to `main` and pull the latest changes before copying the files.

   ```bash
   git switch main
   git pull --ff-only origin main
   ```

2. Copy the **contents** of the extracted folder into the root of your clone. Replace matching site files and merge the `assets`, `produits` and `scripts` folders. Include the hidden `.nojekyll` file. Preserve your `.git` directory and any existing `CNAME`.
3. In the clone's terminal, stage the website files and review the staged changes before committing.

   ```bash
   git add -- index.html style.css app.js catalogue.js assets produits scripts robots.txt .nojekyll README.md
   git diff --cached --stat
   git commit -m "Update BF Equipment PRO catalog"
   git push origin main
   ```

4. In GitHub, open **Settings → Pages**. Set the source to **Deploy from a branch**, with branch **main** and folder **/ (root)**. The deployment status is in **Actions**. Once it succeeds, use the link in **Settings → Pages** to open the site.

For another static host, select the folder containing `index.html` as the publish directory. Leave the build command blank.

## Edit the site later

- `index.html` contains the home page, contact details and opening hours.
- `style.css` controls the layout and branding.
- `catalogue.js` contains product names, descriptions, images and technical sheet links.
- `assets/produits/` holds the photos. `assets/fiches/` holds the technical documents.
- `produits/` contains the generated pages. After changing the catalog or shared home-page content, run `node scripts/generate-product-pages.cjs .` from the website root. Node.js is only needed to regenerate product pages.
