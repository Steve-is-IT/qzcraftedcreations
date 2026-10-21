// Renders the shop from products.json and the contact links from contact.json.
// To update the shop, edit those two files. No code changes needed.

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
let products = [];

function money(n) {
  return "$" + Number(n).toFixed(2);
}

function render(filter) {
  const items = products.filter(p => filter === "all" || p.category === filter);
  grid.innerHTML = "";
  empty.hidden = items.length > 0;
  for (const p of items) {
    const card = document.createElement("article");
    card.className = "card";
    const img = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
      : `<div class="placeholder">Photo coming soon</div>`;
    card.innerHTML = `
      ${img}
      <div class="card-body">
        <span class="tag">${p.category}</span>
        <h3>${p.name}</h3>
        ${p.details ? `<p class="meta">${p.details}</p>` : ""}
        ${p.sold ? `<span class="sold">Sold</span>` : `<span class="price">${money(p.price)}</span>`}
      </div>`;
    grid.appendChild(card);
  }
}

document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    render(btn.dataset.filter);
  });
});

fetch("products.json")
  .then(r => r.json())
  .then(data => { products = data; render("all"); })
  .catch(() => { empty.textContent = "Could not load the shop. Try again later."; empty.hidden = false; });

fetch("contact.json")
  .then(r => r.json())
  .then(links => {
    const box = document.getElementById("contact-links");
    for (const l of links) {
      const a = document.createElement("a");
      a.href = l.url;
      a.textContent = l.label;
      if (l.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      box.appendChild(a);
    }
  })
  .catch(() => {});

document.getElementById("year").textContent = new Date().getFullYear();
