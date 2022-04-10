import "./hero-section.scss";
import { Button } from "../../components";

const HeroSection = () => {
  return (
    <div className="outer-container hero">
      <h1 className="hero__title"><span className="theme-color">Front-end</span> Dev & <span className="theme-color">UI/UX</span> Designer</h1>
      <span className="hero__description">
        Moldando o mundo através da <span className="theme-color" style={{fontWeight: 700, color: "var(--gradiente-origem)"}}>programação</span>
      </span>
      <div className="hero__cta">
        <a href="#projetos" id="link-project">
          <Button title="Projetos" />
        </a>
        <Button title="Baixar CV" className="button--hollow" type="download" />
      </div>
    </div>
  );
};

export default HeroSection;
