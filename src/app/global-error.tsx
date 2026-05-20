'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Global Error Boundary]', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: '40px 20px',
        background: '#0F0A1A',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        textAlign: 'center'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '480px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚨</div>
          <h2 style={{
            color: '#FF4D4D',
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '12px',
            letterSpacing: '-0.5px'
          }}>
            A Critical Error Occurred
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '12px 0 24px',
            fontSize: '14px',
            lineHeight: '1.6',
            wordBreak: 'break-word',
            fontFamily: 'monospace',
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'left'
          }}>
            {error.message || 'A critical error occurred in the root layout of the application.'}
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              border: 'none',
              borderRadius: '8px',
              color: '#000',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'transform 0.1s ease',
              boxShadow: '0 4px 12px rgba(255, 215, 0, 0.2)'
            }}
          >
            Attempt Recovery
          </button>
        </div>
      </body>
    </html>
  );
}
