import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Layout from './hoc/Layout'
import DefaultLayout from './layouts/Default'

import Navigation from './components/Header/Navigation/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


const app = () => {
  return(
    <Router>
      <Fragment>
        <Navigation />
        <Switch>
          <Layout exact path='/' component={Home} layout={DefaultLayout} title='Home'></Layout>
          <Layout exact path='/about' component={About} layout={DefaultLayout} title='About'></Layout>
          <Layout exact path='/contact' component={Contact} layout={DefaultLayout} title='Contact'></Layout>
          <Layout component={NotFound} layout={DefaultLayout}></Layout>
       </Switch>
      </Fragment> 
    </Router>
  )
}
  
export default app;