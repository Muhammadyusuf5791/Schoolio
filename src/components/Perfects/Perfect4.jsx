import React from "react";
import './Perfect4.css'
import img19 from '../../assets/img19.png'

const Perfect4 = () => {
  return (
    <div className="perfect4-container">
      <h3>Teachers</h3>
      <div className="perfect4">
        <div className="left">
          <p>Tailored and differentiated learning per student</p>
          <p>Assessments and progress tracking</p>
          <p>
            Perfect for IEP and ESL students
          </p>
          <p>
            Increase parent satisfaction with progress <br />transparency and at-home resources
          </p>
          <button>Get Started as a Teacher</button>
        </div>
        <div className="right">
          <img src={img19} alt="rasm" />
        </div>
      </div>
    </div>
  );
};

export default Perfect4;
