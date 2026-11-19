export const profiles = {
  "linkedin": "https://www.linkedin.com/in/brunobisogni/",
  "github": "https://github.com/brunodevoceanoazul/portfolio",
  "current": "https://github.com/BrunoBDevOceanoAzul",
  "archive": "https://github.com/brunobisognidev",
  "instagram": "https://www.instagram.com/brunobisogni2/",
  "oceano": "https://oceanoazul.dev.br/",
  "email": "bruno@oceanoazul.dev.br"
};

export const sections = {
  "pt": {
    "home": "",
    "projects": "projetos",
    "data": "dados",
    "freelance": "freelance",
    "press": "clipping",
    "resume": "curriculo"
  },
  "en": {
    "home": "",
    "projects": "projects",
    "data": "data",
    "freelance": "freelance",
    "press": "press",
    "resume": "resume"
  }
};

export const sample = [
  {
    "month": "2026-01",
    "requested": 120,
    "completed": 87
  },
  {
    "month": "2026-02",
    "requested": 150,
    "completed": 108
  },
  {
    "month": "2026-03",
    "requested": 164,
    "completed": 128
  },
  {
    "month": "2026-04",
    "requested": 176,
    "completed": 146
  },
  {
    "month": "2026-05",
    "requested": 189,
    "completed": 157
  },
  {
    "month": "2026-06",
    "requested": 210,
    "completed": 183
  }
];

export const query = "SELECT month,\n       SUM(requested) AS requested,\n       SUM(completed) AS completed,\n       ROUND(100.0 * SUM(completed)\n         / NULLIF(SUM(requested), 0), 1) AS completion_pct\nFROM request_metrics\nGROUP BY month\nORDER BY month;";

export const content = {
  "pt": {
    "lang": "pt-BR",
    "skip": "Pular para o conteúdo",
    "nav": {
      "home": "Início",
      "projects": "Projetos",
      "data": "Dados",
      "freelance": "Freelance",
      "press": "Clipping",
      "resume": "Currículo"
    },
    "language": "Idioma",
    "primary": "Navegação principal",
    "contact": "Contato",
    "location": "Campinas, SP · Brasil",
    "eyebrow": "Engenharia de software · Backend · Dados",
    "headline": [
      "Código, arquitetura",
      "e entrega de produto."
    ],
    "intro": "Sou Bruno de Araújo Bisogni, desenvolvedor sênior e tech lead. Reúno mais de 12 anos de trajetória em tecnologia e produto, com experiência recente em TypeScript, Python, APIs e dados. Trabalho com equipes de negócio e especialistas para transformar requisitos em software.",
    "cta": "Explorar projetos",
    "paths": [
      [
        "resume",
        "Para recrutadores",
        "Experiência sênior, currículo e referências para avaliar código, arquitetura e liderança técnica."
      ],
      [
        "data",
        "Para equipes de dados",
        "Conheça meu trabalho com BigQuery e Power BI e explore uma amostra de análise em SQL."
      ],
      [
        "freelance",
        "Para clientes",
        "Vamos definir e construir um MVP, uma integração ou um painel para apoiar decisões."
      ]
    ],
    "featured": "Produtos que ajudei a construir",
    "viewAll": "Ver todos os projetos",
    "trajectory": "Engenharia com contexto de negócio",
    "bio": "Minha formação em Design de Jogos e Mídias Interativas me aproximou de sistemas interativos e experiência de uso. Trabalhei com integrações, equipes de software e dados antes de fundar a Oceano Azul. Hoje desenvolvo produtos de saúde, segurança pessoal e comunidades, combinando implementação com definição de prioridades.",
    "closing": "Vamos conversar?",
    "projectsIntro": "Meu papel, a implementação e as ferramentas de cada produto. Os projetos públicos completos têm código, instruções de execução e referências de autoria.",
    "projectList": [
      [
        "iris",
        "ÍRIS",
        "Produto · Fundador e Tech Lead",
        "Desenvolvo uma plataforma de segurança pessoal para mulheres com API em NestJS organizada como monólito modular. Minha atuação abrange a aplicação web, integrações e fluxos de consentimento, além da evolução do produto.",
        "TypeScript · NestJS · Next.js · Drizzle · PostgreSQL · AWS",
        "Relato público do produto"
      ],
      [
        "periscopio",
        "Periscópio",
        "Saúde e educação · Tech Lead e full stack",
        "Lidero a engenharia e implemento o fluxo entre escola e saúde, desde formulários até encaminhamentos e histórico do caso. O backend é um monólito em Fastify, com rotas e responsabilidades organizadas na mesma aplicação.",
        "TypeScript · Next.js · Fastify · Drizzle · PostgreSQL",
        "Relato sobre a construção do MVP"
      ],
      [
        "hivium",
        "HIVIUM / Sócio do Tabuleiro",
        "SaaS e marketplace · Fundador e CTO",
        "Liderei a evolução da operação de aluguel de jogos para plataforma digital, com integrações de logística e contratos. Na HIVIUM, desenhei a arquitetura do produto sucessor para comunidades de RPG e jogos.",
        "React · APIs · GCP · Arquitetura de produto",
        "Relato do lançamento beta"
      ],
      [
        "radar",
        "Radar Jurídico",
        "Produto interno · Backend e dados",
        "Trabalho com backend Python, integração de consultas jurídicas e desenho de uma política de consulta em camadas para controlar o uso de provedores pagos. O escopo inclui modelagem de dados e rastreabilidade das consultas.",
        "Python · FastAPI · SQLAlchemy · PostgreSQL · APIs",
        "Trajetória profissional"
      ],
      [
        "oceano",
        "Oceano Azul",
        "Produto publicado · Desenvolvimento e consultoria",
        "Minha consultoria reúne levantamento de requisitos, arquitetura e desenvolvimento. O site apresenta os produtos e os projetos de integrações, saúde, mobilidade e comunidades em que atuei.",
        "Next.js · React · TypeScript · Produto",
        "Visitar o site"
      ],
      [
        "wtime",
        "Dashboards na wtime",
        "Dados · Implementação profissional",
        "Construí dashboards de observabilidade e indicadores com BigQuery e Power BI durante minha atuação como analista sênior, entre 2022 e 2023.",
        "SQL · BigQuery · Power BI",
        "Trajetória e experiência"
      ],
      [
        "levoo",
        "Levoo",
        "Logística · Liderança técnica | 2019–2020",
        "Liderei o projeto de sistema de afiliados e a integração entre uma operação de entregas e sistemas de um banco.",
        "Integrações · APIs · Liderança de implementação",
        "Histórico do projeto"
      ],
      [
        "foodfinder",
        "Food Finder",
        "Varejo · CTO | 2019",
        "Desenhei a integração entre a plataforma e uma rede varejista e gerenciei a equipe de implementação.",
        "Arquitetura de integração · Gestão técnica",
        "Histórico do projeto"
      ],
      [
        "socialball",
        "Social Ball",
        "Produto digital · Liderança técnica | 2014–2016",
        "Na ABCE Service, liderei o time técnico ligado ao Social Ball e ao trabalho de transição dos canais offline para online.",
        "Produto digital · Implementação web · Liderança técnica",
        "Histórico do projeto"
      ],
      [
        "portfolio",
        "Portfólio bilíngue",
        "Aplicação pública · Código completo",
        "Site em Next.js com páginas em português e inglês, rotas geradas estaticamente, metadados por idioma, currículo para impressão e publicação automatizada no GitHub Pages.",
        "Next.js · React · JavaScript · CSS · GitHub Actions",
        "Código completo e instruções"
      ],
      [
        "agenda",
        "Agenda SUS",
        "GovTech · Protótipo de hackathon",
        "Proposta coletiva de agendamento e reorganização de filas, apresentada no 2º Hackathon IMA Campinas em 2017.",
        "Prototipagem · Fluxos de atendimento",
        "Histórico do hackathon"
      ],
      [
        "bus",
        "Like a Bus",
        "Mobilidade · Protótipo de hackathon",
        "Projeto em equipe que usava reconhecimento de imagem para estimar a ocupação de ônibus. Primeiro lugar no Hack in Sampa 3, em 2019.",
        "Reconhecimento de imagem · Mobilidade",
        "Repositório histórico"
      ],
      [
        "stock",
        "Mapa de estoques do SUS",
        "Saúde pública · Protótipo de hackathon",
        "Protótipo coletivo de mapa de calor para explorar o risco de falta de medicamentos em unidades de saúde ao longo do tempo.",
        "Georreferenciamento · Visualização de dados",
        "Repositório histórico"
      ]
    ],
    "dataIntro": "Análise de dados para investigar operações, acompanhar indicadores e transformar perguntas de produto em métricas que uma equipe consegue usar.",
    "dataWork": "Experiência e projetos",
    "dataCases": [
      [
        "wtime · Customer Insights",
        "Analista sênior entre 2022 e 2023. Trabalhei com indicadores de observabilidade e painéis em BigQuery e Power BI.",
        "https://oceanoazul.dev.br/",
        "Histórico profissional"
      ],
      [
        "Mapa de estoques do SUS",
        "Protótipo que combinou informações de estoque, consumo e localização para visualizar risco de falta de medicamentos.",
        "https://github.com/brunobisognidev/hacksus",
        "Código histórico"
      ]
    ],
    "sampleTitle": "Amostra de análise em SQL",
    "sampleIntro": "Exemplo independente com dados fictícios. A pergunta é como a taxa de conclusão de solicitações mudou ao longo de seis meses.",
    "sampleMethod": "A taxa divide solicitações concluídas pelo total recebido em cada mês. Para consolidar o período, divida a soma das concluídas pela soma das recebidas.",
    "table": [
      "Mês",
      "Recebidas",
      "Concluídas",
      "Taxa"
    ],
    "download": "Baixar dados fictícios em CSV",
    "sql": "Ver consulta SQL",
    "freelanceIntro": "Posso ajudar a organizar um produto que ainda está no papel ou assumir uma parte bem definida de uma entrega em andamento.",
    "services": [
      [
        "Discovery e plano de MVP",
        "Entrevistas, definição de prioridades e um plano de entrega com critérios claros para testar as primeiras hipóteses."
      ],
      [
        "Desenvolvimento e integrações",
        "Aplicações web, APIs e integrações, com documentação para a equipe que vai operar e manter o software."
      ],
      [
        "Dados e painéis",
        "Definição de métricas, consultas SQL, análise exploratória e painéis para perguntas de produto e operação."
      ]
    ],
    "how": "Como podemos começar",
    "steps": [
      "Conte o problema, para quem é e em que estágio está.",
      "Alinhamos escopo, entregáveis e critérios de aceitação.",
      "Organizamos as entregas e combinamos a passagem para o seu time."
    ],
    "email": "Conversar por e-mail",
    "subject": "Projeto freelance para conversar",
    "resumeTitle": "Desenvolvedor de Software Sênior · Backend e Full Stack",
    "summary": "Desenvolvedor de software sênior e tech lead com mais de 12 anos de trajetória em tecnologia e produto. Experiência recente em TypeScript, Python, APIs REST, PostgreSQL, aplicações React/Next.js e análise de dados. Lidero entregas desde o levantamento de requisitos até a implementação, articulando decisões técnicas com negócio e equipes especialistas.",
    "skillsTitle": "Competências técnicas",
    "skills": [
      "Backend · TypeScript, Python, Node.js, NestJS, Fastify e APIs REST.",
      "Dados · SQL, PostgreSQL, Drizzle, Prisma, BigQuery e Power BI.",
      "Frontend · React, Next.js, JavaScript, HTML e CSS.",
      "Arquitetura e entrega · Modelagem de domínio, testes automatizados, integrações, Docker e GitHub Actions.",
      "Cloud e IA aplicada · Experiência com AWS e GCP, integração de LLMs e avaliação de respostas em provas de conceito."
    ],
    "experience": "Experiência selecionada",
    "roles": [
      [
        "Periscópio · Tech Lead e desenvolvedor full stack | nov. 2025–atual",
        "Liderança técnica e implementação de fluxos entre escolas e profissionais de saúde. Trabalho com formulários, permissões por papel, histórico de casos e modelo de dados. Stack atual em TypeScript, Next.js, Fastify, Drizzle e PostgreSQL."
      ],
      [
        "Oceano Azul · Fundador e Tech Lead | 2025–atual",
        "Desenvolvimento e arquitetura de produtos de saúde, segurança pessoal e informação jurídica. Na ÍRIS, implementação de backend NestJS em monólito modular, frontend Next.js e integrações. No Radar Jurídico, backend Python/FastAPI, persistência com SQLAlchemy e estratégia de consultas."
      ],
      [
        "Sócio do Tabuleiro / HIVIUM · Fundador e líder de produto | 2023–2026",
        "CTO entre 2023 e 2025. Conduzi a evolução de aluguel de jogos para SaaS e marketplace, liderei desenvolvimento e integrações de logística e contratos digitais. Desenhei a arquitetura da plataforma sucessora HIVIUM em GCP."
      ],
      [
        "DevBoutique · Tech Lead freelance | 2021–2023",
        "Coordenação de projetos de software e equipes multidisciplinares, com foco em qualidade e acompanhamento das entregas."
      ],
      [
        "wtime · Analista sênior de Customer Insights | 2022–2023",
        "Construção de dashboards de observabilidade e indicadores com Power BI e BigQuery."
      ],
      [
        "Levoo, Food Finder e Elaroye · Liderança técnica | 2019–2020",
        "Liderança em integrações para logística e varejo, sistema de afiliados e plataforma de assinatura e e-commerce."
      ]
    ],
    "resumeProjects": "Projetos técnicos",
    "education": "Formação selecionada",
    "qualifications": [
      "Formação Node.js · Rocketseat.",
      "Bacharelado em Game and Interactive Media Design · Universidade Anhembi Morumbi | 2017–2020.",
      "Founder Institute · Programa de empreendedorismo e Advisor Lab."
    ],
    "print": "Imprimir ou salvar em PDF",
    "productsTitle": "Experiência com produtos",
    "codeTitle": "Projetos com código completo",
    "codeIntro": "Aplicações pessoais e exercícios executáveis para explorar decisões de implementação, testes e organização do código.",
    "historyTitle": "Protótipos premiados em equipe",
    "languageTitle": "Idiomas",
    "languageDetail": "Português nativo · Inglês fluente.",
    "projectDetails": {
      "iris": [
        [
          "O que faz",
          "Organiza ações de segurança pessoal e a comunicação com uma rede de confiança."
        ],
        [
          "O que implementei",
          "Módulos e fluxos de API, interface web, integrações e registro de consentimento."
        ],
        [
          "Competências demonstradas",
          "NestJS, composição de módulos, separação de responsabilidades, persistência, permissões e integração entre frontend e backend."
        ]
      ],
      "periscopio": [
        [
          "O que faz",
          "Organiza observações, encaminhamentos e devolutivas entre escola e profissionais de saúde."
        ],
        [
          "O que implementei",
          "Formulários digitais, permissões por papel, transições de fluxo e histórico de casos."
        ],
        [
          "Competências demonstradas",
          "APIs Fastify, modelagem relacional, validação, controle de acesso e implementação de regras com especialistas."
        ]
      ],
      "hivium": [
        [
          "O que faz",
          "Conecta e organiza comunidades de jogos de tabuleiro e RPG."
        ],
        [
          "O que construí",
          "Evolução de plataforma, integrações de logística e contratos e arquitetura do produto sucessor, com liderança de desenvolvimento."
        ],
        [
          "Competências demonstradas",
          "Integração com serviços externos, arquitetura de aplicações, priorização técnica e entrega com equipe."
        ]
      ],
      "radar": [
        [
          "O que faz",
          "Consulta e organiza informações jurídicas por CNPJ para análise interna."
        ],
        [
          "O que implementei",
          "Backend Python, integração de provedores e estratégia de consulta em camadas para controlar o uso de dados pagos."
        ],
        [
          "Competências demonstradas",
          "FastAPI, SQLAlchemy, integração de APIs, modelagem de dados e análise de custo de consultas."
        ]
      ],
      "oceano": [
        [
          "O que faz",
          "Apresenta produtos, serviços e a trajetória da consultoria."
        ],
        [
          "O que construí",
          "Aplicação web e conteúdo de apresentação da Oceano Azul."
        ],
        [
          "Competências demonstradas",
          "Next.js, React, implementação web e organização da apresentação de produtos."
        ]
      ],
      "wtime": [
        [
          "O que faz",
          "Transforma dados operacionais em indicadores e dashboards de acompanhamento."
        ],
        [
          "O que construí",
          "Dashboards de observabilidade e métricas durante minha atuação como analista sênior."
        ],
        [
          "Competências demonstradas",
          "SQL, BigQuery, Power BI, definição de indicadores e visualização de dados."
        ]
      ]
    }
  },
  "en": {
    "lang": "en",
    "skip": "Skip to content",
    "nav": {
      "home": "Home",
      "projects": "Projects",
      "data": "Data",
      "freelance": "Freelance",
      "press": "Press",
      "resume": "Résumé"
    },
    "language": "Language",
    "primary": "Main navigation",
    "contact": "Contact",
    "location": "Campinas, São Paulo · Brazil",
    "eyebrow": "Software engineering · Backend · Data",
    "headline": [
      "Software, architecture",
      "and product delivery."
    ],
    "intro": "I’m Bruno de Araújo Bisogni, a senior software developer and tech lead. My 12+ year career spans technology and product, with recent work in TypeScript, Python, APIs, and data. I work with business teams and domain specialists to turn requirements into software.",
    "cta": "Explore my work",
    "paths": [
      [
        "resume",
        "For recruiters",
        "Senior experience, résumé, and concrete references for reviewing code, architecture, and technical leadership."
      ],
      [
        "data",
        "For data teams",
        "See my work with BigQuery and Power BI, and explore a sample SQL analysis."
      ],
      [
        "freelance",
        "For clients",
        "Let’s define and build an MVP, an integration, or a dashboard that answers a practical question."
      ]
    ],
    "featured": "Products I helped build",
    "viewAll": "See all projects",
    "trajectory": "Engineering with business context",
    "bio": "My degree in Game and Interactive Media Design shaped my approach to interactive systems and user experience. I worked on integrations, software teams, and data before founding Oceano Azul. Today I build products in healthcare, personal safety, and communities, combining implementation with delivery planning.",
    "closing": "Let’s talk",
    "projectsIntro": "My role, implementation scope, and tools for each product. Complete public projects include source code, setup instructions, and authorship references.",
    "projectList": [
      [
        "iris",
        "ÍRIS",
        "Product · Founder and Tech Lead",
        "I develop a personal safety platform for women with a NestJS API organized as a modular monolith. My work spans the web application, integrations, consent workflows, and product evolution.",
        "TypeScript · NestJS · Next.js · Drizzle · PostgreSQL · AWS",
        "Read the public product update"
      ],
      [
        "periscopio",
        "Periscópio",
        "Health and education · Tech Lead and full stack",
        "I lead engineering and implement the school-to-healthcare workflow, from forms to referrals and case history. The backend is a Fastify monolith with routes and responsibilities organized within one application.",
        "TypeScript · Next.js · Fastify · Drizzle · PostgreSQL",
        "Read the MVP write-up"
      ],
      [
        "hivium",
        "HIVIUM / Sócio do Tabuleiro",
        "SaaS and marketplace · Founder and CTO",
        "I led the move from game rental operations to a digital platform with logistics and contract integrations. For HIVIUM, I designed the successor product’s architecture for tabletop gaming communities.",
        "React · APIs · GCP · Product architecture",
        "Read the beta announcement"
      ],
      [
        "radar",
        "Radar Jurídico",
        "Internal product · Backend and data",
        "Python backend work, legal data integrations, and a layered query strategy to manage paid provider usage. The scope includes data modeling and query traceability.",
        "Python · FastAPI · SQLAlchemy · PostgreSQL · APIs",
        "See professional background"
      ],
      [
        "oceano",
        "Oceano Azul",
        "Published product · Development and consulting",
        "My consultancy covers requirements, architecture, and development. Its website introduces my work across integrations, healthcare, mobility, and communities.",
        "Next.js · React · TypeScript · Product",
        "Visit the website"
      ],
      [
        "wtime",
        "wtime dashboards",
        "Data · Professional implementation",
        "Built observability dashboards and metrics using BigQuery and Power BI as a senior analyst from 2022 to 2023.",
        "SQL · BigQuery · Power BI",
        "See professional experience"
      ],
      [
        "levoo",
        "Levoo",
        "Logistics · Technical leadership | 2019–2020",
        "Led an affiliate-system project and the integration between a delivery operation and a bank’s systems.",
        "Integrations · APIs · Implementation leadership",
        "See project background"
      ],
      [
        "foodfinder",
        "Food Finder",
        "Retail · CTO | 2019",
        "Designed the integration between the platform and a retail group, and managed the implementation team.",
        "Integration architecture · Technical delivery",
        "See project background"
      ],
      [
        "socialball",
        "Social Ball",
        "Digital product · Technical leadership | 2014–2016",
        "At ABCE Service, led the technical team associated with Social Ball and the transition from offline to online channels.",
        "Digital product · Web implementation · Technical leadership",
        "See project background"
      ],
      [
        "portfolio",
        "Bilingual portfolio",
        "Public application · Complete source",
        "A Next.js site with Portuguese and English pages, static route generation, language-specific metadata, a print-ready résumé, and automated deployment to GitHub Pages.",
        "Next.js · React · JavaScript · CSS · GitHub Actions",
        "Complete code and setup"
      ],
      [
        "agenda",
        "Agenda SUS",
        "GovTech · Hackathon prototype",
        "A team prototype for scheduling and managing queues in public healthcare, presented at the 2017 IMA Campinas Hackathon.",
        "Prototyping · Healthcare workflows",
        "See hackathon background"
      ],
      [
        "bus",
        "Like a Bus",
        "Urban mobility · Hackathon prototype",
        "A team project that used image recognition to estimate bus occupancy. It placed first at Hack in Sampa 3 in 2019.",
        "Image recognition · Urban mobility",
        "View the original repository"
      ],
      [
        "stock",
        "Public health stock map",
        "Public health · Hackathon prototype",
        "A team heatmap prototype to explore the risk of medication shortages at public health units over time.",
        "Geospatial data · Data visualization",
        "View the original repository"
      ]
    ],
    "dataIntro": "I use data analysis to investigate operations, track performance, and turn product questions into metrics teams can act on.",
    "dataWork": "Experience and projects",
    "dataCases": [
      [
        "wtime · Customer Insights",
        "Senior analyst from 2022 to 2023. Worked on observability metrics and dashboards with BigQuery and Power BI.",
        "https://oceanoazul.dev.br/",
        "See career background"
      ],
      [
        "Public health stock map",
        "A prototype that combined stock, consumption, and location data to visualize the risk of medication shortages.",
        "https://github.com/brunobisognidev/hacksus",
        "View the original code"
      ]
    ],
    "sampleTitle": "SQL analysis sample",
    "sampleIntro": "A standalone example with synthetic data. The question is how the request completion rate changed over six months.",
    "sampleMethod": "The monthly rate divides completed requests by requests received. For the overall rate, divide total completions by total requests.",
    "table": [
      "Month",
      "Received",
      "Completed",
      "Rate"
    ],
    "download": "Download the synthetic CSV",
    "sql": "View SQL query",
    "freelanceIntro": "I can help shape an early product idea or take on a clearly scoped part of an existing project.",
    "services": [
      [
        "Discovery and MVP planning",
        "Interviews, prioritization, and a delivery plan with clear criteria for testing early assumptions."
      ],
      [
        "Development and integrations",
        "Web applications, APIs, and integrations, with documentation for the team that will operate and maintain them."
      ],
      [
        "Data and dashboards",
        "Metric definitions, SQL queries, exploratory analysis, and dashboards for product and operations questions."
      ]
    ],
    "how": "How we can get started",
    "steps": [
      "Share the problem, who it affects, and where the project stands.",
      "We agree on the scope, deliverables, and acceptance criteria.",
      "We plan delivery and handoff to your team."
    ],
    "email": "Email me about a project",
    "subject": "Freelance project inquiry",
    "resumeTitle": "Senior Software Developer · Backend & Full Stack",
    "summary": "Senior software developer and tech lead with 12+ years across technology and product. Recent experience includes TypeScript, Python, REST APIs, PostgreSQL, React/Next.js applications, and data analysis. I lead delivery from requirements through implementation, connecting engineering decisions with business and domain specialists.",
    "skillsTitle": "Technical skills",
    "skills": [
      "Backend · TypeScript, Python, Node.js, NestJS, Fastify, and REST APIs.",
      "Data · SQL, PostgreSQL, Drizzle, Prisma, BigQuery, and Power BI.",
      "Frontend · React, Next.js, JavaScript, HTML, and CSS.",
      "Architecture and delivery · Domain modeling, automated tests, integrations, Docker, and GitHub Actions.",
      "Cloud and applied AI · Experience with AWS and GCP, LLM integrations, and evaluating proof-of-concept outputs."
    ],
    "experience": "Selected experience",
    "roles": [
      [
        "Periscópio · Tech Lead and Full-Stack Developer | Nov 2025–present",
        "Technical leadership and implementation of school-to-healthcare workflows. Work includes forms, role-based permissions, case history, and data modeling. Current stack uses TypeScript, Next.js, Fastify, Drizzle, and PostgreSQL."
      ],
      [
        "Oceano Azul · Founder and Tech Lead | 2025–present",
        "Product development and architecture across healthcare, personal safety, and legal information. At ÍRIS, work on a modular NestJS monolith, Next.js frontend, and integrations. At Radar Jurídico, Python/FastAPI backend, SQLAlchemy persistence, and query strategy."
      ],
      [
        "Sócio do Tabuleiro / HIVIUM · Founder and Product Lead | 2023–2026",
        "CTO from 2023 to 2025. Led the evolution from game rental to SaaS and marketplace, coordinating development, logistics, and digital contract integrations. Designed the GCP architecture for the successor platform, HIVIUM."
      ],
      [
        "DevBoutique · Freelance Tech Lead | 2021–2023",
        "Coordinated software projects and multidisciplinary teams, focusing on delivery quality and progress."
      ],
      [
        "wtime · Senior Customer Insights Analyst | 2022–2023",
        "Built observability dashboards and metrics with Power BI and BigQuery."
      ],
      [
        "Levoo, Food Finder, and Elaroye · Technical leadership | 2019–2020",
        "Led integrations in logistics and retail, an affiliate system, and subscription and e-commerce initiatives."
      ]
    ],
    "resumeProjects": "Technical projects",
    "education": "Selected education",
    "qualifications": [
      "Node.js training program · Rocketseat.",
      "Bachelor’s degree in Game and Interactive Media Design · Universidade Anhembi Morumbi | 2017–2020.",
      "Founder Institute · Entrepreneurship program and Advisor Lab."
    ],
    "print": "Print or save as PDF",
    "productsTitle": "Product engineering experience",
    "codeTitle": "Complete public source code",
    "codeIntro": "Personal applications and runnable exercises for exploring implementation choices, tests, and code organization.",
    "historyTitle": "Award-winning team prototypes",
    "languageTitle": "Languages",
    "languageDetail": "Portuguese — native · English — fluent.",
    "projectDetails": {
      "iris": [
        [
          "What it does",
          "Coordinates personal safety actions and communication with trusted contacts."
        ],
        [
          "My implementation",
          "API modules and workflows, web interface, integrations, and consent recording."
        ],
        [
          "Engineering demonstrated",
          "NestJS module composition, separation of responsibilities, persistence, permissions, and frontend/backend integration."
        ]
      ],
      "periscopio": [
        [
          "What it does",
          "Organizes observations, referrals, and feedback between schools and healthcare professionals."
        ],
        [
          "My implementation",
          "Digital forms, role-based permissions, workflow transitions, and case history."
        ],
        [
          "Engineering demonstrated",
          "Fastify APIs, relational modeling, validation, access control, and rules developed with domain specialists."
        ]
      ],
      "hivium": [
        [
          "What it does",
          "Connects and organizes tabletop gaming and RPG communities."
        ],
        [
          "What I built",
          "Platform evolution, logistics and contract integrations, and successor-product architecture, while leading development."
        ],
        [
          "Engineering demonstrated",
          "External integrations, application architecture, technical prioritization, and team delivery."
        ]
      ],
      "radar": [
        [
          "What it does",
          "Retrieves and organizes company-related legal information for internal analysis."
        ],
        [
          "My implementation",
          "Python backend, provider integrations, and a layered query strategy to manage paid data usage."
        ],
        [
          "Engineering demonstrated",
          "FastAPI, SQLAlchemy, API integration, data modeling, and query cost analysis."
        ]
      ],
      "oceano": [
        [
          "What it does",
          "Presents the consultancy’s products, services, and professional background."
        ],
        [
          "What I built",
          "The web application and the consultancy’s product presentation."
        ],
        [
          "Engineering demonstrated",
          "Next.js, React, web implementation, and product communication."
        ]
      ],
      "wtime": [
        [
          "What it does",
          "Turns operational data into indicators and monitoring dashboards."
        ],
        [
          "What I built",
          "Observability dashboards and metrics in my senior analyst role."
        ],
        [
          "Engineering demonstrated",
          "SQL, BigQuery, Power BI, metric definitions, and data visualization."
        ]
      ]
    }
  }
};

export const press = {
  "pt": {
    "intro": "Projetos, prêmios de equipe e registros públicos da minha trajetória, dos hackathons de saúde e mobilidade aos produtos em que trabalho hoje.",
    "title": "Projetos e prêmios em ordem cronológica",
    "videoTitle": "A premiação do Like a Bus na TV Câmara",
    "videoToggle": "Exibir vídeo da TV Câmara",
    "notes": "Os links de cada registro levam à publicação original, à reportagem ou à galeria de imagens, conforme o material disponível.",
    "items": [
      [
        "2026",
        "Periscópio e ÍRIS",
        "Projetos · Relatos próprios",
        "Compartilhei a chegada do Periscópio à validação interna do MVP e o trabalho de produto por trás da ÍRIS, voltada à rede de confiança de mulheres em encontros.",
        [
          [
            "https://www.linkedin.com/feed/update/urn:li:activity:7519483771901865985/",
            "Relato do Periscópio"
          ],
          [
            "https://www.linkedin.com/feed/update/urn:li:activity:7519461241631797248/",
            "Relato da ÍRIS"
          ]
        ]
      ],
      [
        "2026",
        "Beta da HIVIUM e seleção pelo Sebrae",
        "Produto · Seleção institucional",
        "A HIVIUM nasceu dos aprendizados do Sócio do Tabuleiro com comunidades de RPG e jogos. A empresa aparece na lista do programa Primeiras Vendas 2026 do Sebrae for Startups.",
        [
          [
            "https://www.linkedin.com/feed/update/urn:li:activity:7440522540940177408/",
            "Anúncio da versão beta"
          ],
          [
            "https://sebraeforstartups.sebraesp.com.br/wp-content/uploads/Listagem_startups_start_primeiras_vendas_2026-apos-lista-de-espera.pdf",
            "Lista oficial do Sebrae (PDF)"
          ]
        ]
      ],
      [
        "2025",
        "Sócio do Tabuleiro na IMATech",
        "Incubação · Seleção institucional",
        "O resultado divulgado pela IMA incluiu o Sócio do Tabuleiro entre os selecionados para o programa de incubação de Campinas.",
        [
          [
            "https://pt.linkedin.com/posts/brunobisogni_imatech-ima-incuba%C3%A7%C3%A3o-activity-7362151315222749184-xBiG",
            "Resultado da IMA no LinkedIn"
          ]
        ]
      ],
      [
        "2023",
        "Entrevista no podcast É a Minha Vez!",
        "Entrevista · Viver de Jogo / Ludopedia",
        "Conversei sobre montar um negócio de jogos de tabuleiro em Campinas, no início da trajetória do Sócio do Tabuleiro.",
        [
          [
            "https://ludopedia.com.br/topico/72869/bruno-bisogni-do-socio-do-tabuleiro-e-a-minha-vez-26",
            "Ouvir entrevista e ver capa"
          ]
        ]
      ],
      [
        "2019",
        "Like a Bus · 1º lugar no Hack in Sampa 3",
        "Prêmio de equipe · TV Câmara SP",
        "A equipe apresentou um protótipo para estimar a lotação dos ônibus em São Paulo. A TV Câmara registrou a entrega da premiação.",
        [
          [
            "https://www.saopaulo.sp.leg.br/blog/vencedores-do-hack-in-sampa-recebem-premiacao-na-camara/",
            "Reportagem original"
          ],
          [
            "https://github.com/brunobisognidev/like-a-bus",
            "Repositório do protótipo"
          ]
        ]
      ],
      [
        "2017",
        "Agenda SUS · equipe premiada no Hackathon IMA",
        "Prêmio de equipe · Campinas",
        "O protótipo de agendamento do SUS foi um dos três aplicativos premiados no 2º Hackathon Campinas, segundo o anuário Tele.Síntese. Meu histórico profissional registra o primeiro lugar.",
        [
          [
            "https://www.momentoeditorial.com.br/eventos/anuariots/Anuario-TeleSintese-Inovacao-em-Comunicacoes-2017.pdf",
            "Anuário Tele.Síntese (PDF)"
          ],
          [
            "https://www.linkedin.com/in/brunobisogni/",
            "Histórico no LinkedIn"
          ]
        ]
      ],
      [
        "2017",
        "E-SUS · 2º lugar no Hackathon da Saúde",
        "Prêmio de equipe · Prefeitura de São Paulo",
        "A equipe propôs um mapa de calor para monitorar estoques de medicamentos a partir do consumo das unidades. A Secretaria Municipal da Saúde registrou o segundo lugar e listou os integrantes.",
        [
          [
            "https://prefeitura.sp.gov.br/web/saude/w/noticias/233129",
            "Matéria da Prefeitura"
          ],
          [
            "https://github.com/brunobisognidev/hacksus",
            "Código histórico"
          ]
        ]
      ]
    ]
  },
  "en": {
    "intro": "Projects, team awards, and public records from my career, from public health and mobility hackathons to the products I work on today.",
    "title": "A timeline of projects and awards",
    "videoTitle": "Like a Bus at the São Paulo City Council awards ceremony",
    "videoToggle": "Show the TV Câmara report",
    "notes": "Each entry links to the original publication, report, or photo gallery where available. Most source material is in Portuguese.",
    "items": [
      [
        "2026",
        "Periscópio and ÍRIS",
        "Projects · First-person updates",
        "I shared the start of internal MVP validation for Periscópio and the product work behind ÍRIS, which supports women’s trusted contacts during dates.",
        [
          [
            "https://www.linkedin.com/feed/update/urn:li:activity:7519483771901865985/",
            "Read the Periscópio update"
          ],
          [
            "https://www.linkedin.com/feed/update/urn:li:activity:7519461241631797248/",
            "Read the ÍRIS update"
          ]
        ]
      ],
      [
        "2026",
        "HIVIUM beta and Sebrae selection",
        "Product · Program selection",
        "HIVIUM grew out of what we learned from tabletop gaming communities at Sócio do Tabuleiro. The company appears on Sebrae’s 2026 Primeiras Vendas program list.",
        [
          [
            "https://www.linkedin.com/feed/update/urn:li:activity:7440522540940177408/",
            "Read the beta announcement"
          ],
          [
            "https://sebraeforstartups.sebraesp.com.br/wp-content/uploads/Listagem_startups_start_primeiras_vendas_2026-apos-lista-de-espera.pdf",
            "Official Sebrae list (PDF)"
          ]
        ]
      ],
      [
        "2025",
        "Sócio do Tabuleiro joins IMATech",
        "Incubation · Program selection",
        "The results published by IMA named Sócio do Tabuleiro among the teams selected for the Campinas incubation program.",
        [
          [
            "https://pt.linkedin.com/posts/brunobisogni_imatech-ima-incuba%C3%A7%C3%A3o-activity-7362151315222749184-xBiG",
            "See the IMA results on LinkedIn"
          ]
        ]
      ],
      [
        "2023",
        "Interview on É a Minha Vez!",
        "Podcast interview · Viver de Jogo / Ludopedia",
        "I spoke about starting a tabletop games business in Campinas during the early days of Sócio do Tabuleiro.",
        [
          [
            "https://ludopedia.com.br/topico/72869/bruno-bisogni-do-socio-do-tabuleiro-e-a-minha-vez-26",
            "Listen and view the episode cover"
          ]
        ]
      ],
      [
        "2019",
        "Like a Bus · 1st place at Hack in Sampa 3",
        "Team award · TV Câmara SP",
        "The team presented a prototype for estimating bus occupancy in São Paulo. The City Council’s TV channel covered the awards ceremony.",
        [
          [
            "https://www.saopaulo.sp.leg.br/blog/vencedores-do-hack-in-sampa-recebem-premiacao-na-camara/",
            "Watch the original report"
          ],
          [
            "https://github.com/brunobisognidev/like-a-bus",
            "View the prototype repository"
          ]
        ]
      ],
      [
        "2017",
        "Agenda SUS · IMA Campinas hackathon award",
        "Team award · Campinas",
        "According to the Tele.Síntese yearbook, our public healthcare scheduling prototype was one of three apps recognized at the second Campinas hackathon. My professional profile records first place.",
        [
          [
            "https://www.momentoeditorial.com.br/eventos/anuariots/Anuario-TeleSintese-Inovacao-em-Comunicacoes-2017.pdf",
            "Tele.Síntese yearbook (PDF)"
          ],
          [
            "https://www.linkedin.com/in/brunobisogni/",
            "See my LinkedIn profile"
          ]
        ]
      ],
      [
        "2017",
        "E-SUS · 2nd place at São Paulo’s Health Hackathon",
        "Team award · City of São Paulo",
        "The team proposed a heatmap to track medication stock against usage at public health units. The city health department confirmed second place and named the team members.",
        [
          [
            "https://prefeitura.sp.gov.br/web/saude/w/noticias/233129",
            "City announcement"
          ],
          [
            "https://github.com/brunobisognidev/hacksus",
            "View the original code"
          ]
        ]
      ]
    ]
  }
};

const projectLinks = {
  "iris": "https://www.linkedin.com/feed/update/urn:li:activity:7519461241631797248/",
  "periscopio": "https://www.linkedin.com/feed/update/urn:li:activity:7519483771901865985/",
  "hivium": "https://www.linkedin.com/feed/update/urn:li:activity:7440522540940177408/",
  "radar": "https://www.linkedin.com/in/brunobisogni/",
  "oceano": "https://oceanoazul.dev.br/",
  "portfolio": "https://github.com/brunodevoceanoazul/portfolio",
  "agenda": "https://oceanoazul.dev.br/",
  "bus": "https://github.com/brunobisognidev/like-a-bus",
  "stock": "https://github.com/brunobisognidev/hacksus",
  "wtime": "https://www.linkedin.com/in/brunobisogni/",
  "levoo": "https://oceanoazul.dev.br/",
  "foodfinder": "https://oceanoazul.dev.br/",
  "socialball": "https://oceanoazul.dev.br/"
};

export function projectHref(id) { return projectLinks[id]; }
