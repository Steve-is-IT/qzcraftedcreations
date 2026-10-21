# QZ Crafted Creations

Static storefront for qzcraftedcreations.com, hosted on GitHub Pages with a Sveltia CMS admin at `/admin`.

- Shop owner instructions: [SETUP.md](SETUP.md)
- Products live in `products.json`, contact links in `contact.json`. Both are edited from the admin, which commits to this repo. Pages rebuilds in about a minute.
- Checkout is Stripe Payment Links. Each product carries its own `stripe_link`. No link means a "Message to buy" button.
- Photos upload to `images/` through the admin.

## Admin access

The admin signs in with a GitHub personal access token scoped to this repo (Contents: read and write). The owner must be a collaborator with write access. There is no OAuth app or server. If more than one person needs access later, deploy the Sveltia CMS authenticator worker and set `base_url` in `admin/config.yml`.

## Domain

The `CNAME` file holds the custom domain. DNS at the registrar (currently Squarespace) needs these records and nothing else on the root host:

| Type  | Host | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | steve-is-it.github.io   |

After DNS resolves to GitHub, enable "Enforce HTTPS" in the repo's Pages settings.
