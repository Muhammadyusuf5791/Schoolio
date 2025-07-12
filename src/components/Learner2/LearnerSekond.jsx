import React from 'react'
import './LearnerSekond.css'
import img13 from '../../assets/img13.png'

const LearnerSekond = () => {
  return (
    <div className='learner2-container'>
      <h1>Have a Unique Needs Learner?</h1>
      <p>Experience the #1 best program for neurodivergent students! <br />Designed with uniqueness in mind!</p>
      <div className="learner2">
        <div className="left">
            <p>Bite-sized learning sessions for maximum <br />engagement and attention</p>
            <p>Audio, video, and printable available</p>
            <p>Activity variety</p>
            <p>Mix-and-match grade levels</p>
            <p>Choose digital or handwritten practice</p>
            <p>Custom scheduling</p>
        </div>
        <div className="right">
            <img src={img13} alt="rasm" />
        </div>
      </div>
    </div>
  )
}

export default LearnerSekond
