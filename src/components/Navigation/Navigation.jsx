import { useState } from "react";
import { assets } from "../../constants";
import { MobileMenuIcon, MobileCloseMenuIcon } from "../../components";

import "./navigation.scss";
const { Logo } = assets;

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = ({ target }) => {
    const clickType = target.dataset.type;

    switch(clickType) {
    case "mobile-menu":
      setIsMobileMenuOpen(true);
      break;

    case "overlay":
    case "close":
      setIsMobileMenuOpen(false);
      break;
    }
  };

  return (
    <header className={`header ${isMobileMenuOpen ? "header--open" : ""}`} onClick={handleMenuToggle}>
      <div className="overlay" data-type="overlay" />
      <div className="inner-container header__flex">
        <Logo className="header__logo" />
        <nav className="header__nav" data-type="mobile-menu">
          <MobileMenuIcon />
          <ul className="header__list">
            <div className="menu-header">
              <span className="list-title menu-header__title">Menu</span>
              <MobileCloseMenuIcon />
            </div>
            <li className="header__list-items"><a href="#home" className="header__link">Início</a></li>
            <li className="header__list-items"><a href="#about-me" className="header__link">Sobre Mim</a></li>
            <li className="header__list-items"><a href="#projects" className="header__link">Projetos</a></li>
            <li className="header__list-items"><a href="#contact" className="header__link">Contato</a></li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Navigation;
