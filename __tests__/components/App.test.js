import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from 'shared/components/App'

import createStore from 'shared/state'

const store = createStore(window.REDUX_DATA)

describe('App component', () => {
  it('should mount correctly', () => {
    expect(
      mount(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      )
    ).toMatchSnapshot()
  })

  it('should render correctly', () => {
    expect(
      render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      )
    ).toMatchSnapshot()
  })
})
