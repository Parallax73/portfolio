import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';

const projectsData = {
  klibras: {
    name: 'KLibras',
    description: 'Aplicativo educacional para aprendizado de Libras (Língua Brasileira de Sinais)',
    fullDescription: [
      'O KLibras é um sistema completo para ensino e aprendizado de Libras, composto por três componentes principais: aplicativo mobile, API backend e modelo de machine learning.',
      'O aplicativo mobile desenvolvido em Kotlin permite que usuários pratiquem sinais em Libras usando a câmera do dispositivo. O sistema utiliza reconhecimento de gestos em tempo real para validar se o sinal está correto.',
      'A API backend em Python gerencia autenticação, progresso do usuário, banco de dados de sinais e comunicação com o modelo de IA. Utiliza Flask e está containerizada com Docker para fácil deployment.',
      'O modelo de machine learning foi treinado com milhares de imagens de sinais em Libras e consegue reconhecer e classificar gestos com alta precisão. A landing page em TypeScript apresenta o projeto e permite download do app.',
    ],
    tech: ['Kotlin', 'Python', 'TypeScript', 'Docker', 'TensorFlow', 'Flask'],
    video: '/KLibras.mp4',
    isMobileVideo: true,
    links: [
      { name: 'App Mobile', url: 'https://github.com/KLibras/KLibras' },
      { name: 'API Backend', url: 'https://github.com/KLibras/klibras-api' },
      { name: 'Modelo ML', url: 'https://github.com/KLibras/model' },
      { name: 'Website', url: 'https://klibras.me' },
    ],
  },
  mozukai: {
    name: 'Mozukai',
    description: 'Aplicação web para cultivo e gestão de bonsais com pipeline de fotogrametria',
    fullDescription: [
      'Mozukai é uma plataforma web inovadora que combina a arte milenar do cultivo de bonsais com tecnologia de ponta em fotogrametria e modelagem 3D.',
      'Os usuários podem fazer upload de múltiplas fotos de seus bonsais de diferentes ângulos. O sistema processa essas imagens através de um pipeline de fotogrametria que gera modelos 3D detalhados das árvores.',
      'A plataforma permite acompanhar o crescimento dos bonsais ao longo do tempo, comparando modelos 3D de diferentes períodos. É possível visualizar os modelos em 3D diretamente no navegador.',
      'Implementado com TypeScript no frontend para interface interativa, Python no backend para processamento de imagens, e bibliotecas especializadas para reconstrução 3D.',
    ],
    tech: ['TypeScript', 'Python', 'React', 'Three.js', 'OpenCV'],
    video: '/Mozukai.mp4',
    isMobileVideo: false,
    links: [
      { name: 'Repositório GitHub', url: 'https://github.com/Parallax73/Mozukai' },
    ],
  },
  realtour: {
    name: 'Realtour',
    description: 'Aplicação fullstack para mercado imobiliário com funcionalidades 3D',
    fullDescription: [
      'Realtour é uma solução completa para o mercado imobiliário que revoluciona a forma como propriedades são apresentadas e gerenciadas online.',
      'O sistema permite que corretores e imobiliárias cadastrem propriedades com descrições detalhadas, fotos, vídeos e modelos 3D para tours virtuais imersivos.',
      'Desenvolvido com Spring Boot no backend, oferece APIs RESTful robustas, autenticação JWT, e gerenciamento completo de usuários e propriedades. O frontend em Angular proporciona uma experiência fluida e responsiva.',
      'Usuários podem fazer tours virtuais 360°, ver plantas baixas interativas, e usar filtros avançados para encontrar a propriedade ideal.',
    ],
    tech: ['Java', 'Spring Boot', 'TypeScript', 'Angular', 'PostgreSQL', 'Three.js'],
    video: '/Realtour.mp4',
    isMobileVideo: false,
    links: [
      { name: 'Repositório GitHub', url: 'https://github.com/Parallax73/Realtour' },
    ],
  },
  soundle: {
    name: 'Soundle',
    description: 'Jogo de adivinhação de músicas inspirado no Wordle',
    fullDescription: [
      'Soundle é um jogo diário viciante que desafia jogadores a descobrirem a música do dia ouvindo pequenos trechos, inspirado no sucesso do Wordle.',
      'Utilizando a API do Spotify, o jogo apresenta uma música diferente a cada dia. Os jogadores têm 6 tentativas para adivinhar corretamente, com cada tentativa revelando um pouco mais da música.',
      'O backend em Java Spring Boot gerencia autenticação com Spotify, seleção de músicas, sistema de pontuação e ranking de jogadores. O frontend Angular oferece interface intuitiva e animações suaves.',
      'Inclui sistema de streak (dias consecutivos jogando), estatísticas pessoais, e possibilidade de compartilhar resultados nas redes sociais sem spoilers.',
    ],
    tech: ['Java', 'Spring Boot', 'TypeScript', 'Angular', 'Spotify API', 'PostgreSQL'],
    video: '/Soundle.mp4',
    isMobileVideo: false,
    links: [
      { name: 'Repositório GitHub', url: 'https://github.com/Parallax73/Soundle' },
    ],
  },
  weaselc: {
    name: 'Weasel Compiler',
    description: 'Compilador completo para a linguagem Weasel desenvolvido em Rust',
    fullDescription: [
      'Weaselc é um compilador completo implementado em Rust para a linguagem de programação Weasel, desenvolvido como projeto acadêmico de teoria de compiladores.',
      'O compilador implementa todas as fases clássicas: análise léxica (tokenização), análise sintática (parsing), análise semântica (type checking), otimização e geração de código.',
      'Utiliza as vantagens do Rust para garantir segurança de memória e performance. A arquitetura modular permite fácil extensão e manutenção do código.',
      'Inclui mensagens de erro detalhadas e amigáveis, suporte a debugging, e documentação completa da linguagem Weasel e da implementação do compilador.',
    ],
    tech: ['Rust', 'LLVM'],
    video: '/weasel.mp4',
    isMobileVideo: false,
    links: [
      { name: 'Repositório GitHub', url: 'https://github.com/Parallax73/weaselc' },
    ],
  },
  yanjiu: {
    name: 'Yanjiu',
    description: 'Sistema de flashcards inteligente baseado em terminal',
    fullDescription: [
      'Yanjiu (研究 - "estudo" em chinês) é uma ferramenta minimalista e eficiente de flashcards que roda diretamente no terminal, perfeita para desenvolvedores e entusiastas de linha de comando.',
      'Implementa o algoritmo de repetição espaçada (Spaced Repetition System - SRS) baseado no método SuperMemo, otimizando o tempo de estudo ao focar nas informações que você está prestes a esquecer.',
      'Desenvolvido inteiramente em Rust, oferece performance excepcional e binário leve. Suporta markdown nos cards, organização por decks, estatísticas detalhadas e sincronização entre dispositivos via Git.',
      'Interface TUI (Text User Interface) intuitiva com navegação por teclado, tema customizável, e modo de estudo focado sem distrações. Ideal para aprender idiomas, vocabulário técnico, ou qualquer conteúdo que exija memorização.',
    ],
    tech: ['Rust', 'TUI'],
    video: '/yanjiu.mp4',
    isMobileVideo: false,
    links: [
      { name: 'Repositório GitHub', url: 'https://github.com/Parallax73/yanjiu' },
    ],
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div>
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
        <div className="project-detail-page">
          <h1>Projeto não encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
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

      <div className="project-detail-page">
        <Link to="/projetos" className="back-button">
          ← Voltar para Projetos
        </Link>

        <div className="project-detail-header">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>

        {project.video && (
          <div className={`project-detail-video ${project.isMobileVideo ? 'project-detail-video-mobile' : ''}`}>
            <video controls autoPlay loop muted>
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        )}

        <div className="project-detail-content">
          <div className="project-detail-description">
            <h2>Sobre o Projeto</h2>
            {project.fullDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="project-detail-sidebar">
            <h3>Tecnologias</h3>
            <div className="project-detail-tech">
              {project.tech.map((tech) => (
                <div key={tech} className="tech-icon" title={tech}>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`}
                    alt={tech}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>

            <h3>Links</h3>
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;