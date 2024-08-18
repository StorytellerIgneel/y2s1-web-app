import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import OAuth from './OAuth.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='1009282809407-sh8h2kgmot2q295a503sl5530pldnaj9.apps.googleusercontent.com'>
  <React.StrictMode>
    <App />
    {/* <OAuth></OAuth> */}
  </React.StrictMode>
  </GoogleOAuthProvider>
)
