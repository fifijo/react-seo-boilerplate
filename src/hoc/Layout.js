import React from 'react'
import { Route } from 'react-router-dom'
import Meta from '../components/Header/Meta/Meta'

const defaultLayout = ({ 
  component: Component, 
  layout: Layout, 
  ...rest 
}) => (
  <Route {...rest} render={props => (
    <Layout>
      <Meta title={rest.title} />
      <Component {...props} />
    </Layout>
  )} />
)

export default defaultLayout