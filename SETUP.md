# Setup guide for QZ Crafted Creations

This is for the shop owner. Follow it once. After that, you only ever use the admin page.

## 1. Get access to the site (one time)

1. Make a free GitHub account at https://github.com/signup if you do not have one. Turn on two-factor authentication in Settings, Password and authentication.
2. Tell Steve your GitHub username. He adds you as a collaborator on the site repository and you accept the invite from the email GitHub sends.
3. Create an access token. This is the password the admin page uses.
   - Go to https://github.com/settings/personal-access-tokens/new
   - Token name: `QZ admin`
   - Expiration: pick 1 year (you will make a new one when it expires)
   - Repository access: choose "Only select repositories" and pick `Steve-is-IT/qzcraftedcreations`
   - Permissions, Repository permissions: set **Contents** to **Read and write**. Leave everything else alone.
   - Click Generate token and copy it somewhere safe, like your password manager. GitHub only shows it once.

## 2. Using the admin

1. Open https://qzcraftedcreations.com/admin
2. Click Sign in with GitHub, choose the option to use a personal access token, and paste your token.
3. Under Shop, open Products. Each item has:
   - Name
   - Category: Singles, Sealed or Crafted
   - Details: condition, notes
   - Price
   - Photo: upload straight from your phone
   - Stripe payment link: see step 3 below
   - Sold: flip this on when it sells. It stays listed with a Sold tag.
4. Click Save. The site updates in about a minute.

Contact links (email, Facebook, Instagram) are under Shop, Contact links.

## 3. Taking payments with Stripe

Stripe runs the checkout. You never handle card numbers and the site never sees them. Stripe charges a fee per sale (about 2.9% plus 30 cents) and nothing monthly.

1. Make an account at https://dashboard.stripe.com/register and finish the business and bank details so payouts work.
2. For each item you want to sell online: Payment links, New, add a product with the name and price, and turn on "Collect customers' addresses" so you get a shipping address. For shipping, add a shipping rate on the link.
3. For one of a kind cards, open the link's advanced options and set "Limit the number of payments" to 1 so it cannot sell twice.
4. Copy the link (it starts with buy.stripe.com) and paste it into the item's Stripe payment link field in the admin.
5. When someone buys, Stripe emails you. Flip the item to Sold in the admin and ship it.

Items with no Stripe link show a "Message to buy" button that sends people to your contact links.

## 4. Photos

Portrait photos around 800 by 1000 pixels look best. Phone photos work fine. Shoot on a plain background in daylight.

## If something breaks

Steve can see every change in the repository history and can undo any edit. Nothing you do in the admin is permanent.
