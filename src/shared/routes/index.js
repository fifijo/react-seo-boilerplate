import Home from 'shared/pages/Home'
import About from 'shared/pages/About'
import Contact from 'shared/pages/Contact'
import defaultLayout from 'shared/layouts/Default'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    layout: defaultLayout
  },
  {
    path: '/about',
    component: About,
    exact: true,
    layout: defaultLayout
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
    layout: defaultLayout
  }
]
