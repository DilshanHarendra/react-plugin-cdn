import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {init} from "./index";
init()
ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
