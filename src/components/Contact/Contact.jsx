import React from "react";
import "./Contact.css";
import Form from "../Form/Form";

function Contact() {
  return (
    <div>
      <h1>Contact:</h1>
      <section id="images">
        <img id="gmail" src="../assets/Gmail-logo.png" alt="" />
        <img id="link" src="../assets/LinkedIn-logo.webp" alt="" />
      </section>
      <Form/>
    </div>
  );
}

export default Contact;
