import "../styles/best.css";
const imageBaseURL = import.meta.env.VITE_IMAGE_BASE_URL;

const star = `${imageBaseURL}/star-svg.webp`;
const best1 = `${imageBaseURL}/best1-svg.webp`;
const best2 = `${imageBaseURL}/best2-svg.webp`;
const best3 = `${imageBaseURL}/best3-svg.webp`;
const best4 = `${imageBaseURL}/best4-svg.webp`;
const best5 = `${imageBaseURL}/best5-svg.webp`;
const best6 = `${imageBaseURL}/best6-svg.webp`;

function Best() {
  return (
    <>
      <div className="techgeek-section techgeek-pack-new-best">
        <h2 className="techgeek-f-48 techgeek-text-pink techgeek-text-center">
          <span className="techgeek-text-black techgeek-fw-400">
            Why its the{" "}
          </span>
          Best Program?
        </h2>
        <div className="techgeek-pack-new-best-middle">
          <div className="techgeek-pnbm-left">65000+ Students</div>
          <div className="techgeek-pnbm-right">
            <span>4.9</span>
            <img src={star} alt="Star" />
            <span>Rated</span>
          </div>
        </div>
        <div className="techgeek-pack-new-best-bottom">
          <div className="techgeek-pack-new-best-cards">
            <div className="techgeek-pack-new-best-card">
              <img src={best1} alt="Cover everything from Scratch" />
              <p>Cover everything from Scratch</p>
            </div>
            <div className="techgeek-pack-new-best-card">
              <img src={best2} alt="Certification" />
              <p>Professional Certification</p>
            </div>
            <div className="techgeek-pack-new-best-card">
              <img src={best4} alt="Internship/Placement opportunities" />
              <p>Internship/Placement opportunities</p>
            </div>
            <div className="techgeek-pack-new-best-card">
              <img src={best6} alt="Lifetime Access to content" />
              <p>Lifetime Access to content</p>
            </div>
            <div className="techgeek-pack-new-best-card">
              <img src={best3} alt="1:1 live instant doubt support" />
              <p>1:1 live instant doubt support</p>
            </div>
            <div className="techgeek-pack-new-best-card">
              <img src={best5} alt="Projects based learning" />
              <p>Projects based learning</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Best;
