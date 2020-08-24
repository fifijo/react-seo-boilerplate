import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

const About = () => (
  <Fragment>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <h2>This is the about page</h2>
  </Fragment>
)

About.displayName = 'About'

export default About
