import React from 'react';
import { AiOutlinePlus } from "react-icons/ai"

const NewProjectCard = () => {
	return (
		<div className="project-card d-flex flex-column align-items-center justify-content-center">
			<AiOutlinePlus className="font-32" />
			<span className="font-32">New Project</span>
		</div>
	)
};

export default NewProjectCard;
