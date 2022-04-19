import "./hero-section.scss";
import { Button } from "../../components";

const Hero = () => {
  return (
    <div className="outer-container hero" id="home">
      <h1 className="hero__title theme-container">
        Front-end <span className="theme-neutralize">Dev &</span><br /> UI/UX{" "}
        <span className="theme-neutralize">Designer</span>
      </h1>
      <span className="hero__description">
        Moldando o mundo através da{" "}<br />
        <span className="modular-text">programação.</span>
      </span>
      <div className="hero__cta">
        <a href="#projetos" id="link-project">
          <Button title="Projetos" />
        </a>
        <Button title="Baixar CV" className="button--hollow" icon="download" />
      </div>
    </div>
  );
};

export default Hero;
