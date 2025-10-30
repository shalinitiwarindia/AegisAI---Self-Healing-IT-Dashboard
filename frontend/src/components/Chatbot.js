import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋 I’m AegisAI! Ask me about CPU, memory, or alerts." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const botResponse = getBotResponse(userMessage);

   const newMessages = [...messages, { from: "user", text: userMessage }];
setMessages(newMessages);

setTimeout(() => {
  setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
}, 800);

    setInput("");
  };

  const getBotResponse = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hey there 👋! How can I help you with your system today?";
    }
    if (msg.includes("cpu")) {
      return "🧠 CPU load currently stable at 75%. High usage detected earlier, but recovery routine applied.";
    }
    if (msg.includes("memory")) {
      return "💾 Memory usage at 68%. Leak prevention script running successfully.";
    }
    if (msg.includes("disk")) {
      return "📀 Disk usage at 72%. Cleaning logs and archiving old data to free space.";
    }
    if (msg.includes("uptime")) {
      return "🕒 System uptime is 99.9% — fully operational!";
    }
    if (msg.includes("crash") || msg.includes("server")) {
      return "🚨 Server crash detected earlier. Diagnostic script executed and services restarted.";
    }
    if (msg.includes("status")) {
      return "📊 All systems are operational. 3 alerts resolved, 1 pending.";
    }
    if (msg.includes("fix")) {
      return "🔧 Suggested fix: Restart the affected service and clear system cache.";
    }
    if (msg.includes("help")) {
      return "I can tell you about CPU, memory, disk, uptime, or suggest fixes for alerts.";
    }

    return "🤖 Hmm, analyzing logs for more info... could you specify if it's CPU, memory, or disk related?";
  };

  return (
    <div style={{
      background: "#111827",
      color: "white",
      borderRadius: "12px",
      padding: "16px",
      width: "320px",
      height: "440px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
    }}>
      <h3 style={{ color: "#60a5fa", marginBottom: 10 }}>AegisAI Chatbot 🤖</h3>

      <div style={{
        flex: 1,
        overflowY: "auto",
        background: "#1f2937",
        borderRadius: "8px",
        padding: "8px"
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            textAlign: msg.from === "user" ? "right" : "left",
            margin: "6px 0"
          }}>
            <span style={{
              display: "inline-block",
              background: msg.from === "user" ? "#3b82f6" : "#374151",
              padding: "8px 10px",
              borderRadius: "8px",
              maxWidth: "80%"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: "8px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            background: "#374151",
            color: "white"
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: "6px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "8px 12px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
