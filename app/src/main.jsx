import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Email from './email.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import './index.css'
import OAuth from './OAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='1009282809407-sh8h2kgmot2q295a503sl5530pldnaj9.apps.googleusercontent.com'>
  <React.StrictMode>
    <OAuth/>
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
