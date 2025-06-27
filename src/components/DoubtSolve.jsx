import "../styles/DoubtSolve.css";
import Chat from "../assets/Chat.png";
import Read from "../assets/Read.png";
import Doubt from "../assets/doubtSolve.png";

function DoubtSolve() {
  return (
    <>
      <section className="techgeek-section ds-techgeek-doubt-solve">
        <h2 className="ds-techgeek-doubt-solve-heading techgeek-fw-500">
          Instant Doubt
          <span className="ds-techgeek-text-pink ds-techgeek-fw-700">
            {" "}
            Solving
          </span>
        </h2>
        <div className="ds-techgeek-doubt-main">
          <div className="ds-techgeek-doubt-left">
            <div className="ds-techgeek-doubt-card ds-techgeek-doubt-card1">
              <div className="ds-techgeek-dc-left">
                <img src={Chat} alt="Chat Doubt Image" />
              </div>
              <div className="ds-techgeek-dc-right">
                <p className="ds-techgeek-dc-heading">
                  Doubts Solved in 5-10 min
                </p>
                <p className="ds-techgeek-dc-text">
                  Ask your doubts when you want, and get it solved within 5-10
                  minutes
                </p>
              </div>
            </div>
            <div className="ds-techgeek-doubt-card ds-techgeek-doubt-card2">
              <div className="ds-techgeek-dc-left">
                <img src={Read} alt="Read Doubt Image" />
              </div>
              <div className="ds-techgeek-dc-right">
                <p className="ds-techgeek-dc-heading">
                  Experience 1 : 1 learning
                </p>
                <p className="ds-techgeek-dc-text">
                  With robust Mentor Support, experience seamless learning with
                  personal mentorship
                </p>
              </div>
            </div>
          </div>
          <div className="ds-techgeek-doubt-right">
            <img src={Doubt} alt="Doubt Solve Main Image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default DoubtSolve;
