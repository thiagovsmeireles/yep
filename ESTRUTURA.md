# 📁 Estrutura do Projeto

```
nosso-universo/
│
├── 📄 Docs (Leia-me ANTES!)
│   ├── QUICKSTART.md          ⭐ Comece por aqui!
│   ├── README.md              📖 Visão geral do projeto
│   ├── PERSONALIZACAO.md      🎨 Como personalizar
│   ├── DEPLOY.md              🚀 Como fazer deploy
│   └── REFERENCIA.md          🔧 Guia técnico referência
│
├── 🔧 Configuração
│   ├── package.json            📦 Dependências do NPM
│   ├── vite.config.ts          ⚡ Config do Vite  
│   ├── tsconfig.json           📘 TypeScript config
│   ├── tailwind.config.ts      🎨 Tailwind CSS config
│   ├── postcss.config.js       🎀 PostCSS config
│   ├── tsconfig.node.json      📘 TypeScript (node)
│   └── .gitignore              🔐 Arquivos ignorados Git
│
├── 🌐 Web Entry Point
│   └── index.html              🏠 Página HTML principal
│
├── 💻 Source Code (Principal!)
│   └── src/
│       ├── main.tsx             🚀 Inicialização React
│       ├── App.tsx              🎬 Componente principal
│       ├── index.css            🎨 Estilos globais
│       │
│       └── components/          ✨ Componentes reutilizáveis
│           ├── IntroScreen.tsx  📽️ Tela de abertura
│           ├── UniverseScreen.tsx 🌌 Tela principal
│           ├── StarField.tsx    ⭐ Fundo com estrelas
│           ├── InteractiveElements.tsx 🎯 Elementos interativos
│           ├── MessageModal.tsx 💬 Modal de mensagens
│           └── MusicPlayer.tsx  🎵 Controle de som
│
├── 📦 Dependencies (criadas por npm)
│   └── node_modules/           ⚙️ Não editar!
│
├── 🛠️ VS Code Config
│   └── .vscode/
│       ├── settings.json        ⚙️ Configurações do editor
│       └── extensions.json      📦 Extensões recomendadas
│
└── 🚀 Build Output (criada por npm run build)
    └── dist/                    📦 Arquivos para produção
```

---

## 📋 O que Fazer em Cada Arquivo?

### 1. **Documentação** (Leia-me)
- `QUICKSTART.md` - **Comece aqui! 3 passos para rodando**
- `README.md` - Descrição geral e stack técnico
- `PERSONALIZACAO.md` - Como mudar mensagens, cores, etc
- `DEPLOY.md` - Como colocar online
- `REFERENCIA.md` - Lista de emojis, cores, animações

### 2. **Configurações** (Não mexer muito)
Estes arquivos configuram como o projeto roda:
- `package.json` - Lista de pacotes (não delete, apenas adicione se necessário)
- `vite.config.ts` - Config do servidor (geralmente OK)
- `tailwind.config.ts` - **Edite aqui para mudar cores, fonts, animações globais**
- `tsconfig.json` - Configuração TypeScript

### 3. **Código Principal** (`src/` é aonde a mágica acontece!)

#### `src/main.tsx`
- Inicializa a aplicação React
- Não precisa editar

#### `src/App.tsx`
- Componente pai principal
- Controla qual tela mostrar (Intro ou Universe)
- **Aqui você controla o fluxo geral**

#### `src/index.css`
- Estilos globais (fontes, cores base, etc)
- Importa Tailwind CSS
- Edite aqui para dark mode global, fuentes, etc

#### `src/components/` (Os 6 componentes principais)

**1. `IntroScreen.tsx`** - A tela de abertura
   - Mostra por 6 segundos
   - Animação de fadeIn/slideIn
   - **Edite aqui**: Trocar texto da intro

**2. `UniverseScreen.tsx`** - Tela principal
   - Layout do "universo"
   - Posiciona os botões de controle
   - **Geralmente não precisa editar**

**3. `StarField.tsx`** - Fundo animado
   - Cria efeito de parallax com estrelas
   - Estrela cadente aleatória
   - **Edite aqui**: Quantidades de estrelas, cores

**4. `InteractiveElements.tsx` ⭐ MAIS IMPORTANTE**
   - Todas as mensagens estão aqui
   - Posições dos elementos (foguete, planetas, etc)
   - **NÃO edite posições, apenas mensagens!**
   - Linhas 5-60 → Mensagens personalizadas

**5. `MessageModal.tsx`** - Janela popup
   - Mostra as mensagens quando clica
   - Estilos e animação do modal
   - **Geralmente não precisa editar**

**6. `MusicPlayer.tsx`** - Botão de som
   - Pequeno botão no canto inferior esquerdo
   - **Edite aqui** para adicionar uma música real

---

## 🎯 Fluxo da Aplicação

```
1. npm run dev
   ↓
2. Abre localhost:3000
   ↓
3. App.tsx é carregado
   ↓
4. Mostra IntroScreen por 6 segundos
   ↓
5. Transita para UniverseScreen
   ↓
6. Usuário clica em elementos
   ↓
7. MessageModal mostra mensagens
   ↓
8. Usuário pode resetar com "Recomeçar"
   ↓
9. Volta ao IntroScreen
```

---

## 📝 Ordem de Edição Recomendada

### Para Personalizar (15 minutos)
1. Edite `src/components/InteractiveElements.tsx`
   - Trocar mensagens das estrelas
   - Trocar mensagem do foguete e astronauta
   - Trocar mensagens dos planetas

### Para Aprofundar (1 hora)
2. Edite `tailwind.config.ts`
   - Mudar cores
   - Mudar fonts
   - Adicionar mais animações

3. Edite `src/components/StarField.tsx`
   - Mudar quantidade de estrelas
   - Mudar cores das estrelas
   - Mudar velocidade de animação

### Para Avançado (2+ horas)
4. Modifique `src/components/UniverseScreen.tsx`
   - Mudar layout dos elementos
   - Adicionar novos elementos visuais

5. Edite `src/App.tsx`
   - Adicionar novas telas
   - Mudar fluxo da aplicação

---

## 🚀 Deploy

Quando tudo estiver pronto:

```bash
npm run build    # Cria pasta dist/
```

Depois:
- Upload da pasta `dist/` para Vercel, Netlify ou servidor
- Veja detalhes em `DEPLOY.md`

---

## ⚠️ Não Mexer Em

❌ `package-lock.json` - Deixe como está  
❌ `node_modules/` - Deixe como está  
❌ Nomes de arquivos em `src/components/`  
❌ Estrutura de pastas (adicione, mas não delete)  

---

## ✅ Você Pode

✅ Editar conteúdo dos arquivos `.tsx`  
✅ Mudar valores dos arquivos `.ts` (config)  
✅ Adicionar novos componentes  
✅ Adicionar novas pastas  
✅ Instalar novos pacotes com `npm install`  

---

## 🎓 Estudar Cada Parte

### React & TypeScript
- `src/App.tsx` - useState, gerenciamento de estado
- `src/components/IntroScreen.tsx` - Componentização básica
- Interfaces e Props nos componentes

### Styling (Tailwind CSS)
- `src/index.css` - Global styles
- Classes de Tailwind em cada componente

### Animações (Framer Motion)
- `src/components/StarField.tsx` - Motion basics
- `src/components/IntroScreen.tsx` - Stagger animations
- `src/components/InteractiveElements.tsx` - Hover/click effects

### Build Tools
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind customization

---

## 🤔 "Onde Mudo X?"

| Quero Mudar... | Arquivo | Linha ~  |
|---|---|---|
| Mensagens | `InteractiveElements.tsx` | 5-60 |
| Cores | `tailwind.config.ts` | 10-20 |
| Texto de intro | `IntroScreen.tsx` | 50-85 |
| Animações | Qualquer `motion.*` | - |
| Tamanho do foguete | `InteractiveElements.tsx` | 245 |
| Emojis | Qualquer um | - |
| Fonte | `src/index.css` | 1 |
| Tempo de intro | `IntroScreen.tsx` | 13-15 |

---

## 💡 Dicas

🎯 Sempre salve e recarregue o navegador (F5)  
🎨 Use F12 (DevTools) para inspecionar elementos  
🐛 Erros aparecem no console (F12 → Console)  
⚡ Hot-reload funciona, mas às vezes é bom recarregar manualmente  
📱 Teste em mobile (F12 → Toggle device)  

---

**Pronto para explorar? Comece com [QUICKSTART.md](./QUICKSTART.md)! 🚀**
