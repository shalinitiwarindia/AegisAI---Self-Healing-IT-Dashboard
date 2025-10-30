import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ background: '#0f1724', color: '#fff', padding: '14px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>🧠 AegisAI</h2>
        <div>Self-Healing IT Infrastructure — Prototype</div>
      </div>
    </nav>
  );
}
