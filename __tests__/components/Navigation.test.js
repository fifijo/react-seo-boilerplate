import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from 'shared/components/Navigation'

describe('Navigation component', () => {

    it('should shallow correctly', () => {
        expect(shallow(
          <Navigation />
        )).toMatchSnapshot() 
    })

    it('should mount correctly', () => {
        expect(mount(
          <Router>
            <Navigation />
          </Router>
        )).toMatchSnapshot() 
    })

    it('should render correctly', () => {
        expect(render(
          <Router>
            <Navigation />
          </Router>
        )).toMatchSnapshot() 
    })
    
  })