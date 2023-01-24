import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Predict'
import "./scss/reset.scss"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
