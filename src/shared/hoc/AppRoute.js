import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const AppRoute = ({ 
  component: Component, 
  layout: Layout, 
  ...rest 
}) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
  rest: PropTypes.func
};

export default AppRoute