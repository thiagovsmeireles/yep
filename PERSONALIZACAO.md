# 🌌 Guia de Personalização - Nosso Universo

## 📝 Como Adicionar Suas Próprias Mensagens

O coração deste projeto são as mensagens personalizadas. Todas as mensagens são gerenciadas no arquivo:

```
src/components/InteractiveElements.tsx
```

### 📦 Estrutura de Mensagens

As mensagens estão organizadas em categorias no objeto `messages`:

```typescript
const messages = {
  stars: [
    // Mensagens das estrelas clicáveis
  ],
  planets: {
    desire: [],   // 🔥 Planeta do Desejo
    love: [],     // 💖 Planeta do Amor
    memories: []  // 😂 Planeta das Memórias
  },
  special: {
    rocket: "...",     // 🚀 Foguete - mensagem especial
    astronaut: "..."   // 👨‍🚀 Astronauta - mensagem íntima
  }
}
```

### 🌟 Tipos de Mensagens

#### 1. **Estrelas** (6 mensagens)
Mensagens rápidas com categorias:
- `gostosa` - Elogios provocantes
- `minha paz` - Mensagens emotivas
- `meu vício` - Mensagens sobre desejo

**Exemplo:**
```typescript
{
  category: 'gostosa',
  content: 'Você é a mulher mais linda que já conheci.',
  emoji: '😍'
}
```

#### 2. **Planetas** (3 categorias com múltiplas mensagens)

**🔥 Planeta Desejo:**
```typescript
{
  content: 'Aquele jeito que você olha para mim... me deixa sem ar.',
  emoji: '🔥'
}
```

**💖 Planeta Amor:**
```typescript
{
  content: 'Te amo mais a cada dia que passa.',
  emoji: '❤️'
}
```

**😂 Planeta de Memórias:**
```typescript
{
  content: 'Aquele momento quando... [sua memória compartilhada]',
  emoji: '😂'
}
```

#### 3. **Elementos Especiais**

**🚀 Foguete** (mensagem única - a mais importante):
```typescript
special: {
  rocket: 'De todos os universos possíveis... eu escolho você.',
}
```

**👨‍🚀 Astronauta** (mensagem íntima):
```typescript
special: {
  astronaut: 'Vem explorar esse universo comigo...',
}
```

## 🎨 Personalizando Cores e Estilos

### Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  'space-dark': '#000000',      // Preto puro
  'space-deep': '#020111',      // Azul profundo
  'space-purple': '#1a0033',    // Roxo escuro
  'neon-pink': '#ff4da6',       // Rosa neon
  'neon-purple': '#a855f7',     // Roxo neon
}
```

### Animações
Edite `tailwind.config.ts` para ajustar timing:
```typescript
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },  // Aumentar para mais movimento
  },
}
```

## 🎵 Adicionar Música

No arquivo `src/components/MusicPlayer.tsx`, você pode adicionar uma URL de áudio:

```typescript
// Adicione uma tag de áudio ao componente
<audio ref={audioRef} loop>
  <source src="/sua-musica.mp3" type="audio/mpeg" />
</audio>
```

E depois controle o play/pause com:
```typescript
audioRef.current?.play()
audioRef.current?.pause()
```

## 🔧 Customizações Avançadas

### Easter Eggs
Você pode adicionar elementos ocultos com referências internas:

```typescript
// Adicione uma combinação de teclas secreta
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'M' && e.key === 'K') {
      // Revelar mensagem especial
    }
  }
}, [])
```

### Animações Personalizadas
Use Framer Motion para criar animações únicas:

```typescript
<motion.div
  animate={{ /* suas animações */ }}
  transition={{ duration: 2, ease: 'easeInOut' }}
/>
```

## 🚀 Deploy no Vercel

1. Faça push no GitHub:
```bash
git init
git add .
git commit -m "Nosso Universo - Experience"
git push origin main
```

2. Conecte no Vercel:
- Vá para [vercel.com](https://vercel.com)
- Clique em "Add New" → "Project"
- Selecione seu repositório
- Deploy automático!

## ❓ Dúvidas?

Para adicionar mais elementos, siga o padrão nos componentes existentes:

1. **InteractiveElements.tsx** - Adiciona interações
2. **MessageModal.tsx** - Exibe mensagens
3. **UniverseScreen.tsx** - Layout principal
4. **StarField.tsx** - Efeitos visuais de fundo

---

**Divirta-se criando! 💖✨**
