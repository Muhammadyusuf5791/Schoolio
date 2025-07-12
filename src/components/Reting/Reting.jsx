import React from 'react'
import './Reting.css'
import img10 from '../../assets/img10.png'

const Reting = () => {
  return (
    <div className='reting-container'>
      <h1>Where Academics And Well-Being Meet</h1>
      <div className="reting">
        <div className="left">
        <p>Insights into how your learner is <br />feeling everyday with Schoolio's <br />Vibe Check</p>
        <p>Track grades, assignments, and <br />completion across all subjects</p>
        <p>Manage multiple learners and <br />view progress at a glance from <br />your dashboard</p>
        <p>Get personalized AI-driven <br />content and lesson scheduling <br />recommendations</p>
        </div>
        <div className="right">
            <img src={img10} alt="rasm" />
        </div>
      </div>
    </div>
  )
}

export default Reting
