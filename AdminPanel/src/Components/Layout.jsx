import React, { useState } from 'react';
import Sidebar from '../Pages/Sidebar'; // Ensure this path is correct
import Header from '../Pages/Header'; // Ensure this path is correct
import './Layout.css'; // Ensure this path is correct

const Layout = ({ children }) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="layout">
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={handleSidebarToggle} />
      {/* <div>hi this is sidebar</div> */}
      <div className={`main-content ${openSidebarToggle ? 'sidebar-open' : ''}`}>
        <Header OpenSidebar={handleSidebarToggle} />
        {children}
      </div>
    </div>
  );
};

export default Layout;

/*

import React, { useState } from 'react';
import Sidebar from '../Pages/Sidebar'; // En
import Header from '../Pages/Header'; // Ensu
import './Layout.css'; // Ensure this path is

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;
*/