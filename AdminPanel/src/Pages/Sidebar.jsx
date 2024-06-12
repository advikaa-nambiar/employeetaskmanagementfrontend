import React from 'react';
import { BsHouse, BsPerson, BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill, BsMenuButtonWideFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebarContainer" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsHouse className='icon_header' /> DASHBOARD
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsPerson className='icon' /> My Projects
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillArchiveFill className='icon' /> Project details
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGrid3X3GapFill className='icon' /> Allocations
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsMenuButtonWideFill className='icon' /> Annual Reports
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar