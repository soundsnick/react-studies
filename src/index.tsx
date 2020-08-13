import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import 'normalize.css';
import App from './App';
import { Header } from "./components/molecules/Header";
import { Logo } from "./components/atoms/Logo";
import { BrowserRouter as Router } from 'react-router-dom';

const headerLinks = {
  'Main': '/',
  'About': '/about',
  'Dashboard': '/dashboard'
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header logo={<Logo>Logo</Logo>} links={headerLinks} />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
