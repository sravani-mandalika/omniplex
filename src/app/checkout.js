'use client';
import { useState } from 'react';

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: 1 }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.url) {
      window.location = data.url;
    } else {
      alert('Error: ' + data.error);
    }
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? 'Redirecting...' : 'Buy Pro Plan ($10)'}
    </button>
  );
}