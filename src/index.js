import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';
import Stateprovider from './components/stateprovider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const GlobalStyle =createGlobalStyle`
html,body{
  background-color:#220045;
  font-size:62.5%
}

`

ReactDOM.render(
  <React.StrictMode>
    <Stateprovider>
    <GlobalStyle/>
    <App />
    </Stateprovider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
