import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';

const MyProjects = () => {
  const projects = [
    { name: 'Project A', details: 'Details about Project A', status: 'Completed', id: 'project-a' },
    { name: 'Project B', details: 'Details about Project B', status: 'In Progress', id: 'project-b' },
    { name: 'Project C', details: 'Details about Project C', status: 'Pending', id: 'project-c' },
    
  ];

  return (
    <Layout>
      <main className='main-container'>
        <div className='main-title'>
          <h3>My PROJECTS</h3>
        </div>
        <div className='projects-list'>
          {projects.map((project, index) => (
            <div className='project-card' key={index}>
              <p>{project.details}</p>
              <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default MyProjects