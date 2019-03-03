import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'shared/components/Header'

describe('Header component', () => {
    test('should shallow correctly', () => {
        expect(shallow(
          <Header />
        )).toMatchSnapshot() 
    })
    test('should mount correctly', () => {
        expect(mount(
          <Router>
            <Header />
          </Router>
        )).toMatchSnapshot() 
    })
    test('should render correctly', () => {
        expect(render(
          <Router>
            <Header />
          </Router>
        )).toMatchSnapshot() 
    })
  })