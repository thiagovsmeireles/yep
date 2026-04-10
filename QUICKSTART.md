# 🚀 Quick Start - Comece Agora!

## ⚡ Começar em 3 passos

### 1️⃣ Instale as dependências
```bash
npm install
```

### 2️⃣ Inicie o servidor
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3️⃣ Personalize as mensagens!
Edite `src/components/InteractiveElements.tsx` e salve. O site atualiza automaticamente! ✨

---

## 📱 O que Você Verá

### 1. Tela de Intro (6 segundos)
```
Em um universo infinito…
Duas delícias se encontraram… ✨
Thiago ❤️ Mikelly
```

Depois automaticamente transita para...

### 2. Universo Interativo
- 👨‍🚀 Astronauta flutuando no centro
- ⭐ 6 Estrelas clicáveis ao redor
- 🔥 Planeta Desejo (canto esquerdo)
- 💖 Planeta Amor (canto direito)
- 😂 Planeta Memórias (inferior)
- 🚀 Foguete que segue seu mouse!

---

## 🎯 Personalize em 5 Minutos

### Edite Mensagens
Arquivo: `src/components/InteractiveElements.tsx` (linha ~10-55)

**Exemplo - Trocar uma mensagem de estrela:**
```typescript
// Encontre esta linha:
{ category: 'gostosa', content: 'Você é a mulher mais gostosa que já conheci...', emoji: '😍' }

// Troque para:
{ category: 'gostosa', content: 'Seu sorriso é tudo pra mim!', emoji: '😍' }
```

Salve e veja a mudança no navegador! 🔄

### Adicione Mais Mensagens
```typescript
const messages = {
  stars: [
    { category: 'gostosa', content: 'Sua própria mensagem aqui!', emoji: '😍' },
    // ... adicione quantas quiser
  ]
}
```

---

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor com hot-reload

# Produção
npm run build        # Cria versão otimizada (pasta dist/)
npm run preview      # Testa a versão de produção

# Limpeza
rm -rf node_modules  # Remove dependências
npm install          # Reinstala tudo
```

---

## 🎨 Customize TUDO

### Cores
`tailwind.config.ts` - linha ~10-20

### Animações
`tailwind.config.ts` - linha ~20-40

### Fonte/Tipografia
`src/index.css` - imports do Google Fonts no topo

### Layout
Edite qualquer componente em `src/components/`

---

## 🚀 Deploy (quando estiver pronto!)

### Opção 1: Vercel (super fácil ✅)
```bash
# Clone seu repo no GitHub e conecte no Vercel
vercel
```

### Opção 2: Build manual
```bash
npm run build
# Suba a pasta 'dist' para qualquer servidor web
```

**Detalhes completos em:** [DEPLOY.md](./DEPLOY.md)

---

## 🆘 Comum Problemas

| Erro | Solução |
|------|---------|
| "Cannot find module" | `npm install` |
| Porta 3000 ocupada | `npm run dev -- --port 3001` |
| Mudanças não aparecem | Recarregue o browser (F5) |
| Erro de compilação | `npm run build` |

---

## 💡 Dicas Profissionais

✨ **Estrelas**: Use para elogios rápidos e mensagens curtas  
🪐 **Planetas**: Use para conteúdo maior e messages temáticas  
🚀 **Foguete**: Sua mensagem PRINCIPAL (a mais importante!)  
👨‍🚀 **Astronauta**: Momento íntimo especial  

---

## 📚 Documentação Completa

- **Personalizar**: Veja [PERSONALIZACAO.md](./PERSONALIZACAO.md)
- **Deploy**: Veja [DEPLOY.md](./DEPLOY.md)
- **Tech**: Veja [README.md](./README.md)

---

## 🎉 Pronto!

Você tem tudo que precisa para criar algo INCRÍVEL.

Divirta-se! 💖✨

---

**Perguntas?** Veja os arquivos de documentação ou explore o código - está tudo comentado! 👆
