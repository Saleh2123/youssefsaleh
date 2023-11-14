import Stripe from "stripe";

export const _dev = new Stripe("sk_test_12345", {
  host: "localhost",
  port: 12111,
  protocol: "http",
});
