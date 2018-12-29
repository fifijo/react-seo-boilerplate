import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from 'shared/components/App'
import createStore from 'shared/state'

const store = createStore(window.REDUX_DATA)

const jsx = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

const app = document.getElementById('app')
ReactDOM.hydrate(jsx, app)
