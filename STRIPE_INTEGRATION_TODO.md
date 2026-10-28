# Stripe Checkout integration — TODO

Scenario A: an existing Checkout Session call was found and only its parameters were updated.
Updated call: [src/app/actions.ts](src/app/actions.ts) (`startStripeCheckout`, `stripe.checkout.sessions.create`).

## Values to Replace

No `sample_only` placeholders remain — `mode`, `success_url`, `cancel_url` and `line_items` already use real project values and were preserved as-is.

What still has to change before going live (these are test-mode values, not placeholders):

**Files containing these values:**
- [src/lib/stripe.ts](src/lib/stripe.ts) — `STRIPE_PRICE_IDS`
- [src/app/api/stripe/webhook/route.ts](src/app/api/stripe/webhook/route.ts)
- [src/lib/email.ts](src/lib/email.ts)

| Field | Current value | What to set |
|-------|---------------|-------------|
| `STRIPE_SECRET_KEY` | `sk_test_...` in `.env.local` / Vercel | Live-mode secret key (`sk_live_...`). |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` from the test-mode webhook endpoint | Signing secret of the live-mode webhook endpoint (`https://<domain>/api/stripe/webhook`). |
| `STRIPE_PRICE_IDS[*]` | Test-mode `price_1UVX...` IDs | Live-mode Price IDs from https://dashboard.stripe.com/prices (recreate the 7 products in live mode). |
| `RESEND_API_KEY` | Not set anywhere | Add a Resend API key, otherwise order and contact emails are only logged, never sent. |
| `CONTACT_EMAIL`, `RESEND_FROM` | Default `kati@katilytsy.fi` | Confirm the real recipient and sender domain (verify the domain in Resend). |

## Configured Parameters

These came from Checkout Studio and are now set in the session call.

**Files containing these parameters:**
- [src/app/actions.ts](src/app/actions.ts)

| Parameter | Value |
|-----------|-------|
| `ui_mode` | `hosted_page` |
| `origin_context` | `web` |
| `integration_identifier` | `hosted_web_0001` |
| `billing_address_collection` | `auto` |
| `phone_number_collection` | `{ enabled: true }` |
| `name_collection` | `{ individual: { enabled: true, optional: true } }` |
| `automatic_tax` | `{ enabled: false }` |
| `allow_promotion_codes` | `false` |
| `submit_type` | `auto` |
| `mode` | `payment` (preserved — one-time training purchases, not recurring) |

Deliberate deviations:

- `payment_method_collection: "always"` was **not** added. The API only accepts it in `subscription` mode ("Can only be set in subscription mode"), and this integration is `payment` mode, where the default is already `always`.
- `client_reference_id` and `metadata` (`order_id`, `notes`) were kept even though they are not in the Checkout Studio field list: the webhook handler and the order email read them (`src/app/api/stripe/webhook/route.ts:47`). Removing them would drop the order ID from Kati's order email.

## Setup and next steps

1. **Environment** — `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` are read in `src/lib/stripe.ts` and the webhook route; both are server-only (no `VITE_` prefix needed, this is Next.js). `.env.local` is git-ignored; Vercel env vars are set in the project dashboard.
2. **Webhook** — one endpoint, `POST /api/stripe/webhook`, subscribed to `checkout.session.completed`. Local dev: `stripe listen --forward-to http://localhost:3001/api/stripe/webhook`. Production: register the deployed URL in the Dashboard and use its signing secret.
3. **Payment methods** — enabled in Dashboard → Settings → Payment methods (card, Klarna, PayPal, iDEAL, Wero, SEPA Direct Debit). Nothing in code pins `payment_method_types`, so activated methods appear automatically for EUR prices; iDEAL and Wero only show for matching billing countries.
4. **Flow** — cart (`localStorage`) → `/verkkokauppa/kassa` form → server action creates the session → redirect to Stripe-hosted Checkout → payment → `success_url` `/verkkokauppa/kiitos?session_id=...` → Stripe posts `checkout.session.completed` → handler re-fetches the session with `line_items` + `customer_details` → order email to Kati.
5. **Testing** — test card `4242 4242 4242 4242`, any future expiry, any CVC. `4000000000000002` always fails; `4000002500003155` simulates 3-D Secure. Klarna/PayPal/SEPA test flows are listed at https://docs.stripe.com/payments/testing.
6. **Next steps** — recreate prices in live mode, set Dashboard → Settings → Branding (logo + accent colour) for the Checkout page, and optionally add `consent_collection` (terms of service + marketing opt-in) once a ToS page exists.

API version: not pinned in code — `stripe-node@23.0.1` pins `2026-09-30.endive`, which matches the Dashboard default. `hosted_page` requires SDK >= 21.0.0 (satisfied).

Resources: https://support.stripe.com and https://docs.stripe.com/mcp
