import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Contato() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            Portfolio
          </Link>
          <nav className="nav">
            <Link to="/projetos">Projetos</Link>
            <Link to="/curriculo">Currículo</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </header>

      <div className="contact-page">
        <h1>Contato</h1>
        <p className="contact-subtitle">Vamos conversar sobre projetos, oportunidades ou tecnologia!</p>

        <div className="contact-grid">
          <a href="mailto:gabrielsantos0210@gmail.com" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email</h3>
            <p>gabrielsantos0210@gmail.com</p>
          </a>

          <a href="https://linkedin.com/in/gabriel-santos-leite" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>gabriel-santos-leite</p>
          </a>

          <a href="https://github.com/Parallax73" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <h3>GitHub</h3>
            <p>Parallax73</p>
          </a>

          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Localização</h3>
            <p>São Paulo, Brasil</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;