import React from "react";
import PageHeading from "../common/PageHeading";
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <PageHeading home={"Home"} pagename={"Contact"} />
      <div className="contact-heading">
        Contact Page
      </div>
    </div>
  );
};

export default Contact;
