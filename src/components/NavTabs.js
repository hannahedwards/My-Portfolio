import React from 'react';
import myImage from './images/me.png';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav nav-tabs bg-purple-300">
        <li className="nav-item border-solid border-2 border-purple-300 rounded-lg">
          <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
            About Me
          </a>
        </li>
        <li className="nav-item border-solid border-2 border-purple-300 rounded-lg">
          <a
            href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >
            Portfolio
          </a>
        </li>
        <li className="nav-item border-solid border-2 border-purple-300 rounded-lg">
          <a
            href="#blog" onClick={() => handlePageChange('Blog')} className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>
        <li className="nav-item border-solid border-2 border-purple-300 rounded-lg">
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
