// import React, { useState } from 'react';

// export default function AlertCard({ alert, onAskSuggestion, onApplyFix, loading }) {
//   const [suggestion, setSuggestion] = useState('');

//   const ask = async () => {
//     const s = await onAskSuggestion();
//     setSuggestion(s);
//   };

//   return (
//     <div style={{ width: 300, background: '#fff', padding: 16, borderRadius: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
//       <h4 style={{ marginTop: 0 }}>{alert.type}</h4>
//       <p style={{ margin: 4 }}>Status: <b>{alert.status}</b></p>
//       <p style={{ margin: 4 }}>Action: {alert.action}</p>
//       <div style={{ marginTop: 8 }}>
//         {suggestion ? (
//           <div style={{ background: '#f4f7ff', padding: 8, borderRadius: 6 }}>
//             <strong>Suggestion:</strong>
//             <div style={{ fontSize: 13 }}>{suggestion}</div>
//             <div style={{ marginTop: 8 }}>
//               <button onClick={() => onApplyFix(suggestion)} disabled={loading} style={buttonStyle}>Apply Fix</button>
//             </div>
//           </div>
//         ) : (
//           <div style={{ display: 'flex', gap: 8 }}>
//             <button onClick={ask} disabled={loading} style={buttonStyle}>Get Suggestion</button>
//             <button onClick={() => onApplyFix('Run auto-heal routine')} disabled={loading} style={buttonStyleSecondary}>Quick Fix</button>
//           </div>
//         )}
//       </div>
//       {alert.resolvedAt && <div style={{ marginTop: 10, fontSize: 12, color: '#4b5563' }}>Resolved: {new Date(alert.resolvedAt).toLocaleString()}</div>}
//     </div>
//   );
// }

// const buttonStyle = {
//   background: '#111827', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6, cursor: 'pointer'
// };
// const buttonStyleSecondary = {
//   background: '#e2e8f0', color: '#111827', border: 'none', padding: '8px 12px', borderRadius: 6, cursor: 'pointer'
// };
import React, { useState } from 'react';

export default function AlertCard({ alert, onAskSuggestion, onApplyFix, loading }) {
  const [suggestion, setSuggestion] = useState('');

  const ask = async () => {
    const s = await onAskSuggestion();
    setSuggestion(s);
  };

  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>{alert.type}</h4>
      <p style={textStyle}>
        Status: <b>{alert.status}</b>
      </p>
      <p style={textStyle}>Action: {alert.action}</p>

      <div style={{ marginTop: 10 }}>
        {suggestion ? (
          <div style={suggestionBox}>
            <strong>Suggestion:</strong>
            <div style={{ fontSize: 13, marginTop: 4 }}>{suggestion}</div>
            <div style={{ marginTop: 8 }}>
              <button
                onClick={() => onApplyFix(suggestion)}
                disabled={loading}
                style={buttonPrimary}
              >
                Apply Fix
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={ask} disabled={loading} style={buttonPrimary}>
              Get Suggestion
            </button>
            <button
              onClick={() => onApplyFix('Run auto-heal routine')}
              disabled={loading}
              style={buttonSecondary}
            >
              Quick Fix
            </button>
          </div>
        )}
      </div>

      {alert.resolvedAt && (
        <div style={resolvedText}>
          Resolved: {new Date(alert.resolvedAt).toLocaleString()}
        </div>
      )}
    </div>
  );
}

// 🌌 Glassmorphic Card Style
const cardStyle = {
  width: 300,
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(12px)',
  borderRadius: 16,
  border: '1px solid rgba(255,255,255,0.1)',
  boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
  padding: 18,
  color: '#f8fafc',
  transition: 'all 0.3s ease',
};

const titleStyle = {
  color: '#60a5fa',
  fontSize: 18,
  fontWeight: 600,
  marginTop: 0,
};

const textStyle = {
  margin: 4,
  fontSize: 14,
  color: '#cbd5e1',
};

const suggestionBox = {
  background: 'rgba(59,130,246,0.15)',
  borderLeft: '3px solid #3b82f6',
  borderRadius: 8,
  padding: 10,
};

const buttonPrimary = {
  background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
  color: '#fff',
  border: 'none',
  padding: '8px 14px',
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 500,
  transition: '0.3s',
};

const buttonSecondary = {
  background: 'rgba(255,255,255,0.1)',
  color: '#e2e8f0',
  border: '1px solid rgba(255,255,255,0.2)',
  padding: '8px 14px',
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 500,
  transition: '0.3s',
};

const resolvedText = {
  marginTop: 10,
  fontSize: 12,
  color: '#94a3b8',
};
