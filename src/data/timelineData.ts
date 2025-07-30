export interface TimelineStep {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  content?: string;
  videos?: Array<{
    title: string;
    url: string;
  }>;
  links?: Array<{
    title: string;
    url: string;
    description?: string;
  }>;
}

export const timelineData: TimelineStep[] = [
  {
    id: 1,
    title: "Introdução ao Mundo da TI",
    description: "Entenda os fundamentos e conceitos básicos da tecnologia da informação.",
    category: "Fundamentos",
    duration: "1-2 semanas",
    content: "A Tecnologia da Informação (TI) engloba todos os aspectos de gerenciamento e processamento de informações, especialmente em organizações. Esta área abrange desde hardware e software até redes, bancos de dados e segurança digital. Para pessoas com deficiência, a TI oferece inúmeras oportunidades de carreira flexível, incluindo trabalho remoto e ambientes adaptativos.",
    videos: [
      {
        title: "O que é TI? Conceitos básicos",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Carreiras em TI para Iniciantes",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "Curso Gratuito: Introdução à TI - Coursera",
        url: "https://www.coursera.org",
        description: "Curso completo sobre fundamentos de TI"
      },
      {
        title: "Lei Brasileira de Inclusão da Pessoa com Deficiência",
        url: "https://www.planalto.gov.br",
        description: "Conheça seus direitos no mercado de trabalho"
      }
    ]
  },
  {
    id: 2,
    title: "Conhecendo Hardware e Manutenção",
    description: "Aprenda sobre componentes de computador e técnicas básicas de manutenção.",
    category: "Hardware",
    duration: "2-3 semanas",
    content: "A manutenção de computadores é uma área fundamental em TI que envolve diagnóstico, reparo e otimização de equipamentos. Esta especialização oferece excelentes oportunidades para pessoas com deficiência, especialmente aquelas com habilidades manuais e interesse em resolver problemas técnicos. Muitas empresas valorizam técnicos especializados e oferecem ambientes de trabalho adaptativos.",
    videos: [
      {
        title: "Componentes de um PC - Guia Completo",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "Curso de Manutenção de Computadores - SENAI",
        url: "https://www.senai.br",
        description: "Curso profissionalizante com foco em inclusão"
      }
    ]
  },
  {
    id: 3,
    title: "Infraestrutura de TI e Redes",
    description: "Explore como funciona a infraestrutura tecnológica e redes de computadores.",
    category: "Redes",
    duration: "3-4 semanas",
    content: "A infraestrutura de TI é o backbone de qualquer organização moderna, englobando servidores, redes, sistemas operacionais e serviços de cloud. Esta área oferece carreiras estáveis e bem remuneradas, com muitas oportunidades de trabalho remoto. Para profissionais PCD, existem diversas especializações que podem ser adaptadas às suas necessidades e habilidades específicas.",
    videos: [
      {
        title: "Fundamentos de Redes de Computadores",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "Cisco Networking Academy",
        url: "https://www.netacad.com",
        description: "Cursos gratuitos de redes com certificação internacional"
      }
    ]
  },
  {
    id: 4,
    title: "Desenvolvimento de Software - Primeiros Passos",
    description: "Inicie sua jornada na programação e desenvolvimento de aplicações.",
    category: "Desenvolvimento",
    duration: "4-6 semanas",
    content: "O desenvolvimento de software é uma das áreas mais inclusivas e acessíveis da TI. Com a possibilidade de trabalho 100% remoto, horários flexíveis e ferramentas de acessibilidade avançadas, esta carreira oferece excelentes oportunidades para pessoas com deficiência. Você pode especializar-se em desenvolvimento web, mobile, desktop ou sistemas embarcados.",
    videos: [
      {
        title: "Lógica de Programação para Iniciantes",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Escolhendo sua primeira linguagem de programação",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "freeCodeCamp - Cursos Gratuitos de Programação",
        url: "https://www.freecodecamp.org",
        description: "Plataforma gratuita com cursos completos e certificações"
      },
      {
        title: "GitHub - Controle de Versão",
        url: "https://github.com",
        description: "Aprenda a usar a ferramenta essencial para desenvolvedores"
      }
    ]
  },
  {
    id: 5,
    title: "Suporte Técnico e Atendimento",
    description: "Desenvolva habilidades de suporte ao usuário e resolução de problemas.",
    category: "Suporte",
    duration: "2-3 semanas",
    content: "O suporte técnico é uma área que valoriza habilidades de comunicação, paciência e resolução de problemas. Para pessoas com deficiência, especialmente aquelas com excelentes habilidades interpessoais, esta área oferece oportunidades de crescimento e estabilidade. Muitas empresas têm programas específicos de inclusão para profissionais de suporte.",
    videos: [
      {
        title: "Fundamentos do Suporte Técnico",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "CompTIA A+ Certification",
        url: "https://www.comptia.org",
        description: "Certificação internacional em suporte técnico"
      }
    ]
  },
  {
    id: 6,
    title: "Gestão de Projetos em TI",
    description: "Aprenda a liderar equipes e gerenciar projetos tecnológicos.",
    category: "Gestão",
    duration: "3-4 semanas",
    content: "A gestão de projetos em TI é uma área que valoriza habilidades organizacionais, liderança e visão estratégica. Profissionais PCD podem se destacar nesta área, trazendo perspectivas únicas e habilidades de adaptação que são valiosas na liderança de equipes diversas e projetos complexos.",
    videos: [
      {
        title: "Fundamentos de Gestão de Projetos",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "Project Management Institute (PMI)",
        url: "https://www.pmi.org",
        description: "Organização mundial de gestão de projetos"
      }
    ]
  },
  {
    id: 7,
    title: "TI no Setor Financeiro",
    description: "Explore as oportunidades específicas da tecnologia no setor bancário.",
    category: "Fintech",
    duration: "2-3 semanas",
    content: "O setor financeiro é um dos maiores empregadores de profissionais de TI, oferecendo carreiras estáveis e bem remuneradas. Bancos e fintechs têm programas robustos de inclusão e diversidade, criando oportunidades específicas para pessoas com deficiência em áreas como desenvolvimento de sistemas bancários, segurança digital e análise de dados financeiros.",
    videos: [
      {
        title: "Tecnologia no Sistema Financeiro",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "Febraban - Tecnologia Bancária",
        url: "https://www.febraban.org.br",
        description: "Recursos sobre tecnologia no setor bancário brasileiro"
      }
    ]
  },
  {
    id: 8,
    title: "Segurança da Informação",
    description: "Entenda os conceitos de cibersegurança e proteção de dados.",
    category: "Segurança",
    duration: "3-4 semanas",
    content: "A segurança da informação é uma das áreas de maior crescimento em TI, com demanda crescente por profissionais especializados. Esta área oferece excelentes oportunidades para pessoas com deficiência, especialmente aquelas com atenção aos detalhes e capacidade analítica. Muitas funções podem ser executadas remotamente com ferramentas de acessibilidade.",
    videos: [
      {
        title: "Introdução à Cibersegurança",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "SANS Institute - Treinamentos em Segurança",
        url: "https://www.sans.org",
        description: "Cursos e certificações em segurança da informação"
      }
    ]
  },
  {
    id: 9,
    title: "Preparação para o Mercado de Trabalho",
    description: "Desenvolva seu currículo, portfólio e habilidades de entrevista.",
    category: "Carreira",
    duration: "2-3 semanas",
    content: "A preparação para o mercado de trabalho é crucial para o sucesso profissional. Para pessoas com deficiência, é importante conhecer seus direitos, programas de inclusão disponíveis e como apresentar suas habilidades de forma efetiva. Esta etapa inclui criação de currículo acessível, desenvolvimento de portfólio online e preparação para entrevistas técnicas e comportamentais.",
    videos: [
      {
        title: "Como criar um currículo para TI",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Preparação para entrevistas técnicas",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "LinkedIn Learning - Cursos de Carreira",
        url: "https://www.linkedin.com/learning",
        description: "Cursos sobre desenvolvimento de carreira e networking"
      },
      {
        title: "Vagas.com - Programa de Inclusão",
        url: "https://www.vagas.com.br",
        description: "Portal de vagas com filtros para PCD"
      },
      {
        title: "i.Social - Plataforma de Inclusão",
        url: "https://www.isocial.com.br",
        description: "Plataforma especializada em conectar PCD com empresas"
      }
    ]
  },
  {
    id: 10,
    title: "Networking e Comunidades Tech",
    description: "Conecte-se com profissionais e participe de comunidades da área.",
    category: "Networking",
    duration: "Contínuo",
    content: "O networking é fundamental para o crescimento profissional em TI. Existem diversas comunidades e grupos específicos para pessoas com deficiência na tecnologia, oferecendo mentoria, oportunidades de emprego e desenvolvimento profissional. Participe de eventos, conferências online e grupos de discussão para expandir sua rede de contatos e conhecimento.",
    videos: [
      {
        title: "A importância do networking em TI",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ],
    links: [
      {
        title: "Comunidade PCD Tech Brasil",
        url: "https://www.linkedin.com",
        description: "Grupo do LinkedIn para profissionais PCD em tecnologia"
      },
      {
        title: "Meetup - Eventos de Tecnologia",
        url: "https://www.meetup.com",
        description: "Encontre eventos e grupos de tecnologia na sua região"
      }
    ]
  }
];