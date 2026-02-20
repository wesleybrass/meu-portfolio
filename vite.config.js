import { defineConfig } from 'vite'

export default defineConfig({
    // Se estiver no GitHub Actions, usa o subdiretório do repositório.
    // No Vercel ou Local, usa a raiz '/'.
    base: process.env.GITHUB_ACTIONS ? '/meu-portfolio/' : '/',
})
