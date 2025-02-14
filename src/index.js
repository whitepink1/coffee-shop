import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { MenuProvider } from './data/database.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MenuProvider><App /></MenuProvider>);
