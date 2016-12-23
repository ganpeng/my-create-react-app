import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'

import App from './containers/App'
import store from './store'
import { setUser } from './actions/auth'
import { getToken } from './utils/storage'

import './style.css'

if (getToken()) {
    store.dispatch(setUser(jwtDecode(getToken())))
}

render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)