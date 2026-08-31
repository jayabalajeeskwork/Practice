require('dotenv').config();

const crypto = require('crypto');
const path = require('path');
const express = require('express');
const Razorpay = require('razorpay');

for (const variable of ['RAZORPAY_KEY_ID', 'RAZORPAY_KEY_SECRET']) {
  if (!process.env[variable]) throw new Error(`${variable} is missing. Create .env from .env.example.`);
}

const amount = Number(process.env.PAYMENT_AMOUNT_PAISE || 100);
if (!Number.isInteger(amount) || amount < 100) throw new Error('PAYMENT_AMOUNT_PAISE must be at least 100 (₹1).');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/create-order', async (_req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `demo_${Date.now()}`,
    });
    res.json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId: process.env.RAZORPAY_KEY_ID });
  } catch (error) {
    console.error('Order creation failed:', error.error || error.message);
    res.status(500).json({ message: 'Could not create the Razorpay order.' });
  }
});

app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) return res.status(400).json({ verified: false, message: 'Incomplete payment details.' });
  const expected = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
  const verified = crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature));
  if (!verified) return res.status(400).json({ verified: false, message: 'Signature verification failed.' });
  console.log(`Verified payment ${razorpay_payment_id} for order ${razorpay_order_id}`);
  res.json({ verified: true, paymentId: razorpay_payment_id });
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`Open http://localhost:${port}`));
