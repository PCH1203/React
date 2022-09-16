import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './modules/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';

// const store = createStore(rootReducer, composeWithDevTools);
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
