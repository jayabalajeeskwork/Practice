# Razorpay ₹1 isolated test

1. Install Node.js 18+.
2. Copy `.env.example` to `.env` and add either your test or live Razorpay keys.
3. Run `npm install`, then `npm start` in this folder.
4. Open `http://localhost:3000` and click **Pay ₹1**.

`rzp_test_...` keys make a test payment; `rzp_live_...` keys make a real payment. Use `PAYMENT_AMOUNT_PAISE=100` for ₹1 (Razorpay amount uses paise), or e.g. `500` for ₹5.

Never expose `RAZORPAY_KEY_SECRET` to browser JavaScript or commit `.env`. The server verifies Razorpay's signature before treating the payment as successful. For a production public deployment, also configure Razorpay webhooks.
