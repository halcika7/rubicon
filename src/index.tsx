import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/index';
import * as serviceWorker from 'serviceWorker';

import './index.scss';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();
