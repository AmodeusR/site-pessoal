import { Button } from "../../components";
import "./about-card.scss";

const AboutMeCard = () => {
  return (
    <div className="about-card">
      <img
        className="about-card__img"
        src="https://source.unsplash.com/random"
        alt="picture of me"
      />
      <h3 className="about-card__title">Ricardo Magalhães (A.R)</h3>
      <p className="about-card__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        accusamus sit quas nostrum! Laudantium quo saepe earum corrupti sequi
        vel odio perspiciatis, iste vitae ut itaque reprehenderit quaerat nemo
        minus.
      </p>
      <Button
        className="button--hollow about-card__button"
        title="Mais sobre mim"
        type="arrow"
        disabled
      />
    </div>
  );
};

export default AboutMeCard;
