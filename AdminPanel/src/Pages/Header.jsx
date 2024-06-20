import React, { useState } from 'react';
import { BsJustify, BsPersonCircle, BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Header({ OpenSidebar, userName }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    switch (lowerCaseSearchTerm) {
      case 'new projects':
        navigate('/new-projects');
        break;
      case 'my projects':
        navigate('/my-projects');
        break;
      case 'annual reports':
        navigate('/annual-reports');
        break;
      case 'home':
      case 'dashboard':
        navigate('/home');
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    // Clear user session data (e.g., remove token, clear localStorage, etc.)
    // Redirect to login page
    navigate('/');
  };

  return (
    <header className='headerContainer'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        {/* <BsSearch className='icon2' /> */}
        <form onSubmit={handleSearch}>
          {/* <input
            type="text"
            size="10"
            name="icon"
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
        </form>
      </div>
      <div className='header-right'>
        <span>{userName}</span>
        <BsPersonCircle 
          className='icon' 
          onClick={() => setShowDropdown(!showDropdown)} 
          style={{ cursor: 'pointer', position: 'relative' }}
        />
        {showDropdown && (
          <div className='dropdown-menu'>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
