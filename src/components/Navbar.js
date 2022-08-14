import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/register">Register</Link>
    </nav>
  )
}

export default Navbar