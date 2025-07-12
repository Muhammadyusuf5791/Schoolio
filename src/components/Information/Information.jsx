import React from "react";
import "./Information.css";
import img22 from "../../assets/img22.png";
import img23 from "../../assets/img23.png";
import img24 from "../../assets/img24.png";
import img25 from "../../assets/img25.png";

const Information = () => {
  return (
    <div className="information-container">
      <h1>Loved by learners everywhere</h1>
      <div className="information">
        <div className="content content1">
          <div className="left">
            <img src={img22} alt="rasm" />
          </div>
          <div className="right">
            <p>
              “Schoolio is the best program available. It <br />
              meets my curriculum requirements and <br />
              makes learning fun. I would highly <br />
              recommend it.” <br />— Sierra A.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="right2">
            <p>
              “I used schoolio grade 2 and 3 last <br />
              year and it was my life saver, I love it.” <br />
              “I used schoolio grade 2 and 3 last year and it <br />was my life saver,
              I love it.” — Melissa C.
            </p>
          </div>
          <div className="left2">
            <img src={img23} alt="rasm" />
          </div>
        </div>

        <div className="content content1">
          <div className="left3">
            <img src={img24} alt="rasm" />
          </div>
          <div className="right3">
            <p>
              “The curriculum is easy to follow and <br />
              helped me our schooling experience a <br />
              smooth and enjoyable one..." <br />— Katherine S.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="right4">
            <p>
              "I love this program so much. My daughter <br />just did the solar oven
              for grade 5 science. <br />Thank you so much, last year was a <br />struggle
              but this year we are all having a <br />blast." — Melanie W.
            </p>
          </div>
          <div className="left4">
            <img src={img25} alt="rasm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
