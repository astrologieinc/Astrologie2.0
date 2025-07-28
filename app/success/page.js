import Link from 'next/link';

export default function Success() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Thank You!</h1>
      <p>Your astrology consultation request has been received.</p>
      <p>We&apos;ll get back to you soon!</p>
      <Link href="/" style={{ color: '#0070f3' }}>Back to Home</Link>
    </div>
  );
}
