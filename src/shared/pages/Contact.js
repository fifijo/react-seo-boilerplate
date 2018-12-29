import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

const Contact = () => (
    <Fragment>
        <Helmet>
            <title>Contact Page</title>
            <meta name='description' content='This is a proof of concept for React SSR' />
        </Helmet>
        <h2>This is the contact page</h2>
    </Fragment>
);

export default Contact
