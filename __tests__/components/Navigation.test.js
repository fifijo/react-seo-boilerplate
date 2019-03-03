import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from 'shared/components/Navigation'

describe('Navigation component', () => {
    test('should shallow correctly', () => {
        expect(shallow(
          <Navigation />
        )).toMatchSnapshot() 
    })
    test('should mount correctly', () => {
        expect(mount(
          <Router>
            <Navigation />
          </Router>
        )).toMatchSnapshot() 
    })
    test('should render correctly', () => {
        expect(render(
          <Router>
            <Navigation />
          </Router>
        )).toMatchSnapshot() 
    })
  })