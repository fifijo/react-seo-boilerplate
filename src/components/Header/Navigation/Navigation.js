import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  return(
    <div className='Navigation'>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  )
}
  
export default Navigation