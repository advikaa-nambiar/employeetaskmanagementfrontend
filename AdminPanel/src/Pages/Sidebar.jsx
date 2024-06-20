import React from 'react';
import { BsHouse, BsPerson, BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill, BsMenuButtonWideFill, Bs0SquareFill, BsArrow90DegDown, BsLampFill, BsBox2Fill, BsNewspaper, BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebarContainer" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
        {/* <Link to="/home">
          <BsHouse className='icon_header' /> DASHBOARD
          </Link> */}
        </div>
        <span className='close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
      <Link to="/home">
          <BsHouse className='icon_header' /> HOME
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/my-projects">
            <BsPersonFill className='icon' /> My Projects
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/project-allocations">
            <BsNewspaper className='icon' /> New Projects
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/all-projects">
            <BsFillArchiveFill className='icon' /> All Projects
          </Link>
        </li>
        
        <li className='sidebar-list-item'>
        <Link to="/annual-reports">
            <BsMenuButtonWideFill className='icon' /> Annual Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar
