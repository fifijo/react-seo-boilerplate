import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const defaultLayout = props => (
  <Fragment>
    {props.children}
  </Fragment>
)

defaultLayout.displayName = 'defaultLayout'

defaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default defaultLayout