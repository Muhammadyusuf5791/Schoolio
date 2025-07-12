import React from "react";
import "./Perfect5.css";
import img20 from "../../assets/img20.png";

const Perfect5 = () => {
  return (
    <div className="perfect5-container">
      <h3>Institutions</h3>
      <div className="perfect5">
        <div className="left">
          <img src={img20} alt="rasm" />
        </div>
        <div className="right">
          <p>Unlock school wide SEL and academic analytics <br /> by grade, subject, and class</p>
          <p>Supporting teachers with access to <br />supplementary interest-based curriculum</p>
          <p>Help students catch up or get ahead with tailored <br />and differentiated lesson plans</p>
          <p>
            Reach more students where they are by <br />combining offline and online learning
            home
          </p>
          <button>Get Started as a Institution</button>
        </div>
      </div>
    </div>
  );
};

export default Perfect5;
