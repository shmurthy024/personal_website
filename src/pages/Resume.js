import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import pdf from "../PDFs/Shree_Murthy_Resume.pdf"
import './Resume.css';
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-div">
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      
    </div>
  );
}


export default Resume;