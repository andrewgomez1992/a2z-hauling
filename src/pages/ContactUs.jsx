import React from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      {/* Your Contact Us content goes here */}
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Reach out to us via the following methods:
      </p>
      <ul>
        <li>Email: contact@hometownhaulinga2z.com</li>
        <li>Phone: (209) 123-1234</li>
        <li>Address: 123 Candle Street, Turlock, CA 95380</li>
      </ul>
      {/* Add a contact form if desired */}
      <Footer />
    </div>
  );
};

export default ContactUs;
