import React from 'react'
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <div className={classes.container}>
      <img src="https://p-u.popcdn.net/attachments/images/000/012/271/large/logo_cleverse.png?1538033995" />
      <div>
        <p className="font-bold">About Us</p>
        <p className="font-bold">Blog</p>
        <p className="font-bold">Career</p>
        <p className="font-bold">Contact Us</p>
      </div>
    </div>
  )
}

export default Nav
