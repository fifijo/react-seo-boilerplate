import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import App from 'shared/components/App'
import createStore from 'shared/store/store'

const store = createStore(window.REDUX_DATA)

const jsx = (
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>
);

const app = document.getElementById('app')
ReactDOM.hydrate(jsx, app)
