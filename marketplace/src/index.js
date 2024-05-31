import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Login from './page/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter - responsavel pelo roteamento do browser e gerenciar rotas
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

