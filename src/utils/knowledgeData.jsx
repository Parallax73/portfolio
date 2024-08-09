import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import {
  SiPython,
  SiSpring,
  SiAngular,
  SiCsharp,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiTypescript
} from "react-icons/si";
import { BsDatabase } from "react-icons/bs";
import { VscGitPullRequest } from "react-icons/vsc";

export const knowledgeData = [
  {
    id: 1,
    content: 'Java é uma linguagem de programação orientada a objetos, amplamente utilizada para desenvolvimento de aplicações web e sistemas corporativos.',
    icon: <FaJava className="text-green w-14 h-14"/>
  },
  {
    id: 2,
    content: 'Python é uma linguagem de programação versátil, conhecida por sua simplicidade e aplicabilidade em diversas áreas como ciência de dados e automação.',
    icon: <SiPython className="text-green w-14 h-14"/>
  },
  {
    id: 3,
    content: 'JavaScript é uma linguagem de programação que possibilita conteúdo dinâmico em sites, facilitando a interatividade e funcionalidades no lado do cliente.',
    icon: <IoLogoJavascript className="text-green w-14 h-14"/>
  },
  {
    id: 4,
    content: 'TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional, ajudando a evitar erros e a melhorar a manutenção do código.',
    icon: <SiTypescript className="text-green w-14 h-14"/>
  },
  {
    id: 5,
    content: 'HTML é uma linguagem de marcação utilizada para criar a estrutura de páginas web, definindo elementos como cabeçalhos, parágrafos e imagens.',
    icon: <TbBrandHtml5 className="text-green w-14 h-14"/>
  },
  {
    id: 6,
    content: 'CSS é uma linguagem de folha de estilo usada para controlar a apresentação dos elementos HTML, aprimorando aspectos visuais como layout e design.',
    icon: <TbBrandCss3 className="text-green w-14 h-14"/>
  },
  {
    id: 7,
    content: 'SQL é uma linguagem de consulta usada para gerenciar e manipular bancos de dados relacionais.',
    icon: <BsDatabase className="text-green w-14 h-14"/>
  },
  {
    id: 8,
    content: 'C é uma linguagem de programação de baixo nível, usada principalmente em sistemas operacionais e desenvolvimento de sistemas embarcados.',
    icon: <SiCsharp className="text-green w-14 h-14"/>
  },
  {
    id: 11,
    content: 'Spring Framework é uma estrutura robusta para criação de aplicações Java, especialmente para desenvolvimento de microserviços e sistemas empresariais.',
    icon: <SiSpring className="text-green w-14 h-14"/>
  },
  {
    id: 12,
    content: 'Angular é uma plataforma e framework para construir aplicações web de página única, usando TypeScript como principal linguagem de programação.',
    icon: <SiAngular className="text-green w-14 h-14"/>
  },
  {
    id: 14,
    content: 'MongoDB é um banco de dados NoSQL que armazena dados em documentos JSON, facilitando a escalabilidade e flexibilidade em aplicações modernas.',
    icon: <SiMongodb className="text-green w-14 h-14"/>
  },
  {
    id: 15,
    content: 'Redis é um banco de dados em memória, usado principalmente como cache ou sistema de mensagens, conhecido por sua alta performance.',
    icon: <SiRedis className="text-green w-14 h-14"/>
  },
  {
    id: 16,
    content: 'MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) usado para armazenar e gerenciar dados estruturados, comumente utilizado em aplicações web.',
    icon: <DiMysql className="text-green w-14 h-14"/>
  },
  {
    id: 17,
    content: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional, conhecido por sua conformidade com os padrões SQL e suporte a extensões avançadas.',
    icon: <SiPostgresql className="text-green w-14 h-14"/>
  },
  {
    id: 18,
    content: 'Git é um sistema de controle de versão distribuído, essencial para o gerenciamento de código em projetos de software, permitindo o rastreamento de mudanças e colaboração.',
    icon: <VscGitPullRequest className="text-green w-14 h-14"/>
  }
];
