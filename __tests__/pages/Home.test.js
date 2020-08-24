import React from 'react'
import { mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from 'shared/pages/Home'

import createStore from 'shared/state'

const store = createStore(window.REDUX_DATA)

describe('Home page', () => {
  it('should mount correctly', () => {
    expect(
      mount(
        <Provider store={store}>
          <Router>
            <Home />
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
            <Home />
          </Router>
        </Provider>
      )
    ).toMatchSnapshot()
  })
})
