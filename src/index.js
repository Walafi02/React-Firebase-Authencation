import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import reduxThunk from 'redux-thunk'

import reducer from './store/reducers'

import firebase from './utils/firebase'

const store = createStore(
  reducer,
  {},
  applyMiddleware(reduxThunk)
)

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
