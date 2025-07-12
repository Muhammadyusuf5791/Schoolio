import React from 'react'
import './Jobs.css'
import img11 from '../../assets/img11.png'

const Jobs = () => {
  return (
    <div className='jobs-container'>
      <h2>Every child is unique, give them a truly...</h2>
      <h1>Individualized Learning Path</h1>
      <div className="jobs">
        <div className="left">
            <img src={img11} alt="rasm" />
        </div>
        <div className="right">
            <p>Perfect for ESL and IEP learners</p>
            <p>Assign individualized catch up <br />and enrichment lessons</p>
            <p>Match curriculum based on <br />interest and proficiency</p>
            <p>Create custom lessons from <br />scratch unique to your learner</p>
        </div>
      </div>
    </div>
  )
}

export default Jobs
