/*import React from 'react';
import Layout from '../Components/Layout'; 

const MyProjects = () => {
  const projects = [
    { name: 'Project A', details: 'Details about Project A', status: 'Completed' },
    { name: 'Project B', details: 'Details about Project B', status: 'In Progress' },
    { name: 'Project C', details: 'Details about Project C', status: 'Pending' }
  ];

  return (
    <Layout>
      <main className='main-container'>
        <div className='main-title'>
          <h3>MY PROJECTS</h3>
        </div>
        <div className='projects-list'>
          {projects.map((project, index) => (
            <div className='project-card' key={index}>
              <h4>{project.name}</h4>
              <p>{project.details}</p>
              <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default MyProjects;


import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsPerson, BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill } from 'react-icons/bs';
import Layout from '../Components/Layout'; 
import { Routes } from 'react-router-dom';



const MyProjects= () => {
  const data = [
    { name: 'Completed', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'In Progress', value: 300 },
    { name: 'Failed', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Layout>
      <main className='main-container'>
        <div className='main-title'>
          <h3>DASHBOARD</h3>
        </div>
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>EMPLOYEE</h3>
              <BsPerson className='card_icon' />
            </div>
            <h1>100</h1>
          </div>
        <div className='charts'>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={6}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          </div>
      </main>
    </Layout>
  );
};

export default MyProjects
*/