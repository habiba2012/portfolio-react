
import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(projects => {
      var projectImage = "images/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>

              <div className="card">
                <div className="card_image"><img alt={projects.title} src={projectImage} /></div>
                <div className="card_content">
                  <h2 className="card_title">{projects.title}</h2>
                  <p>{projects.category}</p>
                  <p className="card_text">{projects.des}</p>
                  <div style={{ display: "inline", color: "white!important" }}>
                    <button style={{ display: "inline", marginRight: "20px", color: "white" }}><a href={projects.live} target="_blank">Live</a></button><button><a href={projects.github} target="_blank">Github</a></button>
                  </div>
                </div>
              </div>

              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
