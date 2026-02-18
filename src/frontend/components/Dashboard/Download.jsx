  // Handle Analyze button click
  const handleAnalyze = async () => {
    if (!selectedFile || !reportType) {
      alert("Please upload a file and select report type.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("report_type", reportType);

    try {
      const response = await fetch("https://YOUR-NGROK-URL/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Navigate to page based on report type
      if (reportType === "blood") {
        navigate("/blood", { state: { result: data.report } });
      } else if (reportType === "xray") {
        navigate("/xray", { state: { result: data.report } });
      } else if (reportType === "ctscan") {
        navigate("/ctscan", { state: { result: data.report } });
      } else {
        alert("Unsupported report type");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate report. Try again.");
    }
  };

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../../../App.css';
import { Upload } from 'lucide-react';



const Download = () => {
  ///if upload the file////
  const [selectedFile, setSelectedFile] = useState(null);
  const [reportType, setReportType] = useState("");
  const navigate = useNavigate();


  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.png,.jpg,.jpeg,.dcm';
    input.style.display = 'none';

    input.onchange = (e) => {
      // Handle file upload here
      const file = e.target.files[0];
      setSelectedFile(file);
      // You can add your upload logic
    };
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  // ...existing code...
// The upload and fetch logic should be inside an event handler, not at the top level.


  return (
    <div className="download-container">
        <div className="download-content">
          <div className="drop-report" >
            <div style={{ color: '#C7C7D9', fontSize: 56, marginBottom: 12, display: 'flex', justifyContent: 'center' }}>
              <Upload size={56} color="#C7C7D9" />
            </div>
            <div style={{ color: '#181828', fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
              <span style={{ color: '#181828' }}></span>
            </div>
            <div style={{ color: '#000000', fontSize: 18, fontWeight: 400, marginBottom: 4, textAlign: 'center' }}>
              Drop your report<br />here
            </div>
            <div style={{ color: '#6A7282', fontSize: 14, marginBottom: 12, textAlign: 'center' }}>
              or click to browse
            </div>
            <button
              type="button"
              style={{
                background: '#0A0A13',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '10px 28px',
                fontSize: 16,
                fontWeight: 500,
                cursor: 'pointer',
                marginBottom: 10,
                width: '60%',
              }}
              onClick={handleUploadClick}
            >
              Select File
            </button>
            <div style={{ color: '#C7C7D9', fontSize: 13, marginTop: 2, textAlign: 'center' }}>
              Supports PDF, JPG,<br />PNG, DICOM files
            </div>
          </div>
          <div style={{ width: '100%', marginBottom: 16 }}>
            <h2 style={{ color: '#181828', fontSize: 16, fontWeight: 300, marginBottom: 4, textAlign: 'left' }}>Report Type</h2>
            <select
              style={{
                width: '100%',
                padding: '12px 10px',
                borderRadius: 5,
                border: 'none',
                background: '#F5F5FA',
                color: '#181828',
                fontSize: 16,
                marginTop: 8,
                marginBottom: 8,
                outline: 'none',
                fontWeight: 400,
              }}
              value={reportType}
              onChange={e => setReportType(e.target.value)}
            >
              <option value="" disabled>Select report type</option>
              <option value="blood">Blood Report</option>
              <option value="ctscan">CT Scan</option>
              <option value="xray">X-Ray</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            style={{
              width: '100%',
              background: '#5c5c5c',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              padding: '14px 0',
              fontSize: 16,
              fontWeight: 500,
              marginBottom: 18,
              cursor: 'pointer',
            }}
            onClick={handleAnalyze}
          >
            Analyze Report
          </button>
        </div>
    </div>
  );
};

export default Download;