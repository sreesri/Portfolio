import React from "react";
import "./About.css";
import About_ME from "../../assets/me-abt.JPG";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={About_ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsBriefcase className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years</small>
            </article>

            {/* <article className="about__card">
              <HiOutlineOfficeBuilding className="about__icon" />
              <h5>Companies</h5>
              <small>4+ years</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>

          <p>
            Hi! I am Shriram.A Highly skilled and motivated full stack developer with 5 years of experience. I have handled multiple projects involving microservices using SpringBoot and ElasticSearch database. I have experience working with Adobe PDFBox, BOL framework, Wildfly application server.
            I am a udacity certified Full Stack Developer with knowledge on ReactJS Framework, Java, Python and have also mastered HTML and CSS.
          </p>

          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
