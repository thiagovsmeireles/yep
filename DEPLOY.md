# 🚀 Guia de Deploy - Nosso Universo

## Opção 1: Deploy no Vercel (Recomendado)

### Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- Repositório no GitHub

### Passos

1. **Enviar para GitHub**
```bash
git init
git add .
git commit -m "Nosso Universo - Experience"
git branch -M main
git remote add origin https://github.com/seu-usuario/nosso-universo.git
git push -u origin main
```

2. **Deploy no Vercel**
- Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
- Clique em "Add New" → "Project"
- Selecione o repositório `nosso-universo`
- Clique em "Deploy"

✅ **Pronto!** Seu site estará disponível em `https://nosso-universo.vercel.app`

## Opção 2: Deploy no Netlify

### Pré-requisitos
- Conta no [Netlify](https://netlify.com)
- Git configurado

### Passos

1. **Build local**
```bash
npm run build
```

2. **Deploy no Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Ou via interface web:
- Arraste a pasta `dist` para [netlify.com/drop](https://netlify.com/drop)

## Opção 3: Build Manual

### Criar versão de produção
```bash
npm run build
```

Isso cria uma pasta `dist` com arquivos otimizados.

### Servir localmente
```bash
npm run preview
```

### Enviar para qualquer servidor
1. Comprime a pasta `dist/`
2. Faz upload para seu servidor web
3. Configurar como raiz do site

## 🔒 Segurança

- ✅ Todos os dados estão no frontend (seguro)
- ✅ Nenhuma chamada a servidor
- ✅ Nenhuma informação pessoal é enviada

## 📊 Métricas & SEO

O site roda otimizado para:
- ⚡ Performance (Vite é super rápido)
- 📱 Mobile (totalmente responsivo)
- 🎨 Animações suaves
- ♿ Acessibilidade básica

## 🆘 Troubleshooting

### Erro: "Cannot find module"
```bash
npm install
```

### Erro de compilação TypeScript
```bash
npm run build -- --force
```

### Porta 3000 já usada
```bash
npm run dev -- --port 3001
```

### Limpar cache
```bash
rm -rf node_modules
npm install
```

## 📱 Testar no Mobile

1. Obtenha seu IP local:
   - Windows: `ipconfig` (procure por "IPv4 Address")
   - Mac/Linux: `ifconfig` (procure por "inet")

2. Acesse então de outro dispositivo:
   ```
   http://seu-ip:3000
   ```

## 🎯 Próximos Passos

1. **Domínio Personalizado** (opcional)
   - No Vercel/Netlify, vá em "Settings" → "Domains"
   - Adicione seu domínio (ex: nossoUniverso.com)

2. **Analytics** (opcional)
   - Adicione Google Analytics para visualizar visitas
   - Vá em `index.html` e adicione script do Google Analytics

3. **SSL/HTTPS**
   - Automático no Vercel e Netlify ✅

## ✨ Resultado Final

Pronto! Você tem um site lindíssimo, totalmente personalizado e online! 

**Compartilhe o link com alguém especial 💖**

---

**Dúvidas?** Consulte documentações:
- [Vite Docs](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)
- [React Docs](https://react.dev)
