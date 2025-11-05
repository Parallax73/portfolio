import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const projects = [
  {
    id: 'klibras',
    name: 'KLibras',
    description: 'Aplicativo educacional para aprendizado de Libras utilizando reconhecimento de gestos por IA.',
  },
  {
    id: 'mozukai',
    name: 'Mozukai',
    description: 'Aplicação web para cultivo e gestão de bonsais com pipeline de fotogrametria.',
  },
  {
    id: 'realtour',
    name: 'Realtour',
    description: 'Aplicação fullstack para mercado imobiliário com visualização 3D de imóveis.',
  },
  {
    id: 'soundle',
    name: 'Soundle',
    description: 'Jogo de adivinhação de músicas usando a API do Spotify com desafios diários.',
  },
  {
    id: 'weaselc',
    name: 'Weasel Compiler',
    description: 'Compilador para a linguagem Weasel desenvolvido em Rust.',
  },
  {
    id: 'yanjiu',
    name: 'Yanjiu',
    description: 'Ferramenta de flashcards baseada em terminal para estudo eficiente.',
  },
];

function ProjectsList() {
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

      <div className="projects-list-page">
        <h1>Projetos</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projeto/${project.id}`}
              className="project-card"
            >
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;