import React from "react";
import MainCss from "../index.css";
import GithubIcon from "../assets/GitHub Icon.png";
import FacebookIcon from "../assets/Facebook Icon.png";
import InstagramIcon from "../assets/Instagram Icon.png";
import TwitterIcon from "../assets/Twitter Icon.png";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <a href="https://github.com/Owengee">
        <img src={GithubIcon} alt="GitHub Icon" />
      </a>
      <a href="https://web.facebook.com/profile.php?id=100073799601931">
        <img src={FacebookIcon} alt="Facebook Icon" />
      </a>
      <a href="https://www.instagram.com/onwenu_geoffery/">
        <img src={InstagramIcon} alt="Instagram Icon" />
      </a>
      <a href="https://twitter.com/OnwenuNgoka">
        <img src={TwitterIcon} alt="Twitter Icon" />
      </a>
    </div>
  );
}
