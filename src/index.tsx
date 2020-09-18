import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import App from './components/App';
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <BrowserRouter>
    <div>
      <Route path='/' component={App} />
    </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
