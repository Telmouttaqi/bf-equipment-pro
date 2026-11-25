const { mkdirSync, readFileSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const site = process.argv[2] || "dist";
const homepage = readFileSync(join(site, "index.html"), "utf8");
const catalogueSource = readFileSync(join(site, "catalogue.js"), "utf8").trim();
const products = JSON.parse(catalogueSource.replace(/^const catalogue = /, "").replace(/;$/, ""));
const escape = (value) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

const header = homepage.slice(homepage.indexOf("<header"), homepage.indexOf('<main id="contenu">'));
const footer = homepage.slice(homepage.indexOf('<footer'), homepage.indexOf("</footer>") + "</footer>".length);
const checkout = homepage.slice(homepage.indexOf('<dialog id="quote-dialog"'));
const directory = join(site, "produits");
mkdirSync(directory, { recursive: true });
for (const product of products) {
  if (!/^[a-z0-9-]+$/.test(product.id)) throw new Error(`Invalid product ID: ${product.id}`);
  const path = `produits/${product.id}.html`;
  const description = escape(product.description);
  const name = escape(product.name);
  const category = escape(product.category);
  const head = homepage.slice(0, homepage.indexOf("</head>"))
    .replace("<head>", '<head>\n<base href="../">')
    .replace(/<title>.*?<\/title>/s, `<title>${name} | BF Equipment PRO</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}">`)
    .replace(/^[ \t]*<link[^>]+rel="canonical"[^>]*>\s*$/gm, "")
    .replace(/^[ \t]*<meta[^>]+property="og:[^"]+"[^>]*>\s*$/gm, "")
    .replace(/^[ \t]*<meta[^>]+name="twitter:[^"]+"[^>]*>\s*$/gm, "");
  const documentLink = product.file
    ? `<a class="button neutral" href="${escape(product.file)}" target="_blank" rel="noopener">Consulter la fiche technique (${product.file.endsWith(".pdf") ? "PDF" : "image"})</a>`
    : "";
  const family = products.filter((item) => item.category === product.category);
  const position = family.indexOf(product);
  const related = family.slice(position + 1).concat(family.slice(0, position)).slice(0, 4);
  const familyLink = `index.html?categorie=${encodeURIComponent(product.category)}#catalogue`;
  const relatedSection = related.length ? `
<section class="product-family" aria-labelledby="family-title">
<h2 id="family-title">Dans la même famille</h2>
<div class="products product-family-grid">
${related.map((item) => `<a class="card product-family-card" href="produits/${encodeURIComponent(item.id)}.html">
<img class="product-photo" src="${escape(item.photo)}" alt="" loading="lazy" decoding="async">
<div class="card-body">
${item.ref ? `<p class="meta">Réf. ${escape(item.ref)}</p>` : ""}
<h3>${escape(item.name)}</h3>
</div>
</a>`).join("\n")}
</div>
<a class="button neutral" href="${familyLink}">Voir toute la famille</a>
</section>` : "";
  const body = `</head>
<body>
<a class="skip" href="${path}#contenu">Aller au contenu</a>
${header}<main class="wrap product-page" id="contenu">
<nav class="product-crumbs" aria-label="Fil d’Ariane"><a href="index.html#catalogue">Catalogue</a><span aria-current="page">${name}</span></nav>
<div class="product-layout">
<img class="product-page-photo" src="${escape(product.photo)}" alt="${name}" fetchpriority="high">
<div class="product-page-summary">
<p class="kicker">${category}</p>
<h1>${name}</h1>
${product.ref ? `<p class="meta">Réf. ${escape(product.ref)}</p>` : ""}
<p>${description}</p>
<div class="detail-actions">
<button class="button dark" id="add-page-product" data-product-id="${product.id}" type="button">Ajouter à la commande</button>
${documentLink}
</div>
</div>
</div>
${relatedSection}
</main>
${footer.replace('href="#accueil">Retour en haut', `href="${path}#accueil">Retour en haut`)}
${checkout}`;
  writeFileSync(join(site, path), head + body);
}
console.log(`${products.length} fiches produits générées.`);
