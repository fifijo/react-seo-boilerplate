import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'
import AppRoute from 'shared/hoc/AppRoute'
import Header from 'shared/components/Header'
import routes from 'shared/routes'

const Layout = () => (
  <Fragment>
    <Header />
    <Switch>
      {routes.map(route => (
        <AppRoute key={route.path} {...route} />
      ))}
    </Switch>
  </Fragment>
)

Layout.displayName = 'App'

export default Layout
