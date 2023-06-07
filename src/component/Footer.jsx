import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.container}>
      <p className="font-bold text-xl">About Us</p>
      <p className="font-bold text-xl">Blog</p>
      <p className="font-bold text-xl">Career</p>
      <p className="font-bold text-xl">Contact Us</p>
    </div>
  )
}

export default Footer
