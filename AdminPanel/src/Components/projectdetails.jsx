// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Layout from '../Components/Layout';

// const ProjectDetails = () => {
//   const { projectId } = useParams();

//   const projects = {
//     'project-a': { 
//       name: 'Project A', 
//       details:'Our company is proud to introduce the Next-Gen Customer Relationship Management (CRM) Platform,\n a comprehensive solution designed to revolutionize how businesses manage customer interactions and data. \nThis platform leverages advanced analytics, artificial intelligence, and seamless integration capabilities to provide an unparalleled user experience and drive business growth.', 
//       status: 'Completed' 
//     },
//     'project-b': { 
//         name: 'Project B',
//         details: 'Developing an AI-driven chatbot to provide 24/7 customer support for a global e-commerce platform.\n The chatbot uses natural language processing (NLP) to understand and respond to customer inquiries, improving response times and customer satisfaction.\n It integrates with existing CRM systems and learns from interactions to continuously enhance its performance.', 
//         status: 'In Progress' 
//       },
//     'project-c': { 
//         name: 'Project C',
//        details: 'Upgrading a mobile banking application with new features including biometric authentication, real-time transaction alerts, and personalized financial insights. \n The project aims to enhance user security and experience, while ensuring compliance with the latest financial regulations. \n The app will also offer seamless integration with third-party financial services.',
//         status: 'Pending'
//        },
//     'project-d': {
//        name: 'Project D',
//         details: 'Creating a cloud-based project management solution for remote teams, featuring task tracking, collaboration tools, and automated reporting.\n This tool will enable better project visibility and resource management, helping teams stay organized and on schedule. \n The project involves ensuring data security and scalability to accommodate growing user bases.',
//          status: 'Almost done' },
//   };
  
//   const project = projects[projectId];

//   return (
//     <Layout>
//       <main className='main-container'>
//         <div className='main-title'>
//           <h3>{project.name}</h3>
//         </div>
//         <div className='project-details'>
//           {project.details.split('\n').map((line, index) => (
//             <p key={index}>{line}</p>
//           ))}
//           <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
//         </div>
//       </main>
//     </Layout>
//   );
// };

// export default ProjectDetails;