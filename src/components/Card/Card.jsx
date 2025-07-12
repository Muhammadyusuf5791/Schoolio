import React from 'react'
import './Card.css'
import { TiTick } from "react-icons/ti";
import img9 from '../../assets/img9.png'

const Card = () => {
  return (
    <div className='card-container'>
      <div className="card">
        <div className="left">
            <h1>Unlimited 7-days free trial</h1>

            <p><TiTick className='icon' />Lorem ipsum dolor sit amet consectetur.</p>
            <p><TiTick className='icon' />Lorem ipsum dolor sit.</p>
            <p><TiTick className='icon' />Lorem ipsum dolor sit amet.</p>
            <p><TiTick className='icon' />Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p><TiTick className='icon' />Lorem ipsum dolor sit amet consectetur.</p>

            <button>Get Started</button>
        </div>

        <div className="right">
            <img src={img9} alt="rasm" />
        </div>
      </div>
    </div>
  )
}

export default Card
