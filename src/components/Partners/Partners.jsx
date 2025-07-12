import React from 'react'
import './Partners.css'
import img21 from '../../assets/img21.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'
import logo9 from '../../assets/logo9.png'
import logo10 from '../../assets/logo10.png'
import logo11 from '../../assets/logo11.png'

const Partners = () => {
  return (
    <div className='partners-container'>
      <h2>Trusted industry partners</h2>
      <div className="partners">
        <div className="left">
            <img src={img21} alt="rasm" />
        </div>
        <div className="right">
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
            <img src={logo5} alt="logo" />
            <img src={logo6} alt="logo" />
            <img src={logo7} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo9} alt="logo" />
            <img src={logo10} alt="logo" />
            <img src={logo11} alt="logo" />
            <img src={logo1} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Partners
