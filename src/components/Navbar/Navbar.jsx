import React from "react";
import "./Navbar.css";
import { GoHome } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GoHome />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a href="#Experience" onClick={() => setActiveNav("#Experience")}
        className={activeNav === "#Experience" ? "active" : ""}>
        <BsBriefcase />
      </a>
      <a href="#Skills" onClick={() => setActiveNav("#Skills")}
        className={activeNav === "#Skills" ? "active" : ""}>
        <BsCodeSlash />
      </a>
      <a href="#Portfolio" onClick={() => setActiveNav("#Portfolio")}
        className={activeNav === "#Portfolio" ? "active" : ""}>
        <IoIosApps />
      </a>
      <a href="#Contact" onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}>
        <RiContactsLine />
      </a>
    </nav>
  );
}

export default Navbar;
