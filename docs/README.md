# Acessa Mais PCD - Documentação Técnica

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Sistema](#arquitetura-do-sistema)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes](#componentes)
5. [Dados e Estado](#dados-e-estado)
6. [Acessibilidade](#acessibilidade)
7. [Tecnologias Utilizadas](#tecnologias-utilizadas)
8. [Configuração e Instalação](#configuração-e-instalação)
9. [Desenvolvimento](#desenvolvimento)
10. [Deploy](#deploy)
11. [Contribuição](#contribuição)

## 🎯 Visão Geral

O **Acessa Mais PCD** é uma aplicação web progressiva (PWA) desenvolvida especificamente para pessoas com deficiência (PCD) que desejam ingressar na área de Tecnologia da Informação. A plataforma oferece uma jornada estruturada de aprendizado, recursos especializados e ferramentas de acessibilidade integradas.

### Propósito e Importância

A inclusão digital e profissional de pessoas com deficiência é uma necessidade urgente na sociedade atual. O setor de TI oferece oportunidades únicas para PCD devido à:

- **Flexibilidade de trabalho**: Possibilidade de trabalho remoto e horários adaptáveis
- **Tecnologias assistivas**: Ferramentas avançadas que facilitam o desenvolvimento
- **Demanda crescente**: Setor em constante expansão com escassez de profissionais
- **Remuneração atrativa**: Salários competitivos e possibilidade de crescimento

### Objetivos do Projeto

1. **Democratizar o acesso** à educação em TI para pessoas com deficiência
2. **Fornecer uma jornada estruturada** de aprendizado com recursos especializados
3. **Promover a inclusão** através de ferramentas de acessibilidade integradas
4. **Conectar PCD** com oportunidades de emprego e comunidades da área
5. **Reduzir barreiras** de entrada no mercado de trabalho tecnológico

## 🏗️ Arquitetura do Sistema

### Padrão de Arquitetura

A aplicação segue o padrão **Single Page Application (SPA)** com arquitetura baseada em componentes React, utilizando:

- **React 18** com TypeScript para robustez e type safety
- **Vite** como bundler e dev server para performance otimizada
- **Tailwind CSS** para estilização responsiva e acessível
- **LocalStorage** para persistência de dados do usuário

### Fluxo de Dados

```
User Input → React Components → State Management → LocalStorage
     ↓
UI Updates ← Component Re-render ← State Changes
```

### Estrutura de Navegação

A aplicação utiliza navegação por abas com 4 seções principais:

1. **Timeline** - Jornada estruturada de aprendizado
2. **Explore Areas** - Exploração de áreas de especialização
3. **Resources** - Biblioteca de recursos e materiais
4. **Profile** - Configurações pessoais e acessibilidade

## 📁 Estrutura do Projeto

```
acessa-mais-pcd/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── AccessibilityBar.tsx
│   │   ├── ExploreAreas.tsx
│   │   ├── Header.tsx
│   │   ├── NavigationBar.tsx
│   │   ├── Profile.tsx
│   │   ├── Resources.tsx
│   │   ├── Timeline.tsx
│   │   └── WelcomeModal.tsx
│   ├── data/               # Dados estáticos da aplicação
│   │   ├── resources.ts
│   │   ├── techAreas.ts
│   │   └── timelineData.ts
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── docs/                   # Documentação do projeto
├── package.json            # Dependências e scripts
├── vite.config.ts          # Configuração do Vite
├── tailwind.config.js      # Configuração do Tailwind
└── tsconfig.json           # Configuração do TypeScript
```

## 🧩 Componentes

### Componentes Principais

#### 1. App.tsx
**Responsabilidade**: Componente raiz que gerencia o estado global e roteamento interno.

**Funcionalidades**:
- Gerenciamento de estado global (view atual, configurações de acessibilidade)
- Persistência de dados no localStorage
- Controle de modal de boas-vindas
- Aplicação de configurações de acessibilidade

**Props**: Nenhuma
**Estado**:
- `currentView`: View atual da aplicação
- `fontSize`: Tamanho da fonte (normal/large/extra-large)
- `highContrast`: Modo alto contraste
- `showWelcomeModal`: Controle do modal de boas-vindas
- `userName`: Nome do usuário

#### 2. Timeline.tsx
**Responsabilidade**: Exibe a jornada estruturada de aprendizado com progresso interativo.

**Funcionalidades**:
- Lista de etapas da jornada com progresso visual
- Marcação de etapas como concluídas
- Expansão de detalhes de cada etapa
- Barra de progresso fixa durante scroll
- Links para recursos externos

**Props**:
- `userName?: string` - Nome do usuário para personalização

**Estado**:
- `completedSteps`: Set com IDs das etapas concluídas
- `activeStep`: ID da etapa atualmente expandida
- `isProgressSticky`: Controle da barra de progresso fixa

#### 3. ExploreAreas.tsx
**Responsabilidade**: Permite explorar diferentes áreas de especialização em TI.

**Funcionalidades**:
- Lista de áreas de TI com descrições detalhadas
- Expansão de informações por área
- Exibição de habilidades necessárias
- Faixas salariais e oportunidades para PCD
- Certificações recomendadas

**Props**: Nenhuma
**Estado**:
- `selectedArea`: ID da área atualmente selecionada

#### 4. Resources.tsx
**Responsabilidade**: Biblioteca de recursos filtrados por categoria.

**Funcionalidades**:
- Lista de recursos com filtros por categoria
- Busca por texto
- Categorização (cursos, comunidades, certificações, vagas, ferramentas)
- Links externos com indicação de preço
- Recursos em destaque

**Props**: Nenhuma
**Estado**:
- `selectedCategory`: Categoria selecionada para filtro
- `searchTerm`: Termo de busca

#### 5. AccessibilityBar.tsx
**Responsabilidade**: Barra de ferramentas de acessibilidade.

**Funcionalidades**:
- Controle de tamanho de fonte
- Toggle de alto contraste
- Persistência de configurações
- Interface acessível com ARIA labels

**Props**:
- `fontSize`: Tamanho atual da fonte
- `setFontSize`: Função para alterar tamanho da fonte
- `highContrast`: Estado do alto contraste
- `setHighContrast`: Função para alterar alto contraste

#### 6. WelcomeModal.tsx
**Responsabilidade**: Modal de boas-vindas para novos usuários.

**Funcionalidades**:
- Coleta do nome do usuário
- Interface acessível e responsiva
- Validação de entrada
- Persistência do nome no localStorage

**Props**:
- `onComplete`: Callback executado quando o modal é completado

## 📊 Dados e Estado

### Estruturas de Dados

#### TimelineStep
```typescript
interface TimelineStep {
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
```

#### TechArea
```typescript
interface TechArea {
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
```

#### Resource
```typescript
interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'courses' | 'communities' | 'certifications' | 'jobs' | 'tools';
  url: string;
  price?: string;
  featured: boolean;
}
```

### Persistência de Dados

A aplicação utiliza **localStorage** para persistir:

- `userName`: Nome do usuário
- `hasVisited`: Flag de primeira visita
- `completedSteps`: Array de IDs das etapas concluídas
- `fontSize`: Configuração de tamanho de fonte
- `highContrast`: Configuração de alto contraste

## ♿ Acessibilidade

### Implementações de Acessibilidade

#### 1. Navegação por Teclado
- Todos os elementos interativos são acessíveis via teclado
- Ordem de tabulação lógica
- Indicadores visuais de foco

#### 2. Screen Readers
- ARIA labels apropriados em todos os elementos
- Roles semânticos corretos
- Textos alternativos para ícones
- Skip links para navegação rápida

#### 3. Contraste e Tipografia
- Múltiplos tamanhos de fonte (normal, large, extra-large)
- Modo alto contraste
- Cores com contraste adequado (WCAG AA)

#### 4. Responsividade
- Design mobile-first
- Interface adaptável a diferentes tamanhos de tela
- Elementos touch-friendly

### Conformidade com Padrões

- **WCAG 2.1 AA**: Conformidade com diretrizes de acessibilidade web
- **Section 508**: Padrões de acessibilidade federal dos EUA
- **Lei Brasileira de Inclusão**: Conformidade com legislação brasileira

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1**: Biblioteca para construção de interfaces
- **TypeScript 5.5.3**: Linguagem tipada para JavaScript
- **Vite 5.4.2**: Build tool e dev server
- **Tailwind CSS 3.4.1**: Framework CSS utilitário
- **Lucide React 0.344.0**: Biblioteca de ícones

### Desenvolvimento
- **ESLint 9.9.1**: Linter para qualidade de código
- **PostCSS 8.4.35**: Processador CSS
- **Autoprefixer 10.4.18**: Prefixos CSS automáticos

### Configuração
- **Node.js**: Runtime JavaScript
- **npm**: Gerenciador de pacotes

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js 18.0.0 ou superior
- npm 8.0.0 ou superior

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/acessa-mais-pcd.git
cd acessa-mais-pcd
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera build de produção
- `npm run preview`: Visualiza o build de produção
- `npm run lint`: Executa o linter

## 🚀 Desenvolvimento

### Estrutura de Desenvolvimento

#### Adicionando Novos Componentes

1. Crie o arquivo em `src/components/`
2. Use TypeScript com interfaces bem definidas
3. Implemente acessibilidade (ARIA labels, navegação por teclado)
4. Adicione testes se necessário

#### Adicionando Novos Dados

1. Atualize as interfaces em `src/data/`
2. Adicione os dados nos arrays correspondentes
3. Mantenha a consistência com o formato existente

#### Modificando Estilos

1. Use classes Tailwind CSS
2. Para estilos customizados, use `src/index.css`
3. Mantenha a responsividade e acessibilidade

### Padrões de Código

#### TypeScript
- Use interfaces para definir tipos
- Evite `any`, use tipos específicos
- Documente funções complexas

#### React
- Use functional components com hooks
- Mantenha componentes pequenos e focados
- Use props tipadas

#### CSS
- Prefira classes Tailwind
- Use variáveis CSS para valores reutilizáveis
- Mantenha especificidade baixa

## 🌐 Deploy

### Build de Produção

```bash
npm run build
```

O build será gerado na pasta `dist/` com:
- Arquivos otimizados e minificados
- Assets com hash para cache busting
- Configuração para PWA

### Plataformas de Deploy

#### Vercel (Recomendado)
1. Conecte o repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

#### Netlify
1. Conecte o repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

#### GitHub Pages
1. Configure o workflow do GitHub Actions
2. Use a action `peaceiris/actions-gh-pages`
3. Configure o branch de deploy

### Configuração de Ambiente

#### Variáveis de Ambiente
Crie um arquivo `.env` na raiz:

```env
VITE_APP_TITLE=Acessa Mais PCD
VITE_APP_VERSION=1.0.0
```

#### Configuração de PWA
O projeto está configurado como PWA com:
- Manifest.json para instalação
- Service worker para cache offline
- Ícones em múltiplos tamanhos

## 🤝 Contribuição

### Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch** para sua feature
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Faça commit** das suas mudanças
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request**

### Diretrizes de Contribuição

#### Código
- Siga os padrões de código estabelecidos
- Adicione testes para novas funcionalidades
- Mantenha a acessibilidade em todas as mudanças
- Documente mudanças significativas

#### Acessibilidade
- Teste com screen readers
- Verifique navegação por teclado
- Mantenha contraste adequado
- Use ARIA labels apropriados

#### Dados
- Mantenha a qualidade e precisão dos dados
- Verifique links externos regularmente
- Adicione recursos relevantes para PCD
- Mantenha informações atualizadas

### Áreas para Contribuição

1. **Novos Recursos**: Adicionar mais áreas de TI ou recursos
2. **Melhorias de Acessibilidade**: Aprimorar a experiência para diferentes deficiências
3. **Internacionalização**: Adicionar suporte a outros idiomas
4. **Testes**: Implementar testes automatizados
5. **Documentação**: Melhorar e expandir a documentação

## 📞 Suporte

### Problemas Conhecidos

- Alguns links externos podem estar desatualizados
- Performance pode ser afetada em dispositivos muito antigos
- Algumas funcionalidades podem não funcionar offline

### Reportando Bugs

1. Use o sistema de Issues do GitHub
2. Inclua informações sobre:
   - Sistema operacional
   - Navegador e versão
   - Passos para reproduzir
   - Comportamento esperado vs. atual

### Solicitações de Features

1. Abra uma Issue com a tag "enhancement"
2. Descreva a funcionalidade desejada
3. Explique o benefício para usuários PCD
4. Forneça exemplos de uso

---

**Desenvolvido com ❤️ para a inclusão digital de pessoas com deficiência** 