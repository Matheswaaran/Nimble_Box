import React from 'react';
import ProjectCard from "../components/Cards/ProjectCard";
import NewProjectCard from "../components/Cards/NewProjectCard";

const Projects = () => {
  return (
    <div className="pt-4 row m-0">
      <div className="col-md-9">
        <div className="d-flex align-items-center justify-content-between border-bottom">
          <h2>Projects</h2>
          <span>You have</span>
        </div>
        <div className="card-container p-4">
          <NewProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="col-md-3">
        asdf
      </div>
    </div>
  )
};

export default Projects;
