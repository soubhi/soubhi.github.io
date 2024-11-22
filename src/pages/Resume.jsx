import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useState } from "react";
import { FiZoomIn, FiZoomOut, FiDownload } from "react-icons/fi";
import "../css/resume.css"
export default function Resume() {
  const resumeUrl = "/files/SoubhagyaAkkena_DCV_ML_LLM_2.pdf"; // Ensure the file exists
  const [scale, setScale] = useState(1.0); // Initial zoom scale

  // Zoom In Function
  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0)); // Limit zoom-in to 2x
  };

  // Zoom Out Function
  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5)); // Limit zoom-out to 0.5x
  };

  // Download Function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SoubhagyaAkkena_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Resume</h1>

      {/* Action Buttons */}
  {/* Action Buttons */}
      <div className="flex space-x-6">
        {/* Download Button */}
        <button
          id="download-btn"
          className="button"
          onClick={handleDownload}
        >
          <FiDownload className="text-lg" />
          <span>Download</span>
        </button>
      </div>

      {/* Resume Viewer */}
      <div className="w-full max-w-4xl border border-gray-300 shadow-md rounded-lg overflow-hidden bg-white">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js`}>
          <Viewer fileUrl={resumeUrl} defaultScale={scale} />
        </Worker>
      </div>
    </div>
  );
}
