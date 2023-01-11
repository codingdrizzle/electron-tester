import React from 'react'
import { Card as Sheet } from 'antd'
// import img from '../assets/express-desktop,png'

const Card = () => {
  return (
    <Sheet className='card'>
        <div className="card-img">
            {/* <img src={img} alt="some image" /> */}
            hello
        </div>
        <div className="card-footer"></div>
    </Sheet>
  )
}

export default Card