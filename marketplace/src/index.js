import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import NavMenu from './components/NavMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter - responsavel pelo roteamento do browser e gerenciar rotas
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

