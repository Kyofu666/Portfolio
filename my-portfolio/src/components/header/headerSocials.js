import React from "react";

import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

function headerSocials() {
  return (
    <div className="header__socials">
      <a href="https://github.com/Kyofu666" target="_blank" alt="github">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/wilems-rospide-08a3ba23b/"
        target="_blank"
        alt="linkein"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.youtube.com/channel/UC5An9DIA7GcrXV9OK_CDtjA"
        target="_blank"
        alt="youtube"
      >
        <BsYoutube />
      </a>
    </div>
  );
}

export default headerSocials;
