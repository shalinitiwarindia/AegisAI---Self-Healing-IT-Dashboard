# 🧠 AegisAI – Self-Healing IT Infrastructure Agent

> **“Because downtime should heal itself.”**

AegisAI is a self-healing, AI-driven platform that monitors IT infrastructure, predicts system failures, and automatically resolves them — ensuring **zero downtime**, **improved reliability**, and **smarter operations** for MSPs and IT teams.

---

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

🎥 Watch the demo here → Demo Video Link

(Upload your demo to YouTube or Google Drive and paste the link here.)

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


#ScreenShots

<img width="1359" height="659" alt="image" src="https://github.com/user-attachments/assets/a93bb2cc-6073-45ac-947b-1c344a2ff574" />
<img width="372" height="499" alt="image" src="https://github.com/user-attachments/assets/0f3df605-a20c-41ad-ab5e-1da7eac8c82c" />
<img width="1358" height="402" alt="image" src="https://github.com/user-attachments/assets/986ad7b5-3ec5-4bc0-8431-4090a208eb14" />
<img width="1357" height="391" alt="image" src="https://github.com/user-attachments/assets/adfe91b5-70cf-4e7c-923d-0c3e26c9d66e" />
<img width="970" height="117" alt="image" src="https://github.com/user-attachments/assets/99988c4e-748e-4588-a06a-0404d9e49ae1" />
<img width="598" height="126" alt="image" src="https://github.com/user-attachments/assets/ae04ac78-a6e0-4344-bd49-a9057c49a3ef" />
<img width="1363" height="370" alt="image" src="https://github.com/user-attachments/assets/0a6e4edb-d4a6-4db9-a192-dbce2dad862b" />
<img width="1365" height="350" alt="image" src="https://github.com/user-attachments/assets/249f8a33-ada7-4580-bacc-a024241c8cd7" />



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
