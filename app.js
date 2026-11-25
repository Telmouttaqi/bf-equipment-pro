const $ = (selector) => document.querySelector(selector);
const products = $("#products");
const search = $("#search");
const category = $("#category");
const productDialog = $("#product-dialog");
const quoteDialog = $("#quote-dialog");
const quoteItems = $("#quote-items");
const quoteForm = $("#quote-form");
const quoteStatus = $("#quote-status");
const byId = new Map(catalogue.map((product) => [product.id, product]));
const selection = new Map();
const storageKey = "bf-devis-v1";
try {
  const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (Array.isArray(stored)) {
    for (const entry of stored) {
      if (!Array.isArray(entry)) continue;
      const [id, amount] = entry;
      if (byId.has(id) && Number.isInteger(amount) && amount > 0) selection.set(id, amount);
    }
  }
} catch {
  // Le devis reste utilisable quand le stockage du navigateur est indisponible.
}

function element(tag, content, className) {
  const node = document.createElement(tag);
  if (content) node.textContent = content;
  if (className) node.className = className;
  return node;
}

function action(text, className, handler) {
  const node = element("button", text, className);
  node.type = "button";
  node.addEventListener("click", handler);
  return node;
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-z0-9]+/g, " ").trim();
}

const categories = [...new Set(catalogue.map((product) => product.category))].sort((a,b) => a.localeCompare(b, "fr"));
for (const name of categories) category.add(new Option(name, name));

function renderCatalogue() {
  const terms = normalize(search.value).split(" ").filter(Boolean);
  const matching = catalogue.filter((product) => {
    const index = normalize([product.name, product.ref, product.category, product.description, product.searchAliases].join(" "));
    return (!category.value || product.category === category.value) && terms.every((term) => index.includes(term));
  });
  const count = matching.length;
  $("#result-count").textContent = count === 0 ? "Aucun produit trouvé" : `${count} produit${count > 1 ? "s" : ""}`;
  $("#reset-filters").hidden = !search.value && !category.value;
  products.replaceChildren(...matching.map((product, index) => {
    const card = element("article", "", "card");
    const photo = element("img", "", "product-photo");
    photo.src = product.photo;
    photo.alt = product.name;
    if (index >= 4) photo.loading = "lazy";
    const body = element("div", "", "card-body");
    const actions = element("div", "", "card-actions");
    const details = action("Voir la fiche", "button neutral", () => showProduct(product));
    details.setAttribute("aria-label", `Voir la fiche : ${product.name}`);
    const add = action("Ajouter à la commande", "button dark", () => addProduct(product));
    add.setAttribute("aria-label", `Ajouter à la commande : ${product.name}`);
    actions.append(details, add);
    body.append(element("p", product.category, "meta"), element("h3", product.name));
    if (product.ref) body.append(element("p", `Réf. ${product.ref}`, "meta"));
    body.append(actions);
    card.append(photo, body);
    return card;
  }));
}

function showProduct(product) {
  $("#product-title").textContent = product.name;
  const photo = element("img");
  photo.src = product.photo;
  photo.alt = product.name;
  const actions = element("div", "", "detail-actions");
  if (product.file) {
    const documentLink = element("a", product.file.endsWith(".pdf") ? "Consulter la fiche technique (PDF)" : "Consulter la fiche technique (image)", "button neutral");
    documentLink.href = product.file;
    documentLink.target = "_blank";
    documentLink.rel = "noopener";
    actions.append(documentLink);
  }
  actions.append(action("Ajouter à la commande", "button dark", () => {
    productDialog.close();
    addProduct(product);
  }));
  $("#product-detail").replaceChildren(photo, element("p", product.ref ? `${product.category} · Réf. ${product.ref}` : product.category, "meta"), element("p", product.description), actions);
  productDialog.showModal();
}

function saveSelection() {
  $("#quote-count").textContent = String(selection.size);
  try {
    localStorage.setItem(storageKey, JSON.stringify([...selection]));
  } catch {
    // Le navigateur peut interdire le stockage local.
  }
}

let noticeTimer;
function addProduct(product) {
  selection.set(product.id, Math.min((selection.get(product.id) || 0) + 1, 99999));
  saveSelection();
  const notice = $("#notice");
  notice.textContent = `${product.name} · quantité ${selection.get(product.id)}`;
  notice.hidden = false;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => { notice.hidden = true; }, 2700);
}

function renderQuote() {
  if (!selection.size) {
    quoteItems.replaceChildren(element("p", "Aucun produit sélectionné. Décrivez votre projet ci-dessous ou ajoutez des produits depuis le catalogue."));
    return;
  }
  quoteItems.replaceChildren(...[...selection].map(([id, amount]) => {
    const product = byId.get(id);
    const row = element("div", "", "quote-row");
    const summary = element("div", "", "quote-product");
    const photo = element("img", "", "quote-thumbnail");
    photo.src = product.photo;
    photo.alt = "";
    photo.width = 56;
    photo.height = 56;
    photo.loading = "lazy";
    const copy = element("div");
    copy.append(element("strong", product.name));
    if (product.ref) copy.append(element("p", `Réf. ${product.ref}`, "meta"));
    summary.append(photo, copy);
    const label = element("label", "Quantité");
    const input = element("input");
    input.type = "number";
    input.min = "1";
    input.max = "99999";
    input.value = String(amount);
    input.setAttribute("aria-label", `Quantité : ${product.name}`);
    input.addEventListener("change", () => {
      const quantity = Math.max(1, Math.min(Math.round(input.valueAsNumber) || 1, 99999));
      input.value = String(quantity);
      selection.set(id, quantity);
      saveSelection();
      quoteStatus.textContent = "";
    });
    label.append(input);
    const remove = action("Retirer", "text-button", () => {
      selection.delete(id);
      saveSelection();
      renderQuote();
      quoteStatus.textContent = "";
      (quoteItems.querySelector("button") || quoteForm.elements.nom).focus();
    });
    remove.setAttribute("aria-label", `Retirer : ${product.name}`);
    row.append(summary, label, remove);
    return row;
  }));
}

search.addEventListener("input", renderCatalogue);
category.addEventListener("change", renderCatalogue);
$("#reset-filters").addEventListener("click", () => {
  search.value = "";
  category.value = "";
  renderCatalogue();
  search.focus();
});
function openOrder() {
  renderQuote();
  quoteStatus.textContent = "";
  quoteDialog.showModal();
}
$("#open-quote").addEventListener("click", openOrder);
$("#footer-order").addEventListener("click", openOrder);
$("#email-contact").addEventListener("click", openOrder);
$("#whatsapp-contact").addEventListener("click", openOrder);

quoteForm.addEventListener("input", () => {
  quoteStatus.textContent = "";
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(quoteForm);
  const name = fields.get("nom").trim();
  const phone = fields.get("telephone").trim();
  if (!quoteForm.reportValidity()) return;
  if (!name) {
    quoteStatus.textContent = "Saisissez votre nom.";
    quoteForm.elements.nom.focus();
    return;
  }
  const phoneDigits = phone.replace(/\D/g, "");
  if (!/^\+?[\d().\s-]+$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    quoteStatus.textContent = "Saisissez un numéro de téléphone valide (7 à 15 chiffres).";
    quoteForm.elements.telephone.focus();
    return;
  }
  const need = fields.get("besoin").trim();
  if (!need && !selection.size) {
    quoteStatus.textContent = "Sélectionnez un produit ou décrivez votre besoin.";
    quoteForm.elements.besoin.focus();
    return;
  }
  const lines = ["Bonjour BF Equipment PRO,", "Je souhaite vous envoyer une demande de commande.", ""];
  for (const [field, label] of [["nom", "Nom"], ["entreprise", "Entreprise"], ["email", "E-mail"], ["telephone", "Téléphone"]]) {
    const value = fields.get(field).trim();
    if (value) lines.push(`${label} : ${value}`);
  }
  if (selection.size) {
    lines.push("", "Produits");
    for (const [id, quantity] of selection) {
      const product = byId.get(id);
      const reference = product.ref ? ` | Réf. ${product.ref}` : "";
      lines.push(`- ${product.name}${reference} | Quantité : ${quantity}`);
    }
  }
  if (need) lines.push("", "Besoin", need);
  const message = lines.join("\n");
  if (event.submitter?.value === "email") {
    const subject = encodeURIComponent("Demande de commande — BF Equipment PRO");
    const body = encodeURIComponent(lines.join("\r\n"));
    window.location.assign(`${$("#email-contact").dataset.destination}?subject=${subject}&body=${body}`);
    return;
  }
  const url = new URL($("#whatsapp-contact").dataset.destination);
  url.searchParams.set("text", message);
  window.location.assign(url.href);
});

const inspection = $("#inspection");
const checks = [...inspection.querySelectorAll("input[type=checkbox]")];
function updateChecks() {
  const count = checks.filter((check) => check.checked).length;
  $("#check-progress").value = `${count} sur ${checks.length} vérifiés`;
}
inspection.addEventListener("change", updateChecks);
inspection.addEventListener("reset", () => requestAnimationFrame(updateChecks));
window.addEventListener("pageshow", updateChecks);
saveSelection();
renderCatalogue();


const photoControls = $(".hero-controls");
const photoChoices = [...photoControls.querySelectorAll(".slide-choice")];
const heroPhotos = [...document.querySelectorAll(".hero-photo")];
const photoToggle = $(".slide-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let activePhoto = 0;
let autoplay = !reducedMotion.matches;
let photoTimer;

function showPhoto(index) {
  heroPhotos[activePhoto].classList.remove("active");
  photoChoices[activePhoto].setAttribute("aria-pressed", "false");
  activePhoto = index;
  heroPhotos[activePhoto].classList.add("active");
  photoChoices[activePhoto].setAttribute("aria-pressed", "true");
}

function schedulePhotos() {
  clearInterval(photoTimer);
  photoToggle.textContent = autoplay ? "Pause" : "Lecture";
  photoToggle.setAttribute("aria-label", autoplay ? "Mettre les photos en pause" : "Relancer le défilement des photos");
  if (autoplay && !document.hidden) {
    photoTimer = setInterval(() => showPhoto((activePhoto + 1) % heroPhotos.length), 5500);
  }
}

photoChoices.forEach((button, index) => {
  button.addEventListener("click", () => {
    autoplay = false;
    showPhoto(index);
    schedulePhotos();
  });
});
photoToggle.addEventListener("click", () => {
  autoplay = !autoplay;
  schedulePhotos();
});
reducedMotion.addEventListener("change", () => {
  autoplay = !reducedMotion.matches;
  schedulePhotos();
});
document.addEventListener("visibilitychange", schedulePhotos);
photoControls.hidden = false;
schedulePhotos();
