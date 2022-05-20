import { useState } from "react";
import { assets } from "../../constants";
import { MobileMenuIcon, MobileCloseMenuIcon } from "../../components";
import { Popover } from "@headlessui/react";

import "./navigation.scss";
const { Logo } = assets;

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (e) => {
    const isNavLink = e.target.tagName === "A";

    isNavLink ? setIsMobileMenuOpen(false) : null;
  };

  return (
    <header
      className={`header ${isMobileMenuOpen ? "header--open" : ""}`}
    >
      <div className="overlay" />
      <div className="outer-container header__flex">
        <Logo className="header__logo" />
        <nav className="header__nav">
          <MobileMenuIcon onClick={handleMenuToggle} />
          <ul className="header__list" onClick={handleNavigation}>
            <div className="menu-header">
              <span className="list-title menu-header__title">Menu</span>
              <MobileCloseMenuIcon onClick={handleMenuToggle} />
            </div>
            <li className="header__list-items">
              <a href="#home" className="header__link">
                Início
              </a>
            </li>
            <li className="header__list-items">
              <a href="#about-me" className="header__link">
                Sobre Mim
              </a>
            </li>
            <li className="header__list-items">
              <a href="#projects" className="header__link">
                Projetos
              </a>
            </li>
            <li className="header__list-items">
              <a href="#contact" className="header__link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
