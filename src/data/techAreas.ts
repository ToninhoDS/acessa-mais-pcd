export interface TechArea {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
  salaryRange: string;
  accessibilityNotes: string;
  certifications?: string[];
}

export const techAreas: TechArea[] = [
  {
    id: 'development',
    name: 'Desenvolvimento de Software',
    shortDescription: 'Criação de aplicações web, mobile e desktop',
    description: 'O desenvolvimento de software envolve a criação, teste e manutenção de aplicações. É uma das áreas mais inclusivas da TI, oferecendo trabalho remoto, horários flexíveis e excelente compatibilidade com tecnologias assistivas. Desenvolvedores criam desde websites simples até sistemas complexos.',
    icon: 'Code',
    color: 'bg-blue-600',
    skills: ['JavaScript', 'Python', 'HTML/CSS', 'React', 'Git', 'Bancos de Dados'],
    salaryRange: 'R$ 3.500 - R$ 15.000+',
    accessibilityNotes: 'Excelente área para PCD com ferramentas como leitores de tela compatíveis com IDEs, trabalho 100% remoto possível, e comunidade muito inclusiva. Editores de código modernos têm ótima acessibilidade.',
    certifications: ['AWS Certified Developer', 'Microsoft Azure Developer', 'Oracle Java Certification']
  },
  {
    id: 'infrastructure',
    name: 'Infraestrutura e Redes',
    shortDescription: 'Gerenciamento de servidores, redes e cloud',
    description: 'Profissionais de infraestrutura mantêm sistemas funcionando, gerenciam servidores, redes e serviços em nuvem. É uma área fundamental para qualquer empresa e oferece boa estabilidade profissional com oportunidades de crescimento.',
    icon: 'Server',
    color: 'bg-green-600',
    skills: ['Linux', 'Windows Server', 'AWS/Azure', 'Docker', 'Redes TCP/IP', 'Segurança'],
    salaryRange: 'R$ 4.000 - R$ 12.000+',
    accessibilityNotes: 'Área com boa acessibilidade, especialmente em cloud computing. Muitas tarefas podem ser automatizadas via scripts. Trabalho remoto é comum, e ferramentas de linha de comando são muito acessíveis.',
    certifications: ['CompTIA Network+', 'AWS Solutions Architect', 'Microsoft Azure Administrator']
  },
  {
    id: 'security',
    name: 'Segurança da Informação',
    shortDescription: 'Proteção de dados e sistemas contra ameaças',
    description: 'Especialistas em segurança protegem organizações contra ameaças digitais, implementam políticas de segurança e respondem a incidentes. É uma das áreas de maior crescimento e demanda em TI.',
    icon: 'Shield',
    color: 'bg-red-600',
    skills: ['Ethical Hacking', 'Firewall', 'Análise de Vulnerabilidades', 'Compliance', 'Forense Digital'],
    salaryRange: 'R$ 5.000 - R$ 18.000+',
    accessibilityNotes: 'Área que valoriza habilidades analíticas e atenção aos detalhes. Muitas ferramentas de segurança têm interface de linha de comando acessível. Trabalho remoto é muito comum.',
    certifications: ['CEH (Certified Ethical Hacker)', 'CISSP', 'CompTIA Security+']
  },
  {
    id: 'mobile',
    name: 'Desenvolvimento Mobile',
    shortDescription: 'Criação de aplicativos para smartphones e tablets',
    description: 'Desenvolvedores mobile criam aplicativos para iOS e Android. Com o crescimento do mercado mobile, há muitas oportunidades tanto em empresas quanto como freelancer.',
    icon: 'Smartphone',
    color: 'bg-purple-600',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'UI/UX Mobile', 'APIs'],
    salaryRange: 'R$ 4.000 - R$ 16.000+',
    accessibilityNotes: 'Desenvolvimento mobile tem ótima acessibilidade com IDEs modernos. Importante oportunidade para PCD criarem apps mais acessíveis. Trabalho remoto é padrão na área.',
    certifications: ['Google Associate Android Developer', 'Apple iOS Developer']
  },
  {
    id: 'data',
    name: 'Análise de Dados',
    shortDescription: 'Extração de insights através de dados',
    description: 'Analistas de dados coletam, processam e interpretam dados para ajudar empresas a tomar decisões estratégicas. É uma área em crescimento com aplicações em todos os setores.',
    icon: 'Database',
    color: 'bg-yellow-600',
    skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Estatística', 'Machine Learning'],
    salaryRange: 'R$ 4.500 - R$ 14.000+',
    accessibilityNotes: 'Ferramentas de análise como Python e R têm boa acessibilidade. Trabalho focado em lógica e interpretação, ideal para pessoas com habilidades analíticas. Muitas oportunidades remotas.',
    certifications: ['Microsoft Power BI', 'Google Data Analytics', 'AWS Data Analytics']
  },
  {
    id: 'devops',
    name: 'DevOps e Automação',
    shortDescription: 'Automação de processos de desenvolvimento',
    description: 'Profissionais DevOps conectam desenvolvimento e operações, automatizando processos de deploy, monitoramento e infraestrutura. É uma área moderna e bem valorizada.',
    icon: 'Settings',
    color: 'bg-indigo-600',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoramento', 'Scripting'],
    salaryRange: 'R$ 6.000 - R$ 20.000+',
    accessibilityNotes: 'Área com foco em automação e linha de comando, muito acessível. Trabalho remoto é padrão. Valoriza lógica e resolução de problemas complexos.',
    certifications: ['Docker Certified Associate', 'Kubernetes Administrator', 'AWS DevOps Engineer']
  },
  {
    id: 'support',
    name: 'Suporte Técnico',
    shortDescription: 'Atendimento e resolução de problemas técnicos',
    description: 'Profissionais de suporte ajudam usuários com problemas técnicos, mantêm sistemas funcionando e fornecem treinamento. É uma excelente porta de entrada para a área de TI.',
    icon: 'HeadphonesIcon',
    color: 'bg-teal-600',
    skills: ['Troubleshooting', 'Comunicação', 'Windows/Linux', 'Redes', 'ITIL', 'Paciência'],
    salaryRange: 'R$ 2.500 - R$ 8.000+',
    accessibilityNotes: 'Área que valoriza habilidades de comunicação e empatia. Muitas empresas têm programas específicos de inclusão para suporte. Pode evoluir para áreas mais técnicas.',
    certifications: ['CompTIA A+', 'ITIL Foundation', 'Microsoft 365 Certified']
  },
  {
    id: 'management',
    name: 'Gestão de TI',
    shortDescription: 'Liderança de equipes e projetos tecnológicos',
    description: 'Gestores de TI lideram equipes, gerenciam projetos e tomam decisões estratégicas sobre tecnologia. Combina conhecimento técnico com habilidades de liderança.',
    icon: 'TrendingUp',
    color: 'bg-orange-600',
    skills: ['Liderança', 'Gestão de Projetos', 'Orçamento', 'Estratégia', 'ITIL', 'Comunicação'],
    salaryRange: 'R$ 8.000 - R$ 25.000+',
    accessibilityNotes: 'Área que valoriza habilidades de liderança e visão estratégica. PCD podem trazer perspectivas únicas para gestão de equipes diversas. Trabalho flexível possível.',
    certifications: ['PMP (Project Management Professional)', 'ITIL Expert', 'Certified ScrumMaster']
  },
  {
    id: 'fintech',
    name: 'TI Bancária/Fintech',
    shortDescription: 'Tecnologia aplicada ao setor financeiro',
    description: 'Profissionais especializados em soluções tecnológicas para bancos e fintechs. Setor com alta demanda, boa remuneração e programas robustos de inclusão.',
    icon: 'Building',
    color: 'bg-emerald-600',
    skills: ['Core Banking', 'APIs Financeiras', 'Compliance', 'Blockchain', 'Pagamentos', 'Segurança'],
    salaryRange: 'R$ 6.000 - R$ 22.000+',
    accessibilityNotes: 'Setor financeiro tem excelentes programas de inclusão e diversidade. Muitas oportunidades para PCD em desenvolvimento de sistemas bancários, compliance e análise de riscos.',
    certifications: ['Certified Bitcoin Professional', 'FRM (Financial Risk Manager)', 'CISA (Certified Information Systems Auditor)']
  }
];