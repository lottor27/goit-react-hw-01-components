import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Card } from './components/Profile/profile';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>
);


