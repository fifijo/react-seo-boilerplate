import React from 'react'
import PropTypes from 'prop-types'

const withLoading = (Component) => (props) => ( props.isLoading ? 'Loading...' : <Component {...props} /> )

withLoading.displayName = 'withLoading'

withLoading.propTypes = {
  props: PropTypes.bool.isRequired
}

export default withLoading    