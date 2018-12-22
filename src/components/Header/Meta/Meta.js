import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = props => {
  const { title } = props
  
  return(
    <Helmet>
      <html lang="en" amp />
      <meta charSet='utf-8' />
      <title>{` ${title} - React SEO friendly boilerplate 2019 `}</title>
    </Helmet>
  )
}

export default Meta