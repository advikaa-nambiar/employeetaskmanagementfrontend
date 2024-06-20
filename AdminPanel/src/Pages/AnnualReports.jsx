import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Layout from '../Components/Layout'; // Adjust the path as needed

const AnnualReports = () => {
  const data = [
    { name: 'Completed', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'In Progress', value: 300 },
    
  ];

  const COLORS = ['#0c0a38', '#37495c', '#24894c'];

  return (
    <Layout>
      <main className='main-container'>
        <div className='main-title'>
          <h3>ANNUAL REPORTS</h3>
        </div>
        <div className='chart-container'>
          <ResponsiveContainer width="50%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={5}
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
          {/* <div className='chart-description'>
            <h4 style={{ color: '#0c0a38' }}>Description</h4>
            <p style={{ color: '#24894c' }}>This chart represents the annual status of the projects:</p>
           
          </div> */}
        </div>
      </main>
    </Layout>
  );
};

export default AnnualReports;
