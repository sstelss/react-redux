import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App'
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  // HOC позволяющий использовать store по всему APP
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
