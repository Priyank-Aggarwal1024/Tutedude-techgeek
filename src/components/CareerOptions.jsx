import React from "react";
import "../styles/careeroption.css";
import AD from "../assets/appdev.png";
import FD from "../assets/fsdev.png";
import EH from "../assets/ethicalhacker.png";
import DS from "../assets/dscience.png";

function CareerOptions(props) {
  return (
    <section className="techgeek-section techgeek-carreroption">
      <div className="techgeek-carreroption-heading techgeek-f-48">
        <p className="techgeek-fw-500 techgeek-text-black techgeek-text-center">
          <span className="techgeek-fw-700 techgeek-text-pink">
            Top Career{" "}
          </span>
          Option in
        </p>
        <p className="techgeek-fw-500 techgeek-text-black techgeek-text-center">
          Tech Geeks
        </p>
        <div className="techgeek-co-cards">
          <div className="techgeek-co-card">
            <div className="techgeek-co-icon">
              <img src={FD} alt="Full stack developer" />
            </div>
            <div className="techgeek-co-heading">Full stack developer</div>
            <div className="techgeek-co-text">
              Build And Maintain Web Applications Using The MERN Stack (MongoDB,
              Express.Js, React, Node.Js).
            </div>
          </div>
          <div className="techgeek-co-card">
            <div className="techgeek-co-icon">
              <img src={DS} alt="Data Science" />
            </div>
            <div className="techgeek-co-heading">Data Science</div>
            <div className="techgeek-co-text">
              Design, Develop, And Test Machine Learning Systems And Implement
              ML Algorithms.
            </div>
          </div>
          <div className="techgeek-co-card">
            <div className="techgeek-co-icon">
              <img src={EH} alt="Ethical hacker" />
            </div>
            <div className="techgeek-co-heading">Ethical hacker</div>
            <div className="techgeek-co-text">
              Identify And Mitigate Security Threats By Testing And Securing
              Computer Systems.
            </div>
          </div>
          <div className="techgeek-co-card">
            <div className="techgeek-co-icon">
              <img src={AD} alt="App Development" />
            </div>
            <div className="techgeek-co-heading">App Development</div>
            <div className="techgeek-co-text">
              Identify And Mitigate Security Threats By Testing And Securing
              Computer Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerOptions;
