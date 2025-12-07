# Calcula de Propinas React + Vite + Tailwind

Proyecto introductorio de React + Vite + Tailwind + Netlify

## Instalación

```bash
npm install
npm run dev
```
## Deployment
Se realiza deployment mediante Netlify

![Deploy]()

---

## Tecnologías utilizadas
- Tailwind
- React + Vite
- Netlify
- Vitest 
- Github Actions 

## Estructura
src/ hooks/ useOrder.ts        # Hook principal para manejar órdenes 
types/ index.ts           # Tipos MenuItem y OrderItem 
tests/ useOrder.test.tsx  # Pruebas unitarias del hook

## 🧪 Pruebas
El proyecto incluye pruebas unitarias con Vitest:

```bash
npm run test
```
Ejemplo de prueba:
- Agregar un item nuevo a la orden.
- Incrementar cantidad si el item ya existe.
- Remover item de la orden.
- Reiniciar orden y propina.


## CI/CD Workflow
- GitHub Actions ejecuta lint, type-check y tests en cada push/PR a main.
- Netlify despliega automáticamente si el pipeline pasa.

![CI](https://github.com/tchock42/calculadora-propinas/actions/workflows/ci.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0fec9d14-4ca2-486b-b6ac-178f7450d3ea/deploy-status)](https://app.netlify.com/projects/calculadora-propinasjgc/deploys)

## 📦 Scripts disponibles
- npm run dev → entorno local
- npm run build → build de producción
- npm run preview → preview del build
- npm run lint → linting
- npm run type-check → verificación de tipos
- npm run test → pruebas unitarias
