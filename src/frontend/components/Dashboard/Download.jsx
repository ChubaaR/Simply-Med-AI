
import React, { useState } from 'react';
// Custom dropdown for report type
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import { Upload } from 'lucide-react';

const Download = () => {
  ///if upload the file////
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [reportType, setReportType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    { value: 'blood-test', label: 'Blood Test' },
    { value: 'xray', label: 'X-Ray Report' },
    { value: 'ct-scan', label: 'CT Scan Report' },
  ];
  const navigate = useNavigate();

  console.log("Download Component Mounted");

  // Handle Analyze button click
  const handleAnalyze = async () => {
    // console.log("clicked Analyze");
    // console.log("selectedFile:", selectedFile);
    // console.log("reportType:", reportType);

    if (!selectedFile || !reportType) {
      alert("Please upload a file and select report type.");
      return;
    }

    // const formData = new FormData();

    // formData.append("file", selectedFile);
    // // Map frontend report types to backend expected values
    // const reportTypeMap = {
    //   "blood-test": "blood",
    //   "xray": "xray",
    //   "ct-scan": "generic"
    // };
    // formData.append("report_type", reportTypeMap[reportType] || "generic");

    // try {
    //   const response = await fetch("https://rose-untoiling-wilfredo.ngrok-free.dev/analyze", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   const data = await response.json();

    //   // Navigate to results page for all report types
    //   navigate("/results", { state: { result: data.report, reportType } });
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Failed to generate report. Try again.");
    // }
      navigate("/results");
  };


  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.png,.jpg,.jpeg,.dcm, .webp';
    input.style.display = 'none';
    input.name = 'file-upload';
    input.id = 'file-upload';

    input.onchange = (e) => {
      // Handle file upload here
      const file = e.target.files[0];
      setSelectedFile(file);
      if (file) {
        setFileUploaded(true);
      } else {
        setFileUploaded(false);
      }
    };
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };


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
            {/* Visual feedback for uploaded file */}
            {fileUploaded && selectedFile && (
              <div style={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                color: '#28a745',
                fontWeight: 500,
                fontSize: 15
              }}>
                <span style={{fontSize: 20}}>✔️</span>
                <span>{selectedFile.name}</span>
              </div>
            )}
          </div>
          <div style={{ width: '100%', marginBottom: 16 }}>
            <label htmlFor="custom-report-type" style={{ display: 'block', color: '#181828', fontSize: 16, fontWeight: 300, marginBottom: 4, textAlign: 'left' }}>Report Type</label>
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Custom Select Dropdown */}
              <div
                id="custom-report-type"
                tabIndex={0}
                style={{
                  width: '100%',
                  minHeight: 44,
                  background: '#F5F5FA',
                  border: '1px solid #E0E0E0',
                  borderRadius: 8,
                  padding: '12px 40px 12px 14px',
                  fontSize: 16,
                  color: reportType ? '#181828' : '#888',
                  fontWeight: 400,
                  cursor: 'pointer',
                  position: 'relative',
                  marginTop: 8,
                  marginBottom: 8,
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  userSelect: 'none',
                }}
                onClick={() => setDropdownOpen(v => !v)}
                onBlur={() => setDropdownOpen(false)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <span>{
                  reportType
                    ? options.find(opt => opt.value === reportType)?.label
                    : 'Select report type'
                }</span>
                <span style={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888',
                  fontSize: 20,
                  pointerEvents: 'none',
                }}>▼</span>
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '100%',
                      width: '100%',
                      background: '#fff',
                      border: '1px solid #E0E0E0',
                      borderRadius: 10,
                      marginTop: 4,
                      zIndex: 10,
                      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                      padding: '4px 0',
                    }}
                    role="listbox"
                  >
                    {options.map(opt => (
                      <div
                        key={opt.value}
                        role="option"
                        aria-selected={reportType === opt.value}
                        onClick={e => {
                          setReportType(opt.value);
                          setDropdownOpen(false);
                          e.stopPropagation();
                        }}
                        style={{
                          padding: '12px 16px',
                          background: reportType === opt.value ? '#F5F7FB' : '#fff',
                          color: '#181828',
                          fontWeight: 400,
                          cursor: 'pointer',
                          fontSize: 17,
                          borderRadius: 8,
                          margin: '0 6px',
                          marginBottom: 2,
                        }}
                        onMouseDown={e => e.preventDefault()}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
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
            onClick={(e) => {
              e.stopPropagation();
              handleAnalyze();
            }}
          >
            Analyze Report
          </button>
        </div>
    </div>
  );
};

export default Download;
