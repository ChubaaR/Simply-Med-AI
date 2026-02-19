import '../../../App.css';
import AppBar from '../Navigation/AppBar';
import NavBar from '../Navigation/NavBar';

const History = () => {
  return (
    <div className="history-screen screen">
      <AppBar />
      <div className="past-reports-content" style={{ maxWidth: 420, margin: "0 auto", padding: "32px 0 0 0", marginTop: 80 }}>
        <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8 }}>Report History</h1>
        <div style={{ color: "#555", fontSize: 15, marginBottom: 24 }}>
          View and manage your past medical report analyses
        </div>
        {/* Search Bar */}
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f3eafd",
              borderRadius: 12,
              padding: "8px 16px",
              boxShadow: "0 1px 4px #e0e0e0",
            }}
          >
            <span style={{ color: "#b7b7b7", fontSize: 18, marginRight: 8 }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/></svg>
            </span>
            <input
              type="text"
              placeholder="Search reports by name or type..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 15,
                width: "100%",
                color: "#333",
              }}
            />
          </div>
        </div>

        {/* Report Cards */}
        {[
          {
            name: "Blood_Test_Results_Jan2026.pdf",
            date: "January 15, 2026",
            type: "BLOOD TEST",
            tagColor: "#f8b4c0",
            tagText: "#b8002e",
          },
          {
            name: "Chest_Xray_Dec2025.pdf",
            date: "December 20, 2025",
            type: "XRAY",
            tagColor: "#b6d6f6",
            tagText: "#1a4b7a",
          },
          {
            name: "CT_Scan_Abdomen_Nov2025.pdf",
            date: "November 10, 2025",
            type: "CT SCAN",
            tagColor: "#e1c6f7",
            tagText: "#6b2ca0",
          },
          {
            name: "Blood_Test_Complete_Panel.pdf",
            date: "October 5, 2025",
            type: "BLOOD TEST",
            tagColor: "#f8b4c0",
            tagText: "#b8002e",
          },
        ].map((report, idx) => (
          <div
            key={report.name}
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 2px 8px #e0e0e0",
              padding: 20,
              marginBottom: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            {/* Icon */}
            <div
              style={{
                background: "#e9eafd",
                borderRadius: 12,
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                color: "#5a5a9e",
                flexShrink: 0,
              }}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" fill="#e9eafd" stroke="#5a5a9e" strokeWidth="1.5"/><path d="M8 7h8M8 11h8M8 15h5" stroke="#5a5a9e" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            {/* Details */}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{report.name}</div>
              <div style={{ color: "#888", fontSize: 14, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3h8v4"/><rect width="16" height="16" x="4" y="5" rx="2" stroke="#b7b7b7" strokeWidth="2"/><path stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 13h.01M12 13h.01M8 13h.01"/></svg>
                {report.date}
              </div>
              <div style={{ marginBottom: 10 }}>
                <span
                  style={{
                    background: report.tagColor,
                    color: report.tagText,
                    fontWeight: 500,
                    fontSize: 13,
                    borderRadius: 8,
                    padding: "2px 10px",
                    marginRight: 8,
                  }}
                >
                  {report.type}
                </span>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  style={{
                    background: "#181a23",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "6px 18px",
                    fontWeight: 500,
                    fontSize: 15,
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    cursor: "pointer",
                  }}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="#fff"/><path d="M12 15c2.5 0 4.5-2 4.5-4.5S14.5 6 12 6 7.5 8 7.5 10.5 9.5 15 12 15Z" stroke="#fff" strokeWidth="2"/></svg> View Results
                </button>
                <button
                  style={{
                    background: "#fff0f0",
                    color: "#d32f2f",
                    border: "1px solid #ffd6d6",
                    borderRadius: 8,
                    padding: "6px 16px",
                    fontWeight: 500,
                    fontSize: 15,
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    cursor: "pointer",
                  }}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2" stroke="#d32f2f" strokeWidth="2"/><path d="M9 9l6 6M15 9l-6 6" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round"/></svg> Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Summary Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 2px 8px #e0e0e0",
            padding: 24,
            marginBottom: 32,
            marginTop: 10,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 18 }}>
            Your Health Journey
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#2a4cff", fontWeight: 700, fontSize: 24 }}>4</div>
              <div style={{ color: "#888", fontSize: 15 }}>Total Reports</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#d32f2f", fontWeight: 700, fontSize: 24 }}>2</div>
              <div style={{ color: "#888", fontSize: 15 }}>Blood Tests</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#a12fd3", fontWeight: 700, fontSize: 24 }}>1</div>
              <div style={{ color: "#888", fontSize: 15 }}>CT Scans</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#2a4cff", fontWeight: 700, fontSize: 24 }}>1</div>
              <div style={{ color: "#888", fontSize: 15 }}>X-Rays</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", color: "#888", fontSize: 15, marginTop: 30, marginBottom: 10 }}>
          © 2026 SimplyMed AI.
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default History;