import React from "react";
import "../css/termsmodal.css"; // Add modal-specific styles
import TermsAndServices from "./TermsAndServices"; // Import the TermsAndServices component

const TermsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <TermsAndServices />
      </div>
    </div>
  );
};

export default TermsModal;
