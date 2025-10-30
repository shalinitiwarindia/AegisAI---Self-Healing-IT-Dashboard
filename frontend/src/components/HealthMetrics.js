import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function HealthMetrics({ metrics = {} }) {
  const data = [
    { name: 'CPU', value: metrics.cpu || 0 },
    { name: 'Memory', value: metrics.memory || 0 },
    { name: 'Disk', value: metrics.disk || 0 },
    { name: 'Uptime', value: Math.round(metrics.uptime || 0) }
  ];

  return (
    <div style={{ background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <h4 style={{ margin: 0 }}>System Health Metrics</h4>
      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
