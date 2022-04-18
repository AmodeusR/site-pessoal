import { AboutMeCard } from "../../components";
import Knowledge from "./Knowledge/Knowledge";

import "./about-section.scss";

const About = () => {
  return (
    <section className="about outer-container" id="about-me">
      <h2 className="section-title">Sobre Mim</h2>
      <AboutMeCard className="about__card" />
      <Knowledge />
    </section>
  );
};

export default About;
