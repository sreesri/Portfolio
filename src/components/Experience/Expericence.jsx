import React from "react";
import "./Experience.css";

function Expericence() {
  return (
    <section id="Experience">
      <h5>Want To Know ?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__company">
          <div className="experience__Header">
            <h3>Maventic Innovative Solutions</h3>
            <h3>January 2017 - October 2019</h3>
            <div className="experience__content">
              <article className="experience__project">
                <small>
                  Started my career as an intern in Maventic for six months, where I worked on various parts of the application.
                  As a Software Developer, I was responsible for building BOL frameworks, providing application identity and also build few UI for the products. I have used technologies like WildFly, KeyClock, SAPUI5 etc.,
                </small>
              </article>
            </div>
          </div>
        </div>
        <div className="experience__company">
          <div className="experience__Header">
            <h3>Infrrd.ai</h3>
            <h3>November 2019 - Present</h3>
            <div className="experience__content">
              <article className="experience__project">
                <small>
                  Being a Technial Specialist, was responsible for the implementations of various microservices to automate filing of various physical forms, handling digital signatures and role based authentication.
                  Worked with various technologies like Java, SpringBoot, ElasticSearch, AdobePDF Box, AOPs and REST APIs.
                </small>
              </article>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expericence;
