import { Input, Button } from "../../../components";
import "./contact-card.scss";

const ContactCard = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-card">
      <h2 className="section-subtitle-l2 contact-card__title">Gostou do do que viu? Manda uma mensagem aí, então (⌐■_■)👍</h2>
      <form className="contact-card__form" action="post" onSubmit={handleFormSubmit}>
        <Input title="Seu nome" type="text" name="nome" />
        <Input title="Seu e-mail" type="email" name="email" />
        <div className="inputlabel">
          <label htmlFor="mensagem">Sua mensagem</label>
          <textarea className="contact-card__textfield" name="mensagem" id="mensagem"></textarea>
        </div>
        <Button title="Enviar mensagem" type="submit" className="contact-card__button" />
      </form>
    </div>
  );
};

export default ContactCard;
