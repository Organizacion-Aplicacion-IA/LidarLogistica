import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 Importa desde 'react-dom/client'
import App from './App';
import { setupIonicReact } from '@ionic/react';

/* Configuración de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

const root = ReactDOM.createRoot(document.getElementById('root')!); // 👈 Cambia aquí a createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
