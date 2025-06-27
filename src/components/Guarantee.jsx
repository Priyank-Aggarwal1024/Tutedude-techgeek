import "../styles/guarantee.css";
import Comp1 from "../assets/download 1.png";
import Comp10 from "../assets/download 10.png";
import Comp2 from "../assets/download 2.png";
import Comp3 from "../assets/download 3.png";
import Comp4 from "../assets/download 4.png";
import Comp5 from "../assets/download 5.png";
import Comp6 from "../assets/download 6.png";
import Comp7 from "../assets/download 7.png";
import Comp8 from "../assets/download 8.png";
import Comp9 from "../assets/download 9.png";
import Marquee from "react-fast-marquee";
function Guarantee(props) {
  return (
    <>
      <div className="techgeek-company-div">
        <h2 className="techgeek-company-heading techgeek-f-48 techgeek-fw-500 techgeek-text-black techgeek-text-center">
          Top Companies Hiring{" "}
          <span className="techgeek-fw-700 techgeek-text-pink">Tech Geeks</span>
        </h2>
        <Marquee>
          <div className="techgeek-company-hiring-box">
            <img src={Comp3} alt="Google" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp7} alt="Microsoft" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp8} alt="Ola" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp5} alt="Flipkart" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp6} alt="Myntra" />
          </div>

          <div className="techgeek-company-hiring-box">
            <img src={Comp2} alt="Intuit" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp4} alt="Amazon" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp10} alt="Accenture" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp1} alt="IBM" />
          </div>
          <div className="techgeek-company-hiring-box">
            <img src={Comp9} alt="Virtusa" />
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Guarantee;
