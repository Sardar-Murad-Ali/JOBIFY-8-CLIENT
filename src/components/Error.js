import React from 'react'
import error from "../images/not-found.svg"
import {Link} from "react-router-dom"
import "./Error.css"

const Error = () => {
  return (
    <div className='error'>
        <img alt="ssd" src={error}/>
        <h4>OHH!PAGE NOT FOUND</h4>
        <p>We cant seen to find the page you are looking for</p>
        <Link to="/" className="btn">Back To Home</Link>
    </div>
  )
}

export default Error