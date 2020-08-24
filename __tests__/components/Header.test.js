import React from 'react'
import { mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'shared/components/Header'

describe('Header component', () => {
  it('should mount correctly', () => {
    expect(
      mount(
        <Router>
          <Header />
        </Router>
      )
    ).toMatchSnapshot()
  })

  it('should render correctly', () => {
    expect(
      render(
        <Router>
          <Header />
        </Router>
      )
    ).toMatchSnapshot()
  })
})
