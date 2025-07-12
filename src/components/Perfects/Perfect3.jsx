import React from 'react'
import './Perfect3.css'
import img18 from '../../assets/img18.png'

const Perfect3 = () => {
  return (
     <div className='perfect3-container'>
          <h3>Tutors</h3>
          <div className="perfect3">
            <div className="left">
                <img src={img18} alt="rasm" />
            </div>
            <div className="right">
                <p>The one-stop-shop platform for tutoring needs</p>
                <p>Assessments and progress tracking</p>
                <p>Continued learning between tutoring sessions</p>
                <p>Boost parent happiness with clear progress <br />updates and helpful resources for learning at <br />home</p>
                <button>Get Started as a Tutor</button>
            </div>
          </div>
        </div>
  )
}

export default Perfect3
