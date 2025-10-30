import React, { useState } from 'react';

export default function FixSuggestion({ onCreate }) {
  const [type, setType] = useState('');
  return (
    <div style={{ marginTop: 20 }}>
      <h4>Add Demo Alert</h4>
      <input value={type} onChange={e => setType(e.target.value)} placeholder="e.g., Service crash on server-02" style={{ padding: 8, width: 350 }} />
      <button onClick={() => { if(type.trim()) { onCreate(type.trim()); setType(''); } }} style={{ marginLeft: 12, padding: '8px 12px' }}>Create Alert</button>
    </div>
  );
}
