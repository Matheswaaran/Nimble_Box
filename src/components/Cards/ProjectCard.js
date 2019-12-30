import React from 'react';
import { FiCpu } from 'react-icons/fi';

const ProjectCard = (props) => {
  return (
    <div className="project-card d-flex flex-column align-items-start justify-content-between w-100 p-3">
      <div>
        <span className="font-24">My First Project</span>
      </div>
      <div className="w-100">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <FiCpu />
            <span>CPU</span>
          </div>
          {!props.running && (
            <div className="green-tag">Running</div>
          )}
          {props.stopped && (
            <div className="red-tag">Stopped</div>
          )}
        </div>
        {props.data && (
          <span>Click on the card to start interface</span>
        )}
      </div>
    </div>
  )
};

export default ProjectCard;
