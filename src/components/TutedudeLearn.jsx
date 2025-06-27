import "../styles/TutedudeLearn.css";
import learn from "../assets/learn.svg";
import learngif1 from "../assets/learngif1.gif";
import learngif2 from "../assets/learngif2.gif";
import learngif3 from "../assets/learngif3.gif";
import cardoval from "../assets/card-oval.svg";
import moneyback from "../assets/moneyback.png";
function TutedudeLearn() {
  return (
    <>
      <div className="tutedude-learn">
        <div className="tutedude-learn-top">
          <h2 className="techgeek-text-center techgeek-f-48 techgeek-text-white techgeek-fw-700">
            How to Learn for Free
          </h2>
        </div>
        <div className="tutedude-learn-main">
          <div className="tutedude-learn-main-right">
            <img
              src={learn}
              alt="Tutedude Learn"
              className="tutedude-learn-image"
            />
            <img
              src={moneyback}
              alt="Tutedude Money Back Guarantee"
              className="tutedude-learn-moneyback"
            />
            <div className="tutedude-learn-gradient"></div>
          </div>
          <div className="tutedude-learn-main-left">
            <div className="tlml-card">
              <div className="tlml-card-gif">
                <img src={learngif1} alt="Enroll Gif" />
              </div>
              <div className="tlml-card-left">
                <div className="tlml-card-subhead">
                  Enroll <b>By Paying</b> <br />
                  ₹1999
                </div>
              </div>
              <img
                src={cardoval}
                alt="Card Background Design"
                className="tutedude-learn-ovaldesign"
              />
              <div className="tlml-card-right">1</div>
            </div>
            <div className="tlml-card">
              <div className="tlml-card-gif">
                <img src={learngif2} alt="Explore Courses Gif" />
              </div>
              <div className="tlml-card-left">
                <div className="tlml-card-subhead">
                  <b>Complete Courses</b> <br /> Within 24 Months
                </div>
              </div>
              <img
                src={cardoval}
                alt="Card Background Design"
                className="tutedude-learn-ovaldesign"
              />
              <div className="tlml-card-right">2</div>
            </div>
            <div className="tlml-card">
              <div className="tlml-card-gif">
                <img src={learngif3} alt="Complete Assignments Gif" />
              </div>
              <div className="tlml-card-left">
                <div className="tlml-card-subhead">
                  Get <b>100% Refund</b> <br /> Back into Your bank
                </div>
              </div>
              <img
                src={cardoval}
                alt="Card Background Design"
                className="tutedude-learn-ovaldesign"
              />
              <div className="tlml-card-right">3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutedudeLearn;
