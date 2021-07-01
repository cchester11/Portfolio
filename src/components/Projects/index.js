import React from 'react';
import photo from '../../assets/gallery/ss.png';

function Projects (props) {
  const currentProject = {
      name: "Fantasy Team Builder",
      description: "group project created with the purpose of learning to create full stack applications which include a front and back end environment"
  };
  return (
    <section>
      <h1>{currentProject.name}</h1>
      <div>
        <img src={photo} alt="project" className="img-thumbnail mx-1"/>
      </div>
    </section>
  )
};

export default Projects;