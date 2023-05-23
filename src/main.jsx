import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProviderContext from './context/ProviderContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderContext>
        <App/>
      </ProviderContext>
    </BrowserRouter>
    
  </React.StrictMode>,
)
