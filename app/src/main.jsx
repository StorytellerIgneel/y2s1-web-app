import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import OAuth from './backend/OAuth.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import './index.css'
// import LoginPage from './frontend/pages/LoginPage.jsx'
import test from './frontend/pages/testpage.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='721278939294-754epiosjucfqahjktvlnt89f7j8o42b.apps.googleusercontent.com'>
  <React.StrictMode>
    {/* <LoginPage /> */}
    {/* <OAuth></OAuth> */}
    <App/>
  </React.StrictMode>
  </GoogleOAuthProvider>
)
