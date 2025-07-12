import React from 'react'
import './Learner.css'
import img12 from '../../assets/img12.png'

const Learner = () => {
  return (
    <div className='learner-container'>
      <h1>A Library That Grows With Your Learner</h1>
      <div className="learner">
        <div className="left">
            <p>Access thousands of lessons <br />across core subjects: Math, <br />Language, Science, and Social <br />Studies</p>
            <p>Flexible scheduling and <br />curriculum based on your <br />learner's progress and <br /> understanding level</p>
            <p>Increase engagement with <br />interest-based electives and <br />live classes</p>
            <p>Gap assessment that <br />continuously helps you <br />improve content delivery</p>
        </div>
        <div className="right">
            <img src={img12} alt="rasm" />
        </div>
      </div>
    </div>
  )
}

export default Learner
