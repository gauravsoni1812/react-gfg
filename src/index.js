import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootreducer } from './reducer/rootreducer';

const root = ReactDOM.createRoot(document.getElementById('root'));


//To do to add reducer here
const store=createStore(rootreducer , applyMiddleware(thunk));

root.render(
  <Provider  store={store}>
    <App />
  </Provider>
);

 
