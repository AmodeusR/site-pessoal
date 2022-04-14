import { AboutMeCard } from "../../components";
import Knowledge from "./Knowledge/Knowledge";

import "./about-section.scss";

const About = () => {
  return (
    <section className="about outer-container">
      <h2 className="section-title">Sobre Mim<span className="theme-container">_</span></h2>
      <div className="about-grid">
        <AboutMeCard className="about__card" />
        <Knowledge />
      </div>
    </section>
  );
};

export default About;
