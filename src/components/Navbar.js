import React from 'react';

export default function Navbar({ theme, toggleTheme, name }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top border-bottom py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 gradient-text" href="#home">
          {name}
        </a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className={`bi bi-list fs-2 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 gap-lg-3 fw-medium">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <button 
            className="btn btn-outline-primary rounded-circle p-2" 
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
          >
            <i className={`bi bi-${theme === 'dark' ? 'sun-fill' : 'moon-stars-fill'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}