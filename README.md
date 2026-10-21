# QZ Crafted Creations

Static storefront for qzcraftedcreations.com, hosted on GitHub Pages.

## Updating the shop

Everything a seller needs to change lives in two files. Edit them on GitHub and the site updates within a minute or two.

- `products.json` lists every item. Each entry has `name`, `category` (`singles`, `sealed` or `crafted`), `details`, `price`, `image` and `sold`. Set `sold` to `true` to mark an item sold without removing it.
- `contact.json` lists the contact buttons. Replace the placeholder URLs with real ones.

## Adding photos

Upload a photo into the `images` folder, then set `"image": "images/your-photo.jpg"` on the product. Portrait photos around 800 by 1000 pixels look best.

## Domain

The `CNAME` file holds the custom domain. DNS at the registrar needs these records:

| Type  | Host | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | steve-is-it.github.io   |
