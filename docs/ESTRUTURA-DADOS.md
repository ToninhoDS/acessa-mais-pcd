# 📊 Estrutura de Dados e APIs

## Visão Geral

Este documento detalha a estrutura de dados utilizada no projeto Acessa Mais PCD, incluindo interfaces TypeScript, tipos de dados e organização das informações.

## 🗂️ Organização dos Dados

### Localização dos Arquivos

```
src/data/
├── timelineData.ts    # Dados da jornada de aprendizado
├── techAreas.ts       # Áreas de especialização em TI
└── resources.ts       # Biblioteca de recursos
```

## 📋 Interfaces TypeScript

### TimelineStep

Representa uma etapa da jornada de aprendizado.

```typescript
interface TimelineStep {
  id: number;                    // Identificador único da etapa
  title: string;                 // Título da etapa
  description: string;           // Descrição resumida
  category: string;              // Categoria (Fundamentos, Hardware, etc.)
  duration: string;              // Duração estimada (ex: "2-3 semanas")
  content?: string;              // Conteúdo detalhado da etapa
  videos?: Array<{               // Lista de vídeos recomendados
    title: string;
    url: string;
  }>;
  links?: Array<{                // Lista de links úteis
    title: string;
    url: string;
    description?: string;
  }>;
}
```

**Exemplo de uso:**
```typescript
const etapa: TimelineStep = {
  id: 1,
  title: "Introdução ao Mundo da TI",
  description: "Entenda os fundamentos e conceitos básicos da tecnologia da informação.",
  category: "Fundamentos",
  duration: "1-2 semanas",
  content: "A Tecnologia da Informação (TI) engloba todos os aspectos...",
  videos: [
    {
      title: "O que é TI? Conceitos básicos",
      url: "https://www.youtube.com/watch?v=exemplo"
    }
  ],
  links: [
    {
      title: "Curso Gratuito: Introdução à TI - Coursera",
      url: "https://www.coursera.org",
      description: "Curso completo sobre fundamentos de TI"
    }
  ]
};
```

### TechArea

Representa uma área de especialização em TI.

```typescript
interface TechArea {
  id: string;                    // Identificador único da área
  name: string;                  // Nome da área
  shortDescription: string;      // Descrição resumida
  description: string;           // Descrição detalhada
  icon: string;                  // Nome do ícone (Lucide React)
  color: string;                 // Classe CSS de cor (Tailwind)
  skills: string[];              // Habilidades necessárias
  salaryRange: string;           // Faixa salarial
  accessibilityNotes: string;    // Notas sobre acessibilidade para PCD
  certifications?: string[];     // Certificações recomendadas
}
```

**Exemplo de uso:**
```typescript
const area: TechArea = {
  id: 'development',
  name: 'Desenvolvimento de Software',
  shortDescription: 'Criação de aplicações web, mobile e desktop',
  description: 'O desenvolvimento de software envolve a criação...',
  icon: 'Code',
  color: 'bg-blue-600',
  skills: ['JavaScript', 'Python', 'HTML/CSS', 'React', 'Git'],
  salaryRange: 'R$ 3.500 - R$ 15.000+',
  accessibilityNotes: 'Excelente área para PCD com ferramentas como leitores de tela...',
  certifications: ['AWS Certified Developer', 'Microsoft Azure Developer']
};
```

### Resource

Representa um recurso da biblioteca (curso, comunidade, etc.).

```typescript
interface Resource {
  id: string;                    // Identificador único do recurso
  title: string;                 // Título do recurso
  description: string;           // Descrição detalhada
  category: 'courses' | 'communities' | 'certifications' | 'jobs' | 'tools';
  url: string;                   // URL do recurso
  price?: string;                // Preço (opcional)
  featured: boolean;             // Se é um recurso em destaque
}
```

**Exemplo de uso:**
```typescript
const recurso: Resource = {
  id: 'freecodecamp',
  title: 'freeCodeCamp - Programação Gratuita',
  description: 'Plataforma completa com cursos gratuitos de desenvolvimento web...',
  category: 'courses',
  url: 'https://www.freecodecamp.org',
  price: 'Gratuito',
  featured: true
};
```

## 📊 Estrutura de Dados

### Timeline Data (timelineData.ts)

Contém 10 etapas da jornada de aprendizado:

1. **Introdução ao Mundo da TI** - Fundamentos básicos
2. **Conhecendo Hardware e Manutenção** - Componentes físicos
3. **Infraestrutura de TI e Redes** - Redes e servidores
4. **Desenvolvimento de Software - Primeiros Passos** - Programação básica
5. **Suporte Técnico e Atendimento** - Atendimento ao usuário
6. **Gestão de Projetos em TI** - Liderança e organização
7. **TI no Setor Financeiro** - Tecnologia bancária
8. **Segurança da Informação** - Cibersegurança
9. **Preparação para o Mercado de Trabalho** - Carreira e currículo
10. **Networking e Comunidades Tech** - Conexões profissionais

### Tech Areas (techAreas.ts)

Contém 9 áreas de especialização:

1. **Desenvolvimento de Software** - Criação de aplicações
2. **Infraestrutura e Redes** - Gerenciamento de sistemas
3. **Segurança da Informação** - Proteção de dados
4. **Desenvolvimento Mobile** - Apps para smartphones
5. **Análise de Dados** - Interpretação de dados
6. **DevOps e Automação** - Automação de processos
7. **Suporte Técnico** - Atendimento e resolução
8. **Gestão de TI** - Liderança de equipes
9. **TI Bancária/Fintech** - Tecnologia financeira

### Resources (resources.ts)

Organizados em 5 categorias:

- **Cursos**: Plataformas de aprendizado
- **Comunidades**: Grupos e redes profissionais
- **Certificações**: Certificações internacionais
- **Vagas**: Portais de emprego
- **Ferramentas**: Software e ferramentas de acessibilidade

## 💾 Persistência de Dados

### LocalStorage

A aplicação utiliza localStorage para persistir dados do usuário:

```typescript
// Chaves utilizadas
const STORAGE_KEYS = {
  USER_NAME: 'userName',
  HAS_VISITED: 'hasVisited',
  COMPLETED_STEPS: 'completedSteps',
  FONT_SIZE: 'fontSize',
  HIGH_CONTRAST: 'highContrast'
} as const;
```

### Estrutura dos Dados Persistidos

```typescript
// Dados salvos no localStorage
interface UserData {
  userName: string;                    // Nome do usuário
  hasVisited: boolean;                 // Se já visitou a aplicação
  completedSteps: number[];            // IDs das etapas concluídas
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;               // Modo alto contraste
}
```

### Funções de Persistência

```typescript
// Exemplo de funções para gerenciar localStorage
const saveUserData = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
};

const loadUserData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return null;
  }
};
```

## 🔄 Estado da Aplicação

### Estado Global (App.tsx)

```typescript
interface AppState {
  currentView: 'timeline' | 'explore' | 'resources' | 'profile';
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  showWelcomeModal: boolean;
  userName: string;
}
```

### Estados dos Componentes

#### Timeline
```typescript
interface TimelineState {
  completedSteps: Set<number>;
  activeStep: number | null;
  isProgressSticky: boolean;
  scrollY: number;
}
```

#### Resources
```typescript
interface ResourcesState {
  selectedCategory: 'all' | 'courses' | 'communities' | 'certifications' | 'jobs' | 'tools';
  searchTerm: string;
}
```

#### ExploreAreas
```typescript
interface ExploreAreasState {
  selectedArea: string | null;
}
```

## 🎯 Validação de Dados

### Validação de Entrada

```typescript
// Validação do nome do usuário
const validateUserName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

// Validação de URLs
const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
```

### Sanitização

```typescript
// Sanitização de texto
const sanitizeText = (text: string): string => {
  return text
    .trim()
    .replace(/[<>]/g, '') // Remove caracteres potencialmente perigosos
    .substring(0, 1000);  // Limita o tamanho
};
```

## 📈 Performance e Otimização

### Estratégias de Otimização

1. **Dados Estáticos**: Todos os dados são carregados estaticamente
2. **Lazy Loading**: Componentes são carregados sob demanda
3. **Memoização**: Uso de React.memo para componentes pesados
4. **Filtros Eficientes**: Filtros implementados com algoritmos otimizados

### Estrutura de Cache

```typescript
// Cache para dados filtrados
interface FilterCache {
  [key: string]: {
    data: any[];
    timestamp: number;
    expiresIn: number;
  };
}
```

## 🔧 Extensibilidade

### Adicionando Novos Dados

Para adicionar novos dados, siga estas diretrizes:

1. **Mantenha a consistência** com as interfaces existentes
2. **Valide os dados** antes de adicionar
3. **Documente mudanças** na estrutura
4. **Teste a acessibilidade** dos novos recursos

### Exemplo: Adicionando Nova Área

```typescript
// 1. Adicione à interface TechArea se necessário
// 2. Adicione os dados ao array techAreas
const novaArea: TechArea = {
  id: 'ai-ml',
  name: 'Inteligência Artificial e Machine Learning',
  shortDescription: 'Desenvolvimento de sistemas inteligentes',
  description: 'Área focada em algoritmos de IA...',
  icon: 'Brain',
  color: 'bg-purple-600',
  skills: ['Python', 'TensorFlow', 'PyTorch', 'Estatística'],
  salaryRange: 'R$ 8.000 - R$ 25.000+',
  accessibilityNotes: 'Área com excelente acessibilidade...',
  certifications: ['Google AI Certification', 'Microsoft AI Engineer']
};

// 3. Adicione ao array
techAreas.push(novaArea);
```

## 🧪 Testes de Dados

### Testes de Validação

```typescript
// Teste para validar estrutura de dados
const validateTimelineData = (data: TimelineStep[]): boolean => {
  return data.every(step => 
    step.id > 0 &&
    step.title.length > 0 &&
    step.description.length > 0 &&
    step.category.length > 0 &&
    step.duration.length > 0
  );
};

// Teste para validar URLs
const validateResourceUrls = (resources: Resource[]): boolean => {
  return resources.every(resource => validateUrl(resource.url));
};
```

## 📚 Referências

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React State Management](https://react.dev/learn/managing-state)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Última atualização**: Dezembro 2024 