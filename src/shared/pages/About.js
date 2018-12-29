import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

const About = () => (
    <Fragment>
        <Helmet>
            <title>About Page</title>
            <meta name='description' content='This is a proof of concept for React SSR' />
        </Helmet>
        <h2>This is the about page</h2>
    </Fragment>
);

export default About
