import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import routes from 'shared/routes'
import App from 'shared/components/App'
import createStore from 'shared/state'
import { ServerStyleSheet } from 'styled-components'

const app = express()

app.use(express.static(path.resolve(__dirname, '../../dist')))

app.get('/*', (req, res) => {
  const context = {}
  const store = createStore()

  const sheet = new ServerStyleSheet()

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route))
    .map(route => route.component)
    .filter(comp => comp.serverFetch)
    .map(comp => store.dispatch(comp.serverFetch()))

  Promise.all(dataRequirements)
    .then(() => {
      const jsx = sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      )

      const reactDom = renderToString(jsx)
      const reduxState = store.getState()
      const helmetData = Helmet.renderStatic()
      const styles = sheet.getStyleTags()

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(htmlTemplate(reactDom, reduxState, helmetData, styles))
    })
})

app.listen(3000)

function htmlTemplate(reactDom, reduxState, helmetData, styles) {
  return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            ${styles}
            <title>React SSR Boilerplate</title>
        </head>
        
        <body>
            <div id='app'>${reactDom}</div>
            <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src='./app.bundle.js'></script>
        </body>
        </html>
   `
}
