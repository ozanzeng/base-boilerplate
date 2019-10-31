import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux';
import './assets/style/default.scss';

import { store } from './redux/store';

// Language settings
import "./i18n";

// Router
import { BrowserRouter } from 'react-router-dom';

// import App from './App';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </CookiesProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
