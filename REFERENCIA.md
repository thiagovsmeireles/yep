# 🎨 Referência de Customização - Nosso Universo

## 🎭 Emojis Sugeridos

### Para Mensagens de Desejo 🔥
```
😍 😈 🔥 ⚡ 💋 🍆 🌹 💦 🔞 👅 😏 🤤
```

### Para Mensagens de Amor 💖
```
❤️ 💕 💖 💗 💓 💝 🥰 😍 🌟 ✨ 🦋 🌺
```

### Para Mensagens de Memórias 😂
```
😂 😆 🤣 😄 😁 🎉 🎊 🎭 🎈 🎁 🎪 😜
```

### Para Elementos Principais
```
🚀 👨‍🚀 🌌 ⭐ 🪐 🌠 ✨ 🌟 💫 ☄️ 🌍 🛸
```

---

## 🎨 Paleta de Cores

### Cores Base (Espaço)
```css
--space-dark: #000000;      /* Preto profundo */
--space-deep: #020111;      /* Azul escuro índigo */
--space-purple: #1a0033;    /* Roxo profundo */
```

### Cores Accent (Neon)
```css
--neon-pink: #ff4da6;       /* Rosa fluorescente */
--neon-purple: #a855f7;     /* Roxo neon */
--neon-cyan: #06b6d4;       /* Ciano */
--neon-gold: #fbbf24;       /* Ouro */
```

### Adicionar Novas Cores em tailwind.config.ts
```typescript
colors: {
  'custom-red': '#ff1744',
  'custom-blue': '#1976d2',
  'custom-green': '#4caf50',
}
```

### Usar as Cores
```html
<!-- Classes automáticas -->
<div className="bg-custom-red text-custom-blue border-custom-green">
  Texto colorido!
</div>
```

---

## 🎬 Animações Availáveis

### Animações Pré-configuradas
```typescript
animate={{ y: [0, -30, 0] }}           // Flutuação
animate={{ opacity: [0.5, 1, 0.5] }}  // Fade pulse
animate={{ rotate: 360 }}               // Rotação
animate={{ scale: [1, 1.2, 1] }}      // Zoom
```

### Criar Animação Customizada
```typescript
<motion.div
  animate={{ 
    x: [0, 100, 0],      // Posição X
    y: [0, 50, 0],       // Posição Y
    opacity: [0, 1, 0],  // Transparência
    scale: [1, 1.5, 1],  // Tamanho
    rotate: [0, 180, 0], // Rotação
  }}
  transition={{ 
    duration: 3,         // Duração em segundos
    repeat: Infinity,    // Repetir forever
    ease: 'easeInOut',   // Tipo de movimento
  }}
>
  Seu elemento aqui
</motion.div>
```

### Tipos de Ease
```
'linear'      // Velocidade constante
'easeIn'      // Começa lento
'easeOut'     // Termina lento
'easeInOut'   // Lento no início e fim
'circInOut'   // Movimento circular suave
'backInOut'   // Com um pouco de "bounce"
'anticipate'  // Movimento antecipatório
```

---

## 📏 Tamanhos Úteis (Tailwind)

### Textos
```
text-xs     → 12px
text-sm     → 14px
text-base   → 16px
text-lg     → 18px
text-xl     → 20px
text-2xl    → 24px
text-3xl    → 30px
text-4xl    → 36px
text-5xl    → 48px
text-6xl    → 60px
text-7xl    → 72px
text-8xl    → 96px
text-9xl    → 128px
```

### Espaçamento (padding/margin)
```
p-1  → 4px padding
p-2  → 8px padding
p-4  → 16px padding
p-8  → 32px padding
p-12 → 48px padding

m-1  → 4px margin
m-2  → 8px margin
...
```

### Bordas
```
rounded-sm   → 2px
rounded      → 4px
rounded-lg   → 8px
rounded-xl   → 12px
rounded-2xl  → 16px
rounded-full → 999px (círculo)
```

---

## 🎨 Exemplos de Customização

### Mudar cor do foguete
```typescript
// Antes:
<motion.button className="text-5xl">
  🚀
</motion.button>

// Depois - adicione filtro:
<motion.button className="text-5xl filter hue-rotate-90">
  🚀
</motion.button>
```

### Tornar astronauta maior
```typescript
// Antes:
<motion.div className="text-9xl">
  👨‍🚀
</motion.div>

// Depois:
<motion.div className="text-9xl scale-150">
  👨‍🚀
</motion.div>
```

### Adicionar sombra aos planetas
```typescript
<motion.button className="text-7xl drop-shadow-2xl shadow-purple-500/50">
  💖
</motion.button>
```

---

## 🎵 Referência de Sons

URLs recomendadas para música ambiente (royalty-free):

```
- Spotify API (com permissão)
- YouTube Audio Library
- Pixabay Music
- Freepik Music
- Incompetech
- Kevin MacLeod
```

Formato recomendado: **MP3** (melhor compatibilidade)

---

## 📱 Breakpoints Responsivos (Tailwind)

```
sm  → 640px   (tablets pequenos)
md  → 768px   (tablets)
lg  → 1024px  (desktops)
xl  → 1280px  (desktops grandes)
2xl → 1536px  (ultra-wide)
```

### Usar breakpoints
```html
<!-- Hidden em md e acima, visible em sm -->
<div className="block md:hidden">
  Apenas em mobile
</div>

<!-- Diferente tamanho por breakpoint -->
<div className="text-sm md:text-lg lg:text-2xl">
  Texto responsivo
</div>
```

---

## 🔧 Dicas Rápidas

✅ **Sempre** teste no mobile (F12 → Toggle device)  
✅ **Use** emojis consistentemente  
✅ **Verifique** contraste das cores  
✅ **Teste** animações em diferentes tamanhos  
✅ **Considere** performance de animações  

---

## 📞 Precisa de Mais?

Consulte:
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

---

**Divirta-se criando! 🌟💖**
