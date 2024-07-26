import React from "react";

function Projects() {
  return (
    <div id="projects" className="section portfolio">
      <div className="body">
        <div className="title">
          <div className="header">Portfolio</div>
          <div className="underscore"></div>
        </div>
        <div className="tile-label-container">
          <div className="tile-label one">
            <div className="caption">AIRA</div>
            <div className="label"></div>
          </div>
          <div className="tile-label two">
            <div className="caption"></div>
            <div className="label"></div>
          </div>
          <div className="tile-label three">
            <div className="caption"></div>
            <div className="label"></div>
          </div>
          <div className="tile-label four">
            <div className="caption"></div>
            <div className="label"></div>
          </div>
        </div>
      </div>
      <div className="tiles-container">
        <div className="first project-tile"></div>
        <div className="second project-tile"></div>
        <div className="third project-tile"></div>
        <div className="fourth project-tile"></div>
      </div>
    </div>
  );
}

export default Projects;
