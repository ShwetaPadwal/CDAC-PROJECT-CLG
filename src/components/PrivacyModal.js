import React from "react";
import "../css/privacymodal.css"; // Add modal-specific styles
import PrivacyPolicy from "./PrivacyPolicy"; // Import the PrivacyPolicy component

const PrivacyModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default PrivacyModal;
