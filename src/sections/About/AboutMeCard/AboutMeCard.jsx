import { Button } from "../../../components";
import "./aboutme-card.scss";

const AboutMeCard = () => {
  return (
    <div className="about-card">
      <img
        className="about-card__img"
        src="https://avatars.githubusercontent.com/u/29683600?v=4"
        alt="picture of me"
      />
      <div className="about-card__body">
        <h3 className="about-card__title">Ricardo Magalhães (A.R)</h3>
        <div className="about-card__description">
          <p>&nbsp;&nbsp; Desde muito novo, sempre fui fascinado por jogos, como eram divertidos, belos e com ótimas trilhas sonoras. Isso acabou me levando a caminhos inevitáveis: à música, à arte e, naturalmente, à <strong>programação</strong>.</p>
          <p>&nbsp;&nbsp; Este último é o que me trouxe aqui, e agora mesmo estou nesta jornada de aprendizado – assídua, diga-se de passagem – a fim de tornar real as coisas que amo através da programação!</p>
        </div>
        <Button
          className="button--hollow about-card__button"
          title="Mais sobre mim"
          icon="arrow"
          disabled
        />
      </div>
    </div>
  );
};

export default AboutMeCard;
