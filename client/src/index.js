import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import {AppProvider} from './AppContext';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  ,
  document.getElementById('root')
);
