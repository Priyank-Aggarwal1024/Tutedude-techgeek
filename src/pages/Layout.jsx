import "../styles/Layout.css";
import CareerOptions from "../components/CareerOptions";
import DoubtSolve from "../components/DoubtSolve";
import Guarantee from "../components/Guarantee";
import Certificate from "../components/Certificate";
import TutedudeLearn from "../components/TutedudeLearn";
import Hero from "../components/Hero";
import Curriculum from "../components/Curriculum";
import Best from "../components/Best";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="tech-geek-main">
      <Navbar />
      <Hero />
      <TutedudeLearn />
      <Curriculum slug={"techgeek"} />
      <Best />
      <Certificate />
      <Guarantee />
      <DoubtSolve />
      <CareerOptions />
      <Footer />
    </div>
  );
}

export default Layout;
