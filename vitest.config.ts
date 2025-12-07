import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,        // habilita describe, it, expect sin necesidad de importarlos
    environment: 'jsdom', // simula navegador para React
    include: [
      'src/__tests__/**/*.{test,spec}.{ts,tsx}' // busca dentro de la carpeta __tests__
    ],
    exclude: ['node_modules', 'dist']
  }
})
