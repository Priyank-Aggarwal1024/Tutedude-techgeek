import "../styles/Hero.css";
import heroimg from "../assets/hero.png";
function Hero({}) {
  return (
    <section className="techgeek-section hero-section " id="new-designs-hero">
      <div className="hero-left">
        <div className="hero-left-top">
          <div className="hero-left-iit techgeek-text-pink">
            An IIT Delhi Alumni Initiative
          </div>
          <h1 className="main-heading wood-smoke-950 techgeek-fw-400">
            <span className="techgeek-text-light-pink techgeek-fw-700">
              {" "}
              Tech Geek
            </span>
            <div className="techgeek-fw-700">Combo Pack</div>
          </h1>
        </div>
        <div className="hero-speciallycrafted-para">
          <b>6 Courses</b> to become Industry Ready
        </div>
        <div className="hero-left-bottomm">
          <div className="hero-left-bottom-card">
            <div className="hero-yellow-strip1 new-hero-ctm-upskill-cont">
              <div className="hero-line-bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  className="hero-line-bg-circle"
                >
                  <g filter="url(#filter0_f_656_3300)">
                    <path
                      d="M20 7C20 8.65685 18.2944 10 16.1905 10C14.0865 10 4 7 4 7C4 7 14.0865 4 16.1905 4C18.2944 4 20 5.34315 20 7Z"
                      fill="#9C60FF"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_656_3300"
                      x="0"
                      y="0"
                      width="24"
                      height="14"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="2"
                        result="effect1_foregroundBlur_656_3300"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="hero-yellow-text">Enroll</div>

              <div className="hero-yellow-text">Upskill</div>

              <div className="hero-yellow-text">100% Refund</div>
            </div>
          </div>
        </div>
        <div className="hero-price-sec">
          <div className="hero-ps-left">
            <div className="hero-psl-orgprice">₹1999</div>
            <div className="hero-psl-discprice-outer">
              <div className="hero-psl-discprice">₹5999</div>
              <span className="hero-psl-discoff">80% OFF </span>
            </div>
          </div>
          <div className="hero-ps-right">Enroll now </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-image">
          <img src={heroimg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
