import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsPerson, BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill } from 'react-icons/bs';
import Layout from '../Components/Layout'; 
import { Routes } from 'react-router-dom';



const Home = () => {
  const data = [
    { name: 'Completed', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'In Progress', value: 300 },
    
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
          <div className='card'>
            <div className='card-inner'>
              <h3>PROJECTS</h3>
              <BsFillGrid3X3GapFill className='card_icon' />
            </div>
            <h1>12</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>PENDING PROJECTS</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>2</h1>
          </div>
        </div>
        
      </main>
    </Layout>
  );
};

export default Home
