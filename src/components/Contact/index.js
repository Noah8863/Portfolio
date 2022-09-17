import React from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    var today = new Date().toLocaleDateString();

    e.preventDefault();
    const formData = {
      time: today,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    console.log(formData);
    emailjs
      .send(
        "service_32wky28",
        "template_6f7vqrr",
        formData,
        "nIOQ4DjOD6VPrQRy0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <main id="form">
      <form onSubmit={sendEmail} className="inputContainer">
        <h2>LET'S CREATE SOMETHING CREATIVE</h2>
        <p type="Name:">
          <input className="inputfield" id="name" placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input className="inputfield" id="email" placeholder="Write your email here.."></input>
        </p>
        <p type="Message:">
          <input className="inputfield" id="subject" placeholder="Write the subject here.."></input>
        </p>
        <p type="Message:">
          <input className="inputfield" id="message" placeholder="What would you like to talk about?"></input>
        </p>
        <button id="btn">Send Message</button>
      </form>
    </main>
  );
}

export default Contact;
