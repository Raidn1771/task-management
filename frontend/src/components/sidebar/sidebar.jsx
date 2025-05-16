import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './sidebar.css';

const Sidebar = ({ onImpClick, onFilterClick, onHomeClick, activeRow }) => {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setFname(parsedUser.fname || '');
      } catch (e) {
        console.error('Failed to parse user from localStorage', e);
      }
    }
  }, []);

  return (
    <div className="sidebar">
      <ol>
        <li
          className={`sidebar-row ${activeRow === 'home' ? 'active' : ''}`}
          onClick={onHomeClick}
        >
          <i className="fa-solid fa-house"></i>
          &nbsp;&nbsp;Home
        </li>

        <li
          className={`sidebar-row ${activeRow === 'important' ? 'active' : ''}`}
          onClick={onImpClick}
        >
          <i className="fa-regular fa-star"></i>&nbsp;&nbsp;Sort By Important
        </li>

        <li
          className={`sidebar-row ${activeRow === 'filter' ? 'active' : ''}`}
          onClick={onFilterClick}
        >
          <i className="fa-brands fa-slack"></i>&nbsp;&nbsp;Filter Important
          Only
        </li>

        <li className="sidebar-row">
          <i className="fa-regular fa-address-book"></i>&nbsp;&nbsp;Contact
        </li>
      </ol>

      <div className="sign" onClick={() => navigate('/login')}>
        <h2>
          <i className="fa-regular fa-user fa-bounce"></i>
          &nbsp;&nbsp;{fname ? fname : 'Account'}
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
