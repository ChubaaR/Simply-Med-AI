import React, { useState } from 'react';
import '../../../App.css';
import AppBar from '../Navigation/AppBar';
import NavBar from '../Navigation/NavBar';




const Results = () => {
  // Placeholder: Replace with Medgemma model output logic
  const [summary, setSummary] = useState(`1) Clinical context: Not provided\n2) Technique: PA projection, adequate penetration.\n3) Findings:\n- Airways: Trachea is midline. The main bronchi are patent.\n- Lungs & pleura: The lungs are clear without consolidation, atelectasis, pleural effusion, or pneumothorax. There is no evidence of interstitial lung disease.\n- Cardiome...\nIMPRESSION:\n* Normal chest X-ray.\n* No acute cardiopulmonary process identified.\nURGENT ALERTS:\n* None`);
  const [recommendations, setRecommendations] = useState([
    'Schedule a follow-up appointment with your healthcare provider',
    'Discuss these results in the context of your medical history',
    'Ask questions about anything that\'s unclear',
  ]);
  const [faq] = useState([
    'What do these results mean for my health?',
    'Should I schedule a follow-up appointment?',
    'Are there any concerns I should address?',
  ]);
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Placeholder: Replace with Medgemma chat API call
  const handleAskAI = () => {
    if (!userInput.trim()) return;
    setChat([...chat, { sender: 'user', text: userInput }]);
    setChat(current => [...current, { sender: 'ai', text: 'This is a placeholder answer from Medgemma.' }]);
    setUserInput("");
  };

  return (
    <div className="results-screen screen" style={{ minHeight: '100vh', marginTop: 40 }}>
      <AppBar />
      <div className="scan-results-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0}}>
        {/* 1st Container: Summary */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #0001', padding: 24, margin: '24px 0 16px 0', width: 350, maxWidth: '90%' }}>
          <h2 style={{ marginBottom: 16 }}>Summary</h2>
          <pre style={{ fontFamily: 'inherit', fontSize: 15, color: '#222', whiteSpace: 'pre-wrap', margin: 0 }}>{summary}</pre>
        </div>

        {/* 2nd Container: Recommendations */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #0001', padding: 24, margin: '0 0 16px 0', width: 350, maxWidth: '90%' }}>
          <h2 style={{ marginBottom: 16 }}>Recommendations</h2>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {recommendations.map((rec, i) => (
              <li key={i} style={{ marginBottom: 10, fontSize: 15, color: '#222' }}>✅ {rec}</li>
            ))}
          </ul>
        </div>

        {/* 3rd Container: Chatbot with FAQ */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #0001', padding: 24, margin: '0 0 24px 0', width: 350, maxWidth: '90%' }}>
          <h2 style={{ marginBottom: 12 }}>Ask Questions</h2>
          <div style={{ fontWeight: 500, marginBottom: 8, color: '#222' }}>Popular questions:</div>
          {faq.map((q, i) => (
            <button
              key={i}
              style={{
                width: '100%',
                background: '#f5f5fa',
                border: '1px solid #e0e0e0',
                borderRadius: 8,
                padding: '10px 8px',
                marginBottom: 8,
                textAlign: 'left',
                fontSize: 15,
                cursor: 'pointer',
              }}
              onClick={() => setUserInput(q)}
            >
              {q}
            </button>
          ))}
          <div style={{ margin: '16px 0', minHeight: 60 }}>
            {chat.map((msg, i) => (
              <div key={i} style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginBottom: 6,
                color: msg.sender === 'user' ? '#0A0A13' : '#5c5c5c',
                fontWeight: msg.sender === 'user' ? 500 : 400,
              }}>
                {msg.sender === 'user' ? 'You: ' : 'AI: '}{msg.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleAskAI(); }}
              placeholder="Type your question about the report..."
              style={{ flex: 1, borderRadius: 8, border: '1px solid #e0e0e0', padding: 8, fontSize: 15 }}
            />
            <button
              onClick={handleAskAI}
              style={{ background: '#0A0A13', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 500, fontSize: 15, cursor: 'pointer' }}
            >Ask AI</button>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Results;