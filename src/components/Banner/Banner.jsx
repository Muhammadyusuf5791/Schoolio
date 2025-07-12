import React from 'react'
import './Banner.css'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="content">
            <h1>Enrich Your Child's Education Journey</h1>
            <div className="text">
            <p>Increase confidence in learners</p>
            <p>Spark curiosity and find unique passions</p>
            <p>Fit for your learners' needs and interests</p>
            <p>Comprehensive, up-to-date curriculum</p>
            </div>
            <img src={img6} alt="rasm" className='image1' />
            <img src={img7} alt="rasm" className='image2' />
        </div>
      </div>
    </div>
  )
}

export default Banner
