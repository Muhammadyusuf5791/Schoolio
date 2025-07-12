import React from 'react'
import './Science.css'
import img14 from '../../assets/img14.png'
import img15 from '../../assets/img15.png'

const Science = () => {
  return (
    <div>
    <div className='science'>
      <h1>Flexible to Your Style: <br />Online, Offline, or Hybrid</h1>
      <div className="paragraph">
      <p>Print-and-go curriculum books</p>
      <p>Tablet-friendly annotatable lessons and <br />worksheets</p>
      <p>Add your own videos and worksheets</p>
      <p>Switch up your learning, from the park <br />bench to a long road trip, with you <br />anywhere you go!</p>
      </div>
      <img src={img14} alt="rasm" className='image1' />
      <img src={img15} alt="rasm" className='image2' />
    </div>
    </div>
  )
}

export default Science
