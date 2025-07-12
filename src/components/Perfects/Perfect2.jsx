import React from "react";
import './Perfect2.css'
import img17 from '../../assets/img17.png'

const Perfect2 = () => {
  return (
    <div className="perfect2-container">
      <h3>Supplementary</h3>
      <div className="perfect2">
        <div className="left">
          <p>
            Catch up on any subject and grade in one place
          </p>
          <p>Learn on the go, whether you are traveling or sick</p>
          <p>Check your child's understanding with quizzes <br />and gap assessments</p>
          <p>Go above and beyond with a library of interest- <br />based electives</p>
          <button>Get Started as a Supplementary</button>
        </div>
        <div className="right">
          <img src={img17} alt="rasm" />
        </div>
      </div>
    </div>
  );
};

export default Perfect2;
