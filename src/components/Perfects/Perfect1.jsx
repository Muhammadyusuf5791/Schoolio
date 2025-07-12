import React from 'react'
import './Perfect1.css'
import img16 from '../../assets/img16.png'

const Perfect1 = () => {
  return (
    <div className='perfect1-container'>
      <h1>Perfect for</h1>
      <h3>Homeschooling</h3>
      <div className="perfect1">
        <div className="left">
            <img src={img16} alt="rasm" />
        </div>
        <div className="right">
            <p>All of your secular curriculum needs in one place, <br />choose online or offline</p>
            <p>365 days a year 1:1 homeschooling support</p>
            <p>Fully customizable lesson planning to your needs</p>
            <p>Organize an entire year of learning with one click</p>
            <button>Get Started as a Homeschooler</button>
        </div>
      </div>
    </div>
  )
}

export default Perfect1
