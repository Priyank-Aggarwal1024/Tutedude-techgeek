import "../styles/curriculum.css";
const imageBaseURL = import.meta.env.VITE_IMAGE_BASE_URL;
const timer = `${imageBaseURL}/timer-svg.webp`;
import eye from "../assets/eye.svg";
import data from "../contents/data";
function Curriculum({ slug }) {
  return (
    <>
      <section className="techgeek-section techgeek-curriculum">
        <h2 className="techgeek-c-heading">
          <span className="techgeek-text-black techgeek-fw-500">
            Tech Geeks
          </span>{" "}
          Courses Curriculum
        </h2>
        <div className="techgeek-c-middle">
          <p>Industry standard courses</p>
          <p>Instant Doubt Support</p>
          <p>Dedicated Placement Support</p>
          <p>Project based Learning</p>
        </div>
        <div className="techgeek-c-bottom">
          {data[slug]?.curric.map((course, ind) => (
            <div className="techgeek-cb-card" key={ind}>
              <div className="techgeek-cbc-left">
                <img
                  src={course?.src}
                  alt="Python"
                  className="techgeek-cbc-left-img"
                />
              </div>
              <div className="techgeek-cbc-right">
                <div className="techgeek-cbcr-top">
                  <div className="techgeek-cbcrt-left">
                    <div className="techgeek-card-heading">{course?.title}</div>
                    <div className="techgeek-card-duration">
                      <img src={timer} alt="Timer" />
                      <p>Duration: {course?.duration}</p>
                    </div>
                  </div>
                  <div className="techgeek-cbcrt-right">{ind + 1}</div>
                </div>
                <div className="techgeek-cbcr-bottom pointer">
                  <img
                    src={eye}
                    alt="Eye"
                    className="techgeek-cbcr-bottom-eye"
                  />
                  <p>Curriculum</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Curriculum;
