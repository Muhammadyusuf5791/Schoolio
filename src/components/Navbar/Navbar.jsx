import React from "react";
import "./Navbar.css";
import { FaPhoneVolume } from "react-icons/fa6";
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'

const Navbar = () => {
  return (
    <div>
      <div className="top-header">
        <p>
          Not sure where to start?{" "}
          <a href="#">
            Get help <FaPhoneVolume />
          </a>
        </p>
      </div>

      <header className="header">
        <div className="logo">
          <h1>schoolio</h1>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Bookstore</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="navbar">
        <div className="content">
          <h3>School Your Way with</h3>
          <h1>Schoolio Digital</h1>
          <p>
            Unleash a personalized, all-in-one, <br />
            grade 1-8 learning platform.
          </p>
          <button>Get Started</button>
        </div>

        <img src={img2} alt="rasm" />
        <img src={img3} alt="rasm" />
        <img src={img4} alt="rasm" />
        <img src={img5} alt="rasm" />
      </div>
    </div>
  );
};

export default Navbar;
