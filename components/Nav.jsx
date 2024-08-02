import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link className='sidebar' to="/" > Home </Link>
        <Link className='sidebar' to="/Product" > Product </Link>
        <Link className='sidebar' to="/Login" > Login </Link>
        <Link className='sidebar' to="/SignUp" > SignUp </Link>
    </div>
  )
}

export default Nav