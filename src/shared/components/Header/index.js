import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

const Header = () => (
    <div className={ styles.header }>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
)

export default Header
