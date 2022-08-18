import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dev-shriram-ms/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sreesri" target="_blank">
        <AiFillGithub />
      </a>
      <a href="linkedin" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
}

export default HeaderSocials;
