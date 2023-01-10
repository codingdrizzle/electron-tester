import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({color}) => {
  return (
      <Link to={'/'} className='company-name' style={{color: color}}>
          <div className="logo"></div>
          DESIGNO
      </Link>
  )
}

export default Logo