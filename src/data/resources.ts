export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'courses' | 'communities' | 'certifications' | 'jobs' | 'tools';
  url: string;
  price?: string;
  featured: boolean;
}

export const resources: Resource[] = [
  // Courses
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp - Programação Gratuita',
    description: 'Plataforma completa com cursos gratuitos de desenvolvimento web, análise de dados e mais. Totalmente acessível e com certificados.',
    category: 'courses',
    url: 'https://www.freecodecamp.org',
    price: 'Gratuito',
    featured: true
  },
  {
    id: 'coursera-financial-aid',
    title: 'Coursera - Auxílio Financeiro',
    description: 'Cursos de universidades renomadas com auxílio financeiro disponível para pessoas de baixa renda.',
    category: 'courses',
    url: 'https://www.coursera.org/financial-aid',
    price: 'Gratuito com auxílio',
    featured: true
  },
  {
    id: 'edx-accessibility',
    title: 'edX - Cursos de Acessibilidade',
    description: 'Cursos específicos sobre tecnologia assistiva e desenvolvimento acessível.',
    category: 'courses',
    url: 'https://www.edx.org',
    price: 'Gratuito/Pago',
    featured: false
  },
  {
    id: 'alura-tech',
    title: 'Alura - Tecnologia em Português',
    description: 'Plataforma brasileira com cursos de tecnologia em português, incluindo trilhas para iniciantes.',
    category: 'courses',
    url: 'https://www.alura.com.br',
    price: 'R$ 75/mês',
    featured: false
  },
  {
    id: 'dio-bootcamps',
    title: 'Digital Innovation One - Bootcamps',
    description: 'Bootcamps gratuitos em parceria com grandes empresas, incluindo programas de inclusão.',
    category: 'courses',
    url: 'https://www.dio.me',
    price: 'Gratuito',
    featured: true
  },

  // Communities
  {
    id: 'pcd-tech-brasil',
    title: 'PCD Tech Brasil',
    description: 'Comunidade brasileira de pessoas com deficiência na área de tecnologia. Networking, mentoria e oportunidades.',
    category: 'communities',
    url: 'https://www.linkedin.com/groups/pcd-tech-brasil',
    featured: true
  },
  {
    id: 'incluir-tech',
    title: 'Incluir Tech',
    description: 'Grupo focado em inclusão e acessibilidade na tecnologia, com eventos e discussões regulares.',
    category: 'communities',
    url: 'https://www.incluirtech.com.br',
    featured: false
  },
  {
    id: 'dev-with-disabilities',
    title: 'Developers with Disabilities',
    description: 'Comunidade internacional de desenvolvedores com deficiência, com recursos e suporte.',
    category: 'communities',
    url: 'https://www.developerswithdisabilities.org',
    featured: false
  },
  {
    id: 'accessibility-slack',
    title: 'A11y Slack Community',
    description: 'Comunidade no Slack focada em acessibilidade web e tecnologias assistivas.',
    category: 'communities',
    url: 'https://a11y.slack.com',
    featured: false
  },

  // Certifications
  {
    id: 'comptia-aplus',
    title: 'CompTIA A+ Certification',
    description: 'Certificação internacional básica em suporte técnico e fundamentos de TI.',
    category: 'certifications',
    url: 'https://www.comptia.org/certifications/a',
    price: 'US$ 320 por exame',
    featured: true
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    description: 'Certificação de entrada da Amazon Web Services para computação em nuvem.',
    category: 'certifications',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner',
    price: 'US$ 100',
    featured: true
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics Individual Qualification',
    description: 'Certificação gratuita do Google para análise de dados web.',
    category: 'certifications',
    url: 'https://skillshop.withgoogle.com',
    price: 'Gratuito',
    featured: false
  },
  {
    id: 'microsoft-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    description: 'Certificação básica da Microsoft para computação em nuvem.',
    category: 'certifications',
    url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals',
    price: 'US$ 99',
    featured: false
  },

  // Jobs
  {
    id: 'isocial-vagas',
    title: 'i.Social - Vagas para PCD',
    description: 'Plataforma especializada em conectar pessoas com deficiência a oportunidades de emprego em TI.',
    category: 'jobs',
    url: 'https://www.isocial.com.br',
    featured: true
  },
  {
    id: 'vagas-pcd',
    title: 'Vagas.com - Filtro PCD',
    description: 'Portal de empregos com filtro específico para vagas destinadas a pessoas com deficiência.',
    category: 'jobs',
    url: 'https://www.vagas.com.br/vagas-para-pessoas-com-deficiencia',
    featured: true
  },
  {
    id: 'catho-inclusao',
    title: 'Catho - Programa de Inclusão',
    description: 'Portal com vagas e programa específico para inclusão de pessoas com deficiência.',
    category: 'jobs',
    url: 'https://www.catho.com.br/vagas-pcd',
    featured: false
  },
  {
    id: 'linkedin-jobs',
    title: 'LinkedIn - Vagas em TI',
    description: 'Use filtros para encontrar vagas remotas e empresas com programas de diversidade.',
    category: 'jobs',
    url: 'https://www.linkedin.com/jobs',
    featured: false
  },
  {
    id: 'remotar-vagas',
    title: 'Remotar - Trabalho Remoto',
    description: 'Plataforma focada em vagas de trabalho remoto, ideal para pessoas com deficiência.',
    category: 'jobs',
    url: 'https://remotar.com.br',
    featured: false
  },

  // Tools
  {
    id: 'vscode-accessibility',
    title: 'Visual Studio Code - Acessibilidade',
    description: 'Editor de código gratuito da Microsoft com excelente suporte a acessibilidade e screen readers.',
    category: 'tools',
    url: 'https://code.visualstudio.com/docs/editor/accessibility',
    price: 'Gratuito',
    featured: true
  },
  {
    id: 'nvda-screen-reader',
    title: 'NVDA Screen Reader',
    description: 'Leitor de tela gratuito e open-source para Windows, essencial para desenvolvedores cegos.',
    category: 'tools',
    url: 'https://www.nvaccess.org',
    price: 'Gratuito',
    featured: true
  },
  {
    id: 'github-desktop',
    title: 'GitHub Desktop',
    description: 'Interface gráfica acessível para controle de versão Git, facilitando o trabalho de desenvolvedores.',
    category: 'tools',
    url: 'https://desktop.github.com',
    price: 'Gratuito',
    featured: false
  },
  {
    id: 'wave-accessibility',
    title: 'WAVE Web Accessibility Evaluation',
    description: 'Ferramenta para avaliar a acessibilidade de websites e aplicações web.',
    category: 'tools',
    url: 'https://wave.webaim.org',
    price: 'Gratuito',
    featured: false
  },
  {
    id: 'dragon-speech',
    title: 'Dragon NaturallySpeaking',
    description: 'Software de reconhecimento de voz para pessoas com dificuldades motoras.',
    category: 'tools',
    url: 'https://www.nuance.com/dragon.html',
    price: 'US$ 150+',
    featured: false
  }
];