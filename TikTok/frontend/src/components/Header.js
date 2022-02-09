import { IconButton } from '@material-ui/core'
import { Person, Forum } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import UserData from './form/UserData'
const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <IconButton>
          <Person fontSize="large" className="header__icon" />
        </IconButton>
      </a>
      <a href="/chat" component={UserData}>
        <IconButton>
          <Forum fontSize="large" className="header__icon" />
        </IconButton>
      </a>
    </div>
  )
}

export default Header
