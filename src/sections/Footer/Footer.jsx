import { assets } from "../../constants";
import "./footer.scss";

const { LogoGrayscale, GithubIcon, LinkedinIcon } = assets;

const Footer = () => {
  return (
    <footer className="footer outer-container">
      <LogoGrayscale />
      <div className="footer__section">
        <h2 className="footer__title">Início</h2>
        <div className="footer__links">
          <a href="#about-me" className="footer__link">
            Sobre Mim
          </a>
          <a href="#projects" className="footer__link">
            Projetos
          </a>
        </div>
      </div>
      <div className="footer__section social">
        <h2 className="footer__title">Social</h2>
        <div className="footer__icons">
          <a href="https://github.com/amodeusr" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/amodeusr" target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
      <p className="footer__section footer__description">Este site foi desenvolvido por Amodeus R.</p>
    </footer>
  );
};

export default Footer;
