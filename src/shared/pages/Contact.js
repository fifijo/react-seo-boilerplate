import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

const Contact = () => (
  <Fragment>
    <Helmet>
      <title>Contact Page</title>
    </Helmet>
    <h2>This is the contact page</h2>
  </Fragment>
)

Contact.displayName = 'Contact'

export default Contact
