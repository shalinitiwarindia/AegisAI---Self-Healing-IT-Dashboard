import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HealthMetrics from './HealthMetrics';
import AlertCard from './AlertCard';
import FixSuggestion from './FixSuggestion';
import Chatbot from "./Chatbot";


export default function Dashboard() {
  const [metrics, setMetrics] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAll = async () => {
    try {
      const [mRes, aRes] = await Promise.all([
        axios.get('http://localhost:5000/api/metrics'),
        axios.get('http://localhost:5000/api/alerts')
      ]);
      setMetrics(mRes.data.metrics || {});
      setAlerts(aRes.data.alerts || []);
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchAll(); }, []);

  const requestSuggestion = async (text) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/suggest', { text });
      return res.data.suggestion;
    } catch (err) {
      console.error(err);
      return 'No suggestion (AI error)';
    } finally { setLoading(false); }
  };

  const applyFix = async (id, suggestion) => {
    setLoading(true);
    try {
      const res = await axios.post(`http://localhost:5000/api/fix/${id}`, { suggestion });
      setAlerts(prev => prev.map(a => a.id === id ? res.data.alert : a));
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  return (
    <div>
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
  <Chatbot />
</div>
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>AegisAI — Dashboard</h1>
      <p style={{ color: '#555' }}>Detect → Suggest → Fix → Log (simulated)</p>

      <div style={{ marginTop: 18 }}>
        <HealthMetrics metrics={metrics} />
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>Active Alerts</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {alerts.map(a => (
            <AlertCard
              key={a.id}
              alert={a}
              onAskSuggestion={() => requestSuggestion(`${a.type} - ${a.action || ''}`)}
              onApplyFix={(suggestion) => applyFix(a.id, suggestion)}
              loading={loading}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <FixSuggestion onCreate={async (type) => {
          // create a demo alert
          await axios.post('http://localhost:5000/api/alerts', { type, info: '' });
          fetchAll();
        }} />
      </div>
      
    </div>
    </div>
  );
}
