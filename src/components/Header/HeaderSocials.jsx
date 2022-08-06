import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="linkedin" target="_blank">
        <BsLinkedin />
      </a>
      <a href="linkedin" target="_blank">
        <AiFillGithub />
      </a>
      <a href="linkedin" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
}

export default HeaderSocials;
