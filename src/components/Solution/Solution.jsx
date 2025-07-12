import React from 'react'
import './Solution.css'
import img8 from '../../assets/img8.png'

const Solution = () => {
  return (
    <div className='solution'>
      <h1>Your Complete All-In-One Solution</h1>
      <div className="content">
        <div className="left">
            <img src={img8} alt="rasm" />
        </div>
        <div className="right">
            <p>Choose fully online or offline</p>
            <p>Plan an entire year of learning <br />with one click</p>
            <p>Bite-sized multimedia content</p>
            <p>Daily comprehension practice <br />and testing</p>
            <p>Mix-and-match subjects and <br />grades</p>
        </div>
      </div>
    </div>
  )
}

export default Solution
