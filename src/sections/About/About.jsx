import { AboutMeCard } from "../../components";

import "./about-section.scss";

const About = () => {
  return (
    <section className="about outer-container">
      <h2 className="section-title">Sobre Mim<span className="theme-container">_</span></h2>
      <div className="about-grid">
        <AboutMeCard />
      </div>
    </section>
  );
};

export default About;
