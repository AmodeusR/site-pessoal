// import React from "react";
// import { assets } from "../../constants";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";



import "./navigation.scss";

const Navigation = () => {
  return (
    <header className="header">
      <div className="inner-container header__flex">
        <Logo className="header__logo" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-items"><a href="#" className="header__link">Início</a></li>
            <li className="header__list-items"><a href="#" className="header__link">Sobre Mim</a></li>
            <li className="header__list-items"><a href="#" className="header__link">Projetos</a></li>
            <li className="header__list-items"><a href="#" className="header__link">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
