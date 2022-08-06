import React from "react";
import "./Portfolio.css";
import AMAZON from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: AMAZON,
    title: "Amazon UI Clone",
    github: "https://github.com/sreesri/Amazon",
    demo: "https://fir-4fb74.web.app/",
  },
];

function Portfolio() {
  return (
    <section id="Portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key= {id} className="portfolio_item">
              <div className="portfolio__image">
                <img className="portfolio__image" src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__cta">
                <a
                  href={github}
                  className="btn"
                  target={"_blank"}
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target={"_blank"}
                >
                  LiveDemo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
