import { IconButton } from '@material-ui/core'
import { Person, Forum } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import UserData from './Form/UserData'
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg"
          alt="header"
        />
      </Link>
      <a href="/chat" component={UserData}>
        <IconButton>
          <Forum fontSize="large" className="header__icon" />
        </IconButton>
      </a>
    </div>
  )
}

export default Header
