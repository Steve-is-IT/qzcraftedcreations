// Renders the shop from products.json and the contact links from contact.json.
// Both files are edited from the admin at /admin. No code changes needed.

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
let products = [];

function money(n) {
  return "$" + Number(n).toFixed(2);
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function buyButton(p) {
  if (p.sold) return `<span class="sold">Sold</span>`;
  if (p.stripe_link) {
    return `<a class="buy" href="${esc(p.stripe_link)}" target="_blank" rel="noopener">Buy now</a>`;
  }
  return `<a class="buy buy-alt" href="#contact">Message to buy</a>`;
}

function render(filter) {
  const items = products.filter(p => filter === "all" || p.category === filter);
  grid.innerHTML = "";
  empty.hidden = items.length > 0;
  for (const p of items) {
    const card = document.createElement("article");
    card.className = "card" + (p.sold ? " is-sold" : "");
    const img = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
      : `<div class="placeholder">Photo coming soon</div>`;
    card.innerHTML = `
      ${img}
      <div class="card-body">
        <span class="tag">${esc(p.category)}</span>
        <h3>${esc(p.name)}</h3>
        ${p.details ? `<p class="meta">${esc(p.details)}</p>` : ""}
        <div class="card-foot">
          ${p.sold ? "" : `<span class="price">${money(p.price)}</span>`}
          ${buyButton(p)}
        </div>
      </div>`;
    grid.appendChild(card);
  }
}

function select(filter) {
  document.querySelectorAll(".chip").forEach(b => b.classList.toggle("is-active", b.dataset.filter === filter));
  render(filter);
}

document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => select(btn.dataset.filter));
});

document.querySelectorAll("[data-jump]").forEach(a => {
  a.addEventListener("click", () => select(a.dataset.jump));
});

fetch("products.json", { cache: "no-cache" })
  .then(r => r.json())
  .then(data => { products = data.items || []; render("all"); })
  .catch(() => { empty.textContent = "Could not load the shop. Try again later."; empty.hidden = false; });

fetch("contact.json", { cache: "no-cache" })
  .then(r => r.json())
  .then(data => {
    const box = document.getElementById("contact-links");
    for (const l of data.links || []) {
      if (!l.url) continue;
      const a = document.createElement("a");
      a.href = l.url;
      a.textContent = l.label;
      if (l.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      box.appendChild(a);
    }
  })
  .catch(() => {});

document.getElementById("year").textContent = new Date().getFullYear();
