import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Assicurati che l'estensione qui sia corretta

// MODIFICA PRINCIPALE:
// In TypeScript c'era "document.getElementById('root')!" con il punto esclamativo.
// In JS/JSX il punto esclamativo va rimosso perché causa errore di sintassi.
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
