import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import moment from 'moment';
import 'moment/locale/fr'; 

moment.locale('fr');


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
)
