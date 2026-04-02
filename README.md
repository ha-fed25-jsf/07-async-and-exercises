# Övningar
## Routing, state m.m.

### Skapa nytt repo
```bash
 npm create vite@latest
 # Välj JavaScript + React compiler

 cd projekt-namn
 npm install react-router zustand
 git init
 code .

 # Gärna i separat terminal
 npm run dev
```

### Lägg till routing
1. main.jsx - lägg till RouterProvider
1. routes.js - lista med route-objekt
1. pages/Root.jsx, Root.css - root layout
1. routes för Start och Radio pages

### Radio-övningen
1. Designskiss: all JSX i RadioPage.jsx
1. Flytta ut JSX i Channel.jsx NowPlaying.jsx
1. Introducera state och props


### Async
Klocka: Demo på setTimeout - gamla tekniken, inte async/await.

Soltid: Demo på fetch med async/await och useEffect.