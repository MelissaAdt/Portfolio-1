import React from 'react';
import uniqid from 'uniqid';
import { projets } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

const Projects = () => {
  if (!projets.length) return null;

  return (
    <section id='projets' className='section projects'>
      <h2 className='section__title'>Projets</h2>

      <div className='projects__grid'>
        {projets.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
