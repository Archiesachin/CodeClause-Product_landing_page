import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-gktsqhff6d7jggn1.us.auth0.com"
    clientId="Sax2cPzNG7DDlDSK1ga6rLxUdfGx9TiF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)
