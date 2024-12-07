import React from "react";
import "../css/termsandservices.css";

const TermsAndServices = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Services</h1>
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to our platform. By accessing or using our services, you agree
          to comply with these terms and conditions.
        </p>
      </section>
      <section>
        <h2>2. User Responsibilities</h2>
        <p>
          Users must ensure all information provided is accurate and must
          refrain from using the platform for unlawful purposes.
        </p>
      </section>
      <section>
        <h2>3. Service Limitations</h2>
        <p>
          While we strive for accuracy, our platform may not always function
          without errors or interruptions.
        </p>
      </section>
      <section>
        <h2>4. Payment and Refunds</h2>
        <p>
          Payments must be made promptly. Refund policies are outlined in a
          separate section.
        </p>
      </section>
      <section>
        <h2>5. Termination</h2>
        <p>
          We reserve the right to suspend or terminate user accounts if terms
          are violated.
        </p>
      </section>
      <section>
        <h2>6. Changes to Terms</h2>
        <p>
          These terms may be updated periodically. Continued use of the platform
          constitutes acceptance of the new terms.
        </p>
      </section>
      <section>
        <h2>7. Contact Information</h2>
        <p>
          If you have any questions, feel free to contact us at
          support@example.com.
        </p>
      </section>
    </div>
  );
};

export default TermsAndServices;
