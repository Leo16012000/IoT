import React from "react";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ContactsIcon from "@material-ui/icons/Contacts";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Contact.css";

function Contact() {
  return (
    <div class="contacts">
      <div className="icon">
        <ContactsIcon />
        <EmailIcon />
      </div>
      <div className="label">
        <p>0912345678</p>
        <p>contact@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
