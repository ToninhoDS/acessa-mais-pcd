# 🤝 Guia de Contribuição

## 📋 Índice

1. [Como Contribuir](#como-contribuir)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Padrões de Código](#padrões-de-código)
4. [Acessibilidade](#acessibilidade)
5. [Testes](#testes)
6. [Processo de Pull Request](#processo-de-pull-request)
7. [Diretrizes de Commit](#diretrizes-de-commit)
8. [Reportando Bugs](#reportando-bugs)
9. [Solicitando Features](#solicitando-features)

## 🚀 Como Contribuir

### Tipos de Contribuição

Aceitamos diferentes tipos de contribuições:

- 🐛 **Bug Fixes**: Correção de problemas existentes
- ✨ **Features**: Novas funcionalidades
- 📚 **Documentação**: Melhorias na documentação
- ♿ **Acessibilidade**: Melhorias de acessibilidade
- 🎨 **UI/UX**: Melhorias na interface
- 🧪 **Testes**: Adição de testes
- 🔧 **Refatoração**: Melhorias no código

### Antes de Começar

1. **Leia a documentação** completa do projeto
2. **Verifique as issues** existentes para evitar duplicação
3. **Discuta mudanças grandes** abrindo uma issue primeiro
4. **Entenda o propósito** do projeto e seu público-alvo

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js 18.0.0+
- npm 8.0.0+
- Git
- Editor de código (VS Code recomendado)

### Setup Inicial

1. **Fork o repositório**
```bash
# No GitHub, clique em "Fork"
```

2. **Clone seu fork**
```bash
git clone https://github.com/seu-usuario/acessa-mais-pcd.git
cd acessa-mais-pcd
```

3. **Configure o upstream**
```bash
git remote add upstream https://github.com/original/acessa-mais-pcd.git
```

4. **Instale dependências**
```bash
npm install
```

5. **Execute o projeto**
```bash
npm run dev
```

### Extensões Recomendadas (VS Code)

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-eslint"
  ]
}
```

## 📝 Padrões de Código

### TypeScript

#### Interfaces e Tipos
```typescript
// ✅ Bom
interface UserData {
  id: string;
  name: string;
  email: string;
}

type UserStatus = 'active' | 'inactive' | 'pending';

// ❌ Evite
interface UserData {
  id: any;
  name: string;
  email: any;
}
```

#### Componentes React
```typescript
// ✅ Bom
interface ComponentProps {
  title: string;
  onAction?: () => void;
  disabled?: boolean;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  onAction,
  disabled = false
}) => {
  // implementação
};

// ❌ Evite
export const Component = (props: any) => {
  // implementação
};
```

### Nomenclatura

#### Arquivos e Pastas
```
✅ Bom
- components/
  - UserProfile.tsx
  - NavigationBar.tsx
  - accessibility/
    - ScreenReader.tsx

❌ Evite
- components/
  - user-profile.tsx
  - navigation_bar.tsx
  - accessibility/
    - screen-reader.tsx
```

#### Variáveis e Funções
```typescript
// ✅ Bom
const userName = 'João';
const handleUserClick = () => {};
const isUserActive = true;
const MAX_RETRY_ATTEMPTS = 3;

// ❌ Evite
const user_name = 'João';
const userClick = () => {};
const userActive = true;
const maxRetryAttempts = 3;
```

### Estrutura de Componentes

```typescript
// ✅ Estrutura recomendada
import React, { useState, useEffect } from 'react';
import { Icon } from 'lucide-react';

interface ComponentProps {
  // props aqui
}

export const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. Effects
  useEffect(() => {
    // effect aqui
  }, []);
  
  // 3. Handlers
  const handleClick = () => {
    // handler aqui
  };
  
  // 4. Render
  return (
    <div>
      {/* JSX aqui */}
    </div>
  );
};
```

## ♿ Acessibilidade

### Diretrizes Obrigatórias

Todas as contribuições devem manter ou melhorar a acessibilidade:

#### 1. ARIA Labels
```typescript
// ✅ Bom
<button 
  aria-label="Fechar modal"
  onClick={handleClose}
>
  <X className="h-4 w-4" />
</button>

// ❌ Evite
<button onClick={handleClose}>
  <X className="h-4 w-4" />
</button>
```

#### 2. Navegação por Teclado
```typescript
// ✅ Bom
<div 
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  onClick={handleClick}
  role="button"
  aria-label="Ação do botão"
>
  Conteúdo
</div>
```

#### 3. Contraste de Cores
```css
/* ✅ Bom - Contraste adequado */
.text-primary {
  color: #1f2937; /* Cinza escuro */
  background-color: #ffffff; /* Branco */
}

/* ❌ Evite - Contraste insuficiente */
.text-primary {
  color: #9ca3af; /* Cinza claro */
  background-color: #f3f4f6; /* Cinza muito claro */
}
```

#### 4. Textos Alternativos
```typescript
// ✅ Bom
<img 
  src="/logo.png" 
  alt="Logo da Acessa Mais PCD"
  className="h-8 w-8"
/>

// Para ícones decorativos
<Icon className="h-4 w-4" aria-hidden="true" />
```

### Testes de Acessibilidade

Antes de submeter uma PR, teste:

1. **Navegação por teclado**: Use apenas Tab, Enter, Espaço
2. **Screen reader**: Teste com NVDA, JAWS ou VoiceOver
3. **Contraste**: Use ferramentas como WAVE ou axe DevTools
4. **Zoom**: Teste com zoom de 200% e 400%

## 🧪 Testes

### Estrutura de Testes

```
tests/
├── components/
│   ├── Component.test.tsx
│   └── __snapshots__/
├── utils/
│   └── helpers.test.ts
└── setup.ts
```

### Exemplo de Teste

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Component } from '../Component';

describe('Component', () => {
  it('should render correctly', () => {
    render(<Component title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Component title="Test" onAction={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('should be accessible', () => {
    render(<Component title="Test" />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});
```

### Executando Testes

```bash
# Todos os testes
npm test

# Testes em modo watch
npm run test:watch

# Testes de acessibilidade
npm run test:a11y

# Cobertura de testes
npm run test:coverage
```

## 🔄 Processo de Pull Request

### 1. Preparação

```bash
# Atualize sua branch principal
git checkout main
git pull upstream main

# Crie uma nova branch
git checkout -b feature/nova-funcionalidade
```

### 2. Desenvolvimento

```bash
# Faça suas alterações
# Teste localmente
npm run dev
npm test
npm run lint

# Commit suas mudanças
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

### 3. Submissão

```bash
# Push para sua branch
git push origin feature/nova-funcionalidade

# Crie o Pull Request no GitHub
```

### Template de Pull Request

```markdown
## 📝 Descrição

Breve descrição das mudanças realizadas.

## 🎯 Tipo de Mudança

- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação
- [ ] Acessibilidade

## 🧪 Testes

- [ ] Testes unitários passando
- [ ] Testes de acessibilidade passando
- [ ] Testado em diferentes navegadores
- [ ] Testado com screen reader

## 📸 Screenshots (se aplicável)

Adicione screenshots das mudanças visuais.

## ♿ Checklist de Acessibilidade

- [ ] Navegação por teclado funciona
- [ ] ARIA labels apropriados
- [ ] Contraste de cores adequado
- [ ] Testado com screen reader
- [ ] Textos alternativos para imagens

## 🔗 Issues Relacionadas

Closes #123
```

## 📝 Diretrizes de Commit

### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula, etc.
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `chore`: Tarefas de build, dependências, etc.

### Exemplos

```bash
# ✅ Bom
feat(timeline): adiciona progresso visual para etapas concluídas
fix(accessibility): corrige navegação por teclado no modal
docs(readme): atualiza instruções de instalação
style(components): formata código seguindo padrões

# ❌ Evite
feat: add new feature
fix: bug fix
update: something
```

### Commit com Corpo

```bash
feat(timeline): adiciona sistema de progresso visual

- Implementa barra de progresso animada
- Adiciona indicadores visuais para etapas concluídas
- Persiste progresso no localStorage
- Adiciona testes unitários

Closes #123
```

## 🐛 Reportando Bugs

### Template de Issue

```markdown
## 🐛 Descrição do Bug

Descrição clara e concisa do problema.

## 🔄 Passos para Reproduzir

1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## ✅ Comportamento Esperado

O que deveria acontecer.

## 📱 Informações do Sistema

- **Sistema Operacional**: Windows 10 / macOS / Linux
- **Navegador**: Chrome 120 / Firefox 119 / Safari 17
- **Versão da Aplicação**: 1.0.0
- **Dispositivo**: Desktop / Mobile / Tablet

## 🖼️ Screenshots

Adicione screenshots se aplicável.

## 📋 Contexto Adicional

Qualquer informação adicional sobre o problema.
```

## 💡 Solicitando Features

### Template de Feature Request

```markdown
## 🚀 Descrição da Feature

Descrição clara da funcionalidade desejada.

## 🎯 Problema que Resolve

Explicação de como esta feature resolveria um problema existente.

## 💭 Soluções Alternativas

Outras soluções que você considerou.

## 📋 Critérios de Aceitação

- [ ] Critério 1
- [ ] Critério 2
- [ ] Critério 3

## 📱 Mockups/Screenshots

Adicione mockups ou screenshots se aplicável.

## ♿ Considerações de Acessibilidade

Como esta feature afetaria a acessibilidade.
```

## 🏷️ Labels e Milestones

### Labels Comuns

- `bug`: Problemas que precisam ser corrigidos
- `enhancement`: Melhorias em funcionalidades existentes
- `feature`: Novas funcionalidades
- `documentation`: Melhorias na documentação
- `accessibility`: Mudanças relacionadas à acessibilidade
- `good first issue`: Boas para iniciantes
- `help wanted`: Precisa de ajuda
- `priority: high`: Alta prioridade
- `priority: low`: Baixa prioridade

## 📞 Comunicação

### Canais

- **Issues**: Para bugs e feature requests
- **Discussions**: Para discussões gerais
- **Pull Requests**: Para código e documentação

### Código de Conduta

- Seja respeitoso e inclusivo
- Use linguagem acessível
- Ajude outros contribuidores
- Reporte comportamentos inadequados

## 🎉 Reconhecimento

Contribuições significativas serão reconhecidas:

- Menção no README
- Badge de contribuidor
- Agradecimento em releases
- Participação em decisões do projeto

---

**Obrigado por contribuir para a inclusão digital! 🌟** 