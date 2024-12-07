import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <p>© 2024 One-Click Service. All rights reserved.</p>
      <div className="socials">
        <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
      </div>
      <p>
        <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
