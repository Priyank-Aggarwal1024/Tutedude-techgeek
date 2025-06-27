import "../styles/Certificate.css";
import certificate from "../assets/certificate.svg";
function Certificate() {
  return (
    <>
      <div className="certificate">
        <h2 className="techgeek-certificate-heading techgeek-f-48 techgeek-fw-500 techgeek-text-black techgeek-text-center">
          Unlock Industry
          <span className="techgeek-fw-700 techgeek-text-pink">
            {" "}
            Recognized
            <br />6 Certifications
          </span>
        </h2>
        <div className="certificate-main">
          <img
            src={certificate}
            alt="Certificate"
            className="certificate-image"
          />
        </div>
        <h4 className="techgeek-certificate-bottom techgeek-fw-400">
          Certificate of
          <span className="techgeek-text-pink techgeek-fw-700"> Python</span>
        </h4>
      </div>
    </>
  );
}

export default Certificate;
