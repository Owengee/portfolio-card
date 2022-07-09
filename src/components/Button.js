import React from "react";
import EmailIcon from "../assets/Email.png";
import LinkedinIcon from "../assets/LinkedinButton.png";

export function EmailButton() {
  return (
    <div>
      <button className="EmailButton">
        <a href="https://mailto:ngokagonwenu@gmail.com">
          <img src={EmailIcon} alt="Email icon" />
        </a>
        Email
      </button>
    </div>
  );
}

export function LinkedinButton() {
  return (
    <div>
      <button className="LinkedinButton">
        <a href="https://www.linkedin.com/in/onwenu-ngoka-500a22222/">
          <img src={LinkedinIcon} alt="Linkedin icon" />
        </a>
        LinkedIn
      </button>
    </div>
  );
}
