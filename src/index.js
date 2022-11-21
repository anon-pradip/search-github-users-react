import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
// Domain:
// dev-zgrk2zzimmxudv7p.us.auth0.com
// client id:
// AjO28UJy1LrvtdQUx2vXM37aoI4uaSzL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-zgrk2zzimmxudv7p.us.auth0.com"
    clientId="AjO28UJy1LrvtdQUx2vXM37aoI4uaSzL"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
