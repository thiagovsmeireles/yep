# ✅ Checklist de Personalização - Nosso Universo

Use este checklist para acompanhar seu progresso na criação da experiência!

---

## 🎬 Fase 1: Setup Inicial ⏱️ 5 minutos

- [ ] `npm install` - Instalar dependências
- [ ] `npm run dev` - Iniciar servidor (localhost:3000)
- [ ] Abrir navegador e confirmar que vê a intro
- [ ] Esperar 6 segundos e ver tela do universo

---

## 📝 Fase 2: Personalizar Mensagens ⏱️ 15-20 minutos

### Editar: `src/components/InteractiveElements.tsx`

- [ ] **Estrelas** (6 mensagens)
  - [ ] Mensagem 1 - gostosa
  - [ ] Mensagem 2 - gostosa
  - [ ] Mensagem 3 - minha paz
  - [ ] Mensagem 4 - minha paz
  - [ ] Mensagem 5 - meu vício
  - [ ] Mensagem 6 - meu vício

- [ ] **Planeta 🔥 Desejo** (pelo menos 1)
  - [ ] Mensagem 1
  - [ ] Mensagem 2
  - [ ] Mensagem 3

- [ ] **Planeta 💖 Amor** (pelo menos 1)
  - [ ] Mensagem 1
  - [ ] Mensagem 2
  - [ ] Mensagem 3

- [ ] **Planeta 😂 Memórias** (pelo menos 1)
  - [ ] Mensagem 1
  - [ ] Mensagem 2
  - [ ] Mensagem 3

- [ ] **Foguete 🚀** (mensagem principal)
  - [ ] Editar: `messages.special.rocket`

- [ ] **Astronauta 👨‍🚀** (mensagem íntima)
  - [ ] Editar: `messages.special.astronaut`

---

## 🎨 Fase 3: Personalizar Cores ⏱️ 10 minutos

### Editar: `tailwind.config.ts`

- [ ] Cor do espaço profundo: `space-deep`
- [ ] Cor roxa: `space-purple`
- [ ] Cor rosa neon: `neon-pink`
- [ ] Cor roxo neon: `neon-purple`
- [ ] Adicionar novas cores personalizadas (opcional)

---

## ✨ Fase 4: Personalizar Animações ⏱️ 10 minutos (Opcional)

### Editar: `tailwind.config.ts` e componentes

- [ ] Velocidade de flutuação do astronauta
- [ ] Velocidade de rotação dos planetas
- [ ] Duração do fade das estrelas
- [ ] Velocidade da animação de intro

---

## 🎵 Fase 5: Adicionar Música ⏱️ 15 minutos (Opcional)

### Editar: `src/components/MusicPlayer.tsx`

- [ ] Encontrar música ambiente (royalty-free)
- [ ] Salvar em `public/music.mp3`
- [ ] Adicionar referência no componente
- [ ] Testar play/pause

---

## 🎯 Fase 6: Testes ⏱️ 10 minutos

### Verificações no Navegador

- [ ] Tela de intro anima corretamente
- [ ] Transição automática após 6 segundos
- [ ] Estrelas brilham ao passar mouse
- [ ] Clique nas estrelas abre modal
- [ ] Mensagens estão certas no modal
- [ ] Planetas giram continuamente
- [ ] Foguete segue o mouse
- [ ] Astronauta flutua
- [ ] Botão música funciona (se tiver adicionado)
- [ ] Botão recomeçar funciona

### Responsividade

- [ ] Abra F12 → Toggle device
- [ ] Teste em iPhone 12
- [ ] Teste em Android
- [ ] Verifique que texto é legível
- [ ] Verifique que elementos não sobrepõem

---

## 🚀 Fase 7: Deploy ⏱️ 30 minutos

### Antes de Fazer Deploy

- [ ] Todas as mensagens finalizadas e revisadas
- [ ] Cores testadas e aprovadas
- [ ] Funciona em desktop
- [ ] Funciona em mobile
- [ ] Sem erros no console

### Deploy no Vercel (Recomendado)

- [ ] Criar conta no [Vercel](https://vercel.com)
- [ ] Fazer commit no Git: `git add . && git commit -m "Nosso Universo"`
- [ ] Push para GitHub
- [ ] Conectar repositório no Vercel
- [ ] Deploy automático!
- [ ] Obter URL pública
- [ ] Testar URL pública
- [ ] Compartilhar com a pessoa especial! 💖

### Alternativa: Upload Manual

- [ ] Executar: `npm run build`
- [ ] Upload pasta `dist/` para servidor web
- [ ] Configurar como raiz do site
- [ ] Testar

---

## 📱 Fase 8: Compartilhar ⏱️ 5 minutos

- [ ] Copiar o link
- [ ] Enviar via WhatsApp / Email
- [ ] Compartilhar nas redes sociais (opcional)
- [ ] Ver reação! 😆

---

## 🎁 Extras (Opcional - Depois)

- [ ] Adicionar easter egg (senha secreta)
- [ ] Adicionar mais emojis personalizados
- [ ] Criar mini-game
- [ ] Adicionar confetti de celebração
- [ ] Fazer versão PWA (offline)
- [ ] Adicionar contador de dias juntos

---

## 📋 Checklist de Qualidade

Antes de considerar "pronto":

- [ ] Todas as mensagens revisadas
- [ ] Sem erros de digitação
- [ ] Emojis corretos
- [ ] Cores harmoniosas
- [ ] Animações suaves (sem lag)
- [ ] Funcionando em todos os browsers
- [ ] Funciona em mobile
- [ ] Link compartilhável

---

## ⏱️ Tempo Total Estimado

- Setup inicial: 5 min
- Mensagens: 20 min
- Cores: 10 min
- Animações: 10 min
- Música: 15 min
- Testes: 10 min
- Deploy: 30 min
- **TOTAL: ~1.5 horas** ⚡

---

## 🎯 Marcos Importantes

| Marco | Checklist | Tempo |
|-------|-----------|-------|
| 1. Rodando localmente ✅| [ ] | 5 min |
| 2. Mensagens personalizadas ✅ | [ ] | 20 min |
| 3. Cores customizadas ✅ | [ ] | 10 min |
| 4. Tudo testado ✅ | [ ] | 10 min |
| 5. Online (deployed) ✅ | [ ] | 30 min |
| 6. Compartilhado! 🎉 | [ ] | - |

---

## 💡 Dicas Durante o Processo

✅ Salve frequentemente  
✅ Recarregue o navegador (F5) se não vê mudanças  
✅ Use DevTools (F12) para debugar  
✅ Teste cada mudança antes de passar à próxima  
✅ Tire screenshot do resultado  

---

## 🆘 Ficou Preso?

Se algo não funcionar:

1. Verifique [PERSONALIZACAO.md](./PERSONALIZACAO.md)
2. Verifique [REFERENCIA.md](./REFERENCIA.md)
3. Recarregue o navegador (F5)
4. Verifique console de erros (F12)
5. Execute `npm install` novamente
6. Reinicie `npm run dev`

---

## ✨ Resultado Final

Parabéns! Você criou:

🌌 Uma experiência personalizada
💖 Cheia de mensagens especiais
🎨 Com design único
✨ Com animações suaves
📱 Totalmente responsiva
🚀 Online e compartilhável

---

**Data Planejada para Completo:**

___/___/_____

**Status:** 
- [ ] Em Progresso
- [ ] Completo
- [ ] Compartilhado

---

**Divirta-se! 🎉💖**
