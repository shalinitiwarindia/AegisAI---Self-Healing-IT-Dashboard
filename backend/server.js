require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

/*
  Simulated in-memory data store (easy for prototype)
  You can replace with MongoDB later.
*/
let alerts = [
  { id: 1, type: "CPU Overload", status: "Detected", action: "Pending", suggestion: "" },
  { id: 2, type: "Memory Leak", status: "Detected", action: "Pending", suggestion: "" },
  { id: 3, type: "Disk Space Low", status: "Detected", action: "Pending", suggestion: "" }
];

const metrics = {
  cpu: 75,     // percent
  memory: 68,  // percent
  disk: 72,    // percent
  uptime: 99.92
};

// GET metrics
app.get('/api/metrics', (req, res) => {
  res.json({ success: true, metrics });
});

// GET alerts
app.get('/api/alerts', (req, res) => {
  res.json({ success: true, alerts });
});

/*
  POST /api/suggest
  - body: { text: "CPU high on server-01" }
  - returns suggestion string
  If OPENAI_API_KEY is set the server will call OpenAI chat completions.
  Otherwise it returns a mocked suggestion.
*/
app.post('/api/suggest', async (req, res) => {
  const { text } = req.body || {};
  if (!text) return res.status(400).json({ success: false, message: 'text required' });

  // If API key provided, call OpenAI. Otherwise return mock.
  if (process.env.OPENAI_API_KEY) {
    try {
      const resp = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4o-mini",
        messages: [
          { role: 'system', content: 'You are an expert cloud ops assistant. Provide a single safe remediation step and rollback note.' },
          { role: 'user', content: `System alert: ${text}. Provide one safe remediation step, risk level, and rollback.` }
        ],
        max_tokens: 250,
        temperature: 0.2
      }, {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
      });
      const suggestion = resp.data.choices?.[0]?.message?.content || 'No suggestion';
      return res.json({ success: true, suggestion });
    } catch (err) {
      console.error('OpenAI error', err?.response?.data || err.message);
      return res.status(500).json({ success: false, message: 'AI error' });
    }
  } else {
    // Mock suggestion logic
    const lower = (text || '').toLowerCase();
    let suggestion = 'Run diagnostic script and restart service.';
    if (lower.includes('cpu')) suggestion = 'Restart the application service and scale up CPU if recurrence.';
    if (lower.includes('memory')) suggestion = 'Clear application cache and restart service; monitor memory after restart.';
    if (lower.includes('disk')) suggestion = 'Archive logs and free up disk; schedule cleanup job.';
    return res.json({ success: true, suggestion });
  }
});

// POST /api/fix/:id  -> simulate applying fix
app.post('/api/fix/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const alert = alerts.find(a => a.id === id);
  if (!alert) return res.status(404).json({ success: false, message: 'Alert not found' });

  // If request included suggestion in body, use it
  if (req.body && req.body.suggestion) alert.suggestion = req.body.suggestion;

  // Simulate execution delay
  await new Promise(r => setTimeout(r, 900));

  // Simulate result: set resolved
  alert.status = 'Resolved';
  alert.action = alert.suggestion || 'Auto fix executed';
  alert.resolvedAt = new Date().toISOString();

  return res.json({ success: true, alert });
});

// POST -> create a new alert (for demo)
app.post('/api/alerts', (req, res) => {
  const { type, info } = req.body;
  const id = alerts.length + 1;
  const newAlert = { id, type: type || 'Custom Alert', status: 'Detected', action: 'Pending', suggestion: info || '' };
  alerts.push(newAlert);
  return res.json({ success: true, alert: newAlert });
});

app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
