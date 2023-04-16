import React from 'react';
import myImage from './images/me.png';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav nav-tabs bg-red-300/25 grid grid-cols-4">
        <li className="nav-item border-solid border-t-2 border-l-2 border-r-2 border-red-200 rounded">
          <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
            About Me
          </a>
        </li>
        <li className="nav-item border-solid border-t-2 border-l-2 border-r-2 border-red-200 rounded">
          <a
            href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >
            My Projects
          </a>
        </li>
        <li className="nav-item border-solid border-t-2 border-l-2 border-r-2 border-red-200 rounded">
          <a
            href="#blog" onClick={() => handlePageChange('Blog')} className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>
        <li className="nav-item border-solid border-t-2 border-l-2 border-r-2 border-red-200 rounded">
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} >
            Contact
          </a>
        </li>
      </ul>
      <div className=' mx-auto px-1 flex bg-red-300/50'>
        <img src={myImage} alt="me" width="200" height="220" />
        <div>
        <p className='text-6xl font-bold text-white pt-20 pl-10'>Hannah Edwards</p>
        </div>
      </div>
    </div>
    
  );
}

export default NavTabs;
