import Stripe from "stripe";

export const STRIPE_PRICE_IDS: Record<string, string> = {
  "lytsyn-loylyt-1kk": "price_1UVXFUF7ojNyFfuSD2xzk3pl",
  "ohjattu-treeni": "price_1UVXFhF7ojNyFfuSgSh9IM1i",
  "ohjattu-treeni-1x": "price_1UVXGBF7ojNyFfuS3wOUgDy1",
  "ohjattu-treeni-3x": "price_1UVXGTF7ojNyFfuSJn3QgauN",
  "etavalmennus-3kk": "price_1UVXGiF7ojNyFfuSoMF4A8Yu",
  "johtajavalmennus-3kk": "price_1UVXHFF7ojNyFfuSZzEIJVm3",
  "johtajavalmennus-3kk-firstbeat": "price_1UVXHbF7ojNyFfuS7pTTrb3M",
};

let client: Stripe | null = null;

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured.");
  }
  if (!client) {
    client = new Stripe(key);
  }
  return client;
}

export function formatAmount(cents: number): string {
  return `${(cents / 100).toFixed(2).replace(".", ",")} €`;
}
