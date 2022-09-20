import React from "react";
import "./contact.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import emailjs from "@emailjs/browser";
import Square1 from "../Shapes/Square1/index";
import Square2 from "../Shapes/Square2/index";
import Square3 from "../Shapes/Square3/index";

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

  function showMessage() {
    alert("Thanks for reaching out! Ill be sure to get back to you soon.");
}

  const links = [
    {
      name: "GitHub",
      link: "https://github.com/Noah8863",
      id: "github",
      icon: function () {
        return <GitHubIcon />;
      },
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/noah-hoffman-9975a7121/",
      id: "linkedin",
      icon: function () {
        return <LinkedInIcon />;
      },
    },
    {
      name: "Resume",
      link: "https://docs.google.com/document/d/1dTToiAB06etzHDXYmY3J5W8ey1jeBocq87SIhTQ5L_k/edit?usp=sharing",
      id: "resume",
      icon: function () {
        return <PersonIcon />;
      },
    },
  ];

  return (
    <main id="form">
      <Square2></Square2>
      <form className="inputContainer">
        <h2>LET'S CREATE SOMETHING NEW</h2>
        <p type="Name:">
          <input
            className="inputfield"
            id="name"
            placeholder="Write your name here.."
          ></input>
        </p>
        <p type="Email:">
          <input
            className="inputfield"
            id="email"
            placeholder="Write your email here.."
          ></input>
        </p>
        <p type="Message:">
          <input
            className="inputfield"
            id="subject"
            placeholder="Write the subject here.."
          ></input>
        </p>
        <p type="Message:">
          <input
            className="inputfield"
            id="message"
            placeholder="What would you like to talk about?"
          ></input>
        </p>
        <button id="btn" className="bubbly-button" onClick={showMessage}>Send Message</button>
        <div id="contactContainer">
          <div id="contactInfo">
            {/* Mapping over all the different icons/links and creating an anchor tag and inserting the different object values */}
            <ul className="socialMediaBtns">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <li className={`icons ${link.id}`}>
                    <span className="tooltips">{link.name}</span>
                    <span>{link.icon()}</span>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </form>
      <Square1></Square1>
      <Square3></Square3>
    </main>
  );
}

export default Contact;
