import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // habilita describe, it, expect sin necesidad de importarlos
    environment: 'jsdom', // simula navegador, necesario para probar hooks/componentes React
    include: ['src/**/*.test.{ts,tsx}'], // opcional: define dónde buscar tests
    exclude: ['node_modules', 'dist']    // opcional: evita carpetas innecesarias
  }
})
