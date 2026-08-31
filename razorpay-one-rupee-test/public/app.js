const payButton = document.querySelector('#pay');
const status = document.querySelector('#status');

payButton.addEventListener('click', async () => {
  payButton.disabled = true;
  status.textContent = 'Creating secure order…';
  try {
    const response = await fetch('/api/create-order', { method: 'POST' });
    const order = await response.json();
    if (!response.ok) throw new Error(order.message || 'Order creation failed.');
    const checkout = new Razorpay({
      key: order.keyId, amount: order.amount, currency: order.currency,
      name: 'My Razorpay Test', description: '₹1 payment test', order_id: order.orderId,
      handler: async (payment) => {
        status.textContent = 'Verifying payment…';
        const verifiedResponse = await fetch('/api/verify-payment', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payment),
        });
        const result = await verifiedResponse.json();
        status.textContent = result.verified ? `Payment verified. Payment ID: ${result.paymentId}` : `Verification failed: ${result.message || 'Unknown error'}`;
        payButton.disabled = false;
      },
      modal: { ondismiss: () => { status.textContent = 'Payment cancelled.'; payButton.disabled = false; } },
      theme: { color: '#2865d7' },
    });
    checkout.open();
  } catch (error) { status.textContent = error.message; payButton.disabled = false; }
});
