import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import ProjectsList from './ProjectsList';
import ProjectDetail from './ProjectDetail';
import Curriculo from './Curriculo';
import Contato from './Contato';
import SplitText from "./SplitText";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectsList />} />
        <Route path="/projeto/:id" element={<ProjectDetail />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projeto/${projectId}`);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            Gabriel Leite
          </Link>
          <nav className="nav">
            <Link to="/projetos">Projetos</Link>
            <Link to="/curriculo">Currículo</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </header>

      <section className="section hero-section">
        <div className="hero-content-grid">
          <div className="hero-left">
            <SplitText
              text="Gabriel Leite"
              tag="h1"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <p>Software Engineer</p>
          </div>
          <div className="hero-right">
            <p className="hero-description">
              Full-stack Developer graduando em Ciência da Computação com experiência em desenvolvimento web utilizando
              Spring Boot, React e FastAPI. Histórico comprovado em liderança de equipes e entrega de projetos com prazos
              rigorosos. Fluente em inglês e apaixonado por criar soluções inovadoras que resolvem problemas reais. Buscando
              oportunidade para contribuir como desenvolvedor Back-end ou Full-stack.
            </p>
          </div>
        </div>
      </section>

      <section className="section project-section" id="projetos">
        <div className="project-content">
          <div className="project-info">
            <h2>KLibras</h2>
            <p className="project-description">
              Aplicativo educacional para aprendizado de Libras (Língua Brasileira de Sinais) 
              utilizando reconhecimento de gestos por IA. Sistema completo com app mobile, 
              API backend e modelo de machine learning para detecção e tradução de sinais em tempo real.
              {' '}
              <a 
                href="https://klibras.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Visite o site →
              </a>
            </p>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="Kotlin">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" />
                </div>
                <div className="tech-icon" title="Python">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <div className="tech-icon" title="TypeScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                </div>
                <div className="tech-icon" title="Docker">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                </div>
              </div>
            </div>
          </div>
          <div className="project-video project-video-mobile" onClick={() => handleProjectClick('klibras')}>
            <video autoPlay loop muted playsInline>
              <source src="/KLibras.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section project-section">
        <div className="project-content reverse">
          <div className="project-info">
            <h2>Mozukai</h2>
            <p className="project-description">
              Aplicação web para cultivo e gestão de bonsais com pipeline de fotogrametria. 
              Permite criar modelos 3D de bonsais através de múltiplas fotografias, 
              acompanhar crescimento e compartilhar com comunidade.
            </p>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="TypeScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                </div>
                <div className="tech-icon" title="Python">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <div className="tech-icon" title="React">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                </div>
              </div>
            </div>
          </div>
          <div className="project-video" onClick={() => handleProjectClick('mozukai')}>
            <video autoPlay loop muted playsInline>
              <source src="/Mozukai.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section project-section">
        <div className="project-content">
          <div className="project-info">
            <h2>Realtour</h2>
            <p className="project-description">
              Aplicação fullstack para mercado imobiliário usando Spring Boot e Angular. 
              Possui funcionalidades de visualização 3D de imóveis, tours virtuais, 
              gestão de propriedades e sistema completo de autenticação.
            </p>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="Java">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>
                <div className="tech-icon" title="TypeScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                </div>
                <div className="tech-icon" title="Angular">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" />
                </div>
                <div className="tech-icon" title="Spring">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
                </div>
              </div>
            </div>
          </div>
          <div className="project-video" onClick={() => handleProjectClick('realtour')}>
            <video autoPlay loop muted playsInline>
              <source src="/Realtour.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section project-section">
        <div className="project-content reverse">
          <div className="project-info">
            <h2>Soundle</h2>
            <p className="project-description">
              Jogo de adivinhação de músicas usando a API do Spotify. 
              Desafios diários com tentativas limitadas, sistema de pontuação e 
              compartilhamento de resultados. Similar ao Wordle mas para música.
            </p>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="Java">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>
                <div className="tech-icon" title="TypeScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                </div>
                <div className="tech-icon" title="Angular">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" />
                </div>
              </div>
            </div>
          </div>
          <div className="project-video" onClick={() => handleProjectClick('soundle')}>
            <video autoPlay loop muted playsInline>
              <source src="/Soundle.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section project-section">
        <div className="project-content">
          <div className="project-info">
            <h2>Weasel Compiler</h2>
            <p className="project-description">
              Compilador para a linguagem Weasel desenvolvido em Rust. 
              Implementa análise léxica, sintática, semântica e geração de código. 
              Projeto acadêmico focado em teoria de compiladores e otimização.
            </p>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="Rust">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" alt="Rust" />
                </div>
              </div>
            </div>
          </div>
          <div className="project-video" onClick={() => handleProjectClick('weaselc')}>
            <video autoPlay loop muted playsInline>
              <source src="/weasel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section project-section">
        <div className="project-content reverse">
          <div className="project-info">
            <h2>Yanjiu</h2>
            <p className="project-description">
              Ferramenta de flashcards baseada em terminal desenvolvida em Rust. 
              Sistema de repetição espaçada para otimizar memorização, 
              interface minimalista e eficiente para estudo de idiomas e conceitos.
            </p>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="Rust">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" alt="Rust" />
                </div>
              </div>
            </div>
          </div>
          <div className="project-video" onClick={() => handleProjectClick('yanjiu')}>
            <video autoPlay loop muted playsInline>
              <source src="/yanjiu.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;