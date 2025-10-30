
# 🧠 AegisAI – Self-Healing IT Infrastructure Agent

> **“Because downtime should heal itself.”**

AegisAI is a self-healing, AI-driven platform that monitors IT infrastructure, predicts system failures, and automatically resolves them — ensuring **zero downtime**, **improved reliability**, and **smarter operations** for MSPs and IT teams.

---

## ScreenShots
<img width="1364" height="657" alt="AegisAI-1" src="https://github.com/user-attachments/assets/cf2bad77-5f6e-4930-a1e6-66624d818674" />


## 🚀 Overview

Modern IT operations waste enormous time and money fighting repetitive incidents.  
**AegisAI** introduces an autonomous healing layer powered by AI agents that detect, fix, and optimize infrastructure issues — much like how the human body heals itself.

Instead of waiting for manual troubleshooting, AegisAI:
- 🔮 Predicts failures before they occur  
- 🤖 Fixes them autonomously or recommends best actions  
- 🧠 Learns continuously from patterns and outcomes  
- 📊 Reports every action via a real-time dashboard  

The result: **faster recovery**, **reduced costs**, and **happier IT teams.**

---

## 🎯 Problem Statement

IT teams today face 3 major issues:

| Challenge | Description |
|------------|-------------|
| 💸 High Downtime Costs | Every hour of outage can cost enterprises **$300K+** |
| ⏱ Manual Interventions | Diagnosis and fixes are still human-dependent and slow |
| 😓 Team Burnout | Repetitive “firefighting” tasks limit focus on innovation |

AegisAI eliminates these inefficiencies through **predictive analytics**, **automation**, and **self-healing workflows**.

---

## 💡 Key Features

| Category | Description |
|-----------|-------------|
| 🔍 Predictive Analysis | Detects anomalies and potential failures early using AI logic |
| 🔧 Auto-Healing Engine | Executes corrective actions (like restart or rollback) autonomously |
| 🧭 Smart Dashboard | Displays live system health, alerts, and healing history |
| 📊 Analytics & Reports | Tracks uptime, failure trends, and performance metrics |
| ☁️ Cloud Integration (Planned) | AWS monitoring & auto-scaling support |
| 🧠 Learning Agents | Continuously improve fix strategies from past data |

---

## 🧩 System Architecture

Frontend (React.js) → Backend API (Node.js + Express)
↓
MongoDB (Logs, Metrics)
↓
AI Layer (Predict + Fix Agents)
↓
AWS/Cloud (Deployment)


---

## 🖥️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React.js, Recharts, Axios |
| Backend | Node.js, Express |
| Database | MongoDB (Mocked for demo) |
| AI Logic | OpenAI GPT API (Simulated) |
| Cloud | AWS (for hosting, future) |

---

## ⚙️ Local Setup

### Clone the repo
```bash
git clone https://github.com/<your-username>/AegisAI.git
cd AegisAI

Run the backend
cd backend
npm install
npm start

Run the frontend
cd ../frontend
npm install
npm start

Visit the Dashboard:

🔗 http://localhost:3000

(Backend runs on port 5000)

🧪 Demo Preview
Section	Description
💻 Dashboard	Displays live metrics and alert cards
⚠️ Alerts	Auto-detected issues like “CPU Overload”, “Memory Leak”
✅ Healing Logs	Actions like “Service Restarted” or “Process Optimized”
📈 Metrics View	CPU %, Memory %, Disk usage, and uptime
🤖 Chatbot	Ask about “CPU”, “Memory”, or “Alerts” for AI responses
📹 Demo Video



🧱 Project Structure
AegisAI/
│
├── frontend/
│   ├── src/components/
│   │   ├── Dashboard.js
│   │   ├── AlertCard.js
│   │   ├── HealthMetrics.js
│   │   └── Chatbot.js
│   └── App.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── alerts.js
│   │   └── metrics.js
│   ├── models/Log.js
│
├── demo/screenshots/
│   └── dashboard.png
│
└── README.md

🌟 What Makes AegisAI Unique

🧠 Agent-Based Intelligence — Modular agents for prediction, healing, and optimization.

🤖 Autonomous Workflow — No human intervention for resolution of common issues.

🧬 Human-Inspired Design — Mirrors how biological systems detect and fix damage.

☁️ MERN + AI Integration — Combines modern web stack with AI logic for real-world scalability.

🔮 Future Roadmap

🔗 Integrate AWS CloudWatch for real metrics

🧠 Deploy real GPT-powered prediction module

👥 Introduce role-based access dashboard for teams

🕓 Add incident timeline visualization

🚀 Turn prototype into SaaS monitoring service

🏆 About This Project

Built for SuperHack 2025 – AWS x Hack2Skill
Theme: Operational Efficiency Improvement for MSPs & IT Teams
Created by: Shalini Tiwari
Tech Focus: MERN Stack + AI Simulation + Cloud-Ready Design

❤️ Acknowledgments

Special thanks to AWS experts, Hack2Skill mentors, and open-source contributors for their guidance and inspiration.
Built with 💻 passion & ☁️ curiosity.

If you like this project, ⭐ Star this repo and share your feedback!
