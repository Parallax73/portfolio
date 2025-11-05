import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Curriculo() {
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

      <div className="cv-page">
        <h1>Currículo</h1>

        <section className="cv-section">
          <h2>Habilidades Técnicas</h2>
          <div className="cv-skills">
            <div className="skill-category">
              <h3>Back-end</h3>
              <p>Java (Spring Boot, Maven), Python (FastAPI), RESTful APIs, autenticação JWT</p>
            </div>
            <div className="skill-category">
              <h3>Front-end</h3>
              <p>React, Angular, TypeScript, HTML5, CSS3, design responsivo</p>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <p>PostgreSQL, MySQL, MongoDB, design de schemas, otimização de queries</p>
            </div>
            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <p>Docker, Git/GitHub, Linux, CI/CD, AWS (básico), Postman</p>
            </div>
            <div className="skill-category">
              <h3>Outras</h3>
              <p>Rust, Machine Learning (TensorFlow, Mediapipe), Figma</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Educação</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Faculdades Metropolitanas Unidas</h3>
              <span className="cv-date">Jan 2022 – Dec 2025</span>
            </div>
            <p className="cv-subtitle">Bacharelado em Ciência da Computação</p>
            <p>Coursework: Estruturas de Dados, Algoritmos Avançados, Desenvolvimento Web, Engenharia de Software, Banco de Dados, Redes de Computadores</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>ETEC Carapicuíba</h3>
              <span className="cv-date">2019 – 2021</span>
            </div>
            <p className="cv-subtitle">Técnico em Jogos Digitais</p>
            <p>Coursework: Modelos/Animação 3D, Programação para Web, Estrutura de Dados</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Cultura Inglesa</h3>
              <span className="cv-date">2019 – 2021</span>
            </div>
            <p className="cv-subtitle">Certificação de Proficiência em Inglês</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Experiência Profissional</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Estagiário de Desenvolvimento Web</h3>
              <span className="cv-date">Jul 2025 – Momento</span>
            </div>
            <p className="cv-subtitle">EMOTEC – São Paulo, SP</p>
            <ul>
              <li>Desenvolvi features para aplicação web em parceria com UNIFESP, implementando 15+ componentes reutilizáveis em HTML/CSS que melhoraram a consistência da UI em 40%</li>
              <li>Construí 8 endpoints RESTful em Spring Boot com validação de dados e tratamento de erros, reduzindo bugs em produção em 30%</li>
              <li>Integrei front-end com back-end utilizando Fast API, implementando autenticação JWT e gerenciamento de estado</li>
              <li>Otimizei queries SQL que reduziram tempo de resposta de endpoints críticos em 50%</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Operador de Loja</h3>
              <span className="cv-date">Jul 2024 – Jan 2025</span>
            </div>
            <p className="cv-subtitle">Leve Mais – São Paulo, SP</p>
            <ul>
              <li>Realizava recebimento de mercadorias e verificação de notas</li>
              <li>Prestei atendimento direto ao cliente, solucionando dúvidas e problemas</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Agente Censitário Supervisor</h3>
              <span className="cv-date">Ago 2022 - Mar 2023</span>
            </div>
            <p className="cv-subtitle">IBGE – São Paulo, SP</p>
            <ul>
              <li>Liderei equipe de 12 recenseadores cobrindo área com 30.000+ residentes, alcançando 98% de taxa de conclusão</li>
              <li>Auxiliei na formação de +400 recenseadores</li>
              <li>Gerenciei processo completo de recrutamento, treinamento e avaliação de performance da equipe</li>
              <li>Forneci suporte técnico para 15+ dispositivos Android de coleta, resolvendo problemas de conectividade e sincronização de dados</li>
              <li>Implementei sistema de acompanhamento diário que aumentou produtividade em 25%</li>
              <li>Finalizei projeto 2 semanas antes do prazo, garantindo qualidade e integridade dos dados coletados</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2>Projetos em Destaque</h2>
          <div className="cv-item">
            <h3>KLibras</h3>
            <p className="cv-tech">Android Studio, FastAPI, TensorFlow, AWS EC2</p>
            <ul>
              <li>Desenvolvido plataforma de ensino de LIBRAS com reconhecimento de sinais em tempo real usando Machine Learning</li>
              <li>Implementei modelo com TensorFlow e Mediapipe alcançando 96% de acurácia na detecção de sinais</li>
              <li>Criei API RESTful em Python/FastAPI com endpoints para processamento de vídeo e feedback instantâneo ao usuário</li>
              <li>Realizei deploy na AWS EC2 com Docker, configurando CI/CD para atualizações automáticas</li>
              <li>Integrei sistema de fila com RabbitMQ e aio-pika para processar múltiplos modelos simultaneamente, suportando até 4 jobs concorrentes</li>
            </ul>
          </div>

          <div className="cv-item">
            <h3>Mozukai</h3>
            <p className="cv-tech">React, FastAPI, AliceVision, Three.js</p>
            <ul>
              <li>Construído aplicação web full-stack que transforma múltiplas imagens em modelos 3D usando pipeline de fotogrametria</li>
              <li>Implementei front-end em React com visualização 3D interativa usando Three.js e gerenciamento de estado com Context API</li>
              <li>Desenvolvi back-end assíncrono em FastAPI processando uploads de imagens e orquestrando pipeline AliceVision</li>
              <li>Otimizei processamento de imagens reduzindo tempo de geração de modelos 3D de 15min para 8min</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2>Atividades Complementares</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Monitor Voluntário de Programação</h3>
              <span className="cv-date">Jul 2025 – Momento</span>
            </div>
            <p className="cv-subtitle">FMU – São Paulo, SP</p>
            <ul>
              <li>Auxiliei alunos semanalmente em Técnicas de Programação (Java), esclarecendo dúvidas sobre POO e estruturas de dados</li>
              <li>Ajudei alunos a desenvolver boas práticas de programação</li>
              <li>Criei materiais de apoio e exercícios práticos que melhoraram taxa de aprovação da disciplina</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Curriculo;