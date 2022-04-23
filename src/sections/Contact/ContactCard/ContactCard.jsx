import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

import { Input, Button, LoadingAnimation } from "../../../components";
import "./contact-card.scss";

const ContactCard = () => {

  const [state, handleFormSubmit] = useForm("xyyobgqr");
  const [buttonContent, setButtonContent] = useState("Enviar mensagem");
  const { submitting, succeeded, errors } = state;

  useEffect(() => {
    if (submitting) {
      setButtonContent(<LoadingAnimation />);
    } else if (errors.length) {
      setButtonContent("Algo deu errado :(");
      errors.forEach(error => {
        console.warn("Formspree Error:");
        console.warn(error);
      });
    } else if (succeeded) {
      setButtonContent("Enviado!");
    }

  }, [state]);

  return (
    <div className="contact-card">
      <h2 className="section-subtitle-l2 contact-card__title">
        Quer que eu trabalhe pra você? Vamos conversar então :D
      </h2>
      <form
        className="contact-card__form"
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <Input title="Seu nome" type="text" name="nome"  required />
        <Input title="Seu e-mail" type="email" name="email" required />
        <div className="inputlabel">
          <label htmlFor="mensagem">Sua mensagem</label>
          <textarea
            
            className="contact-card__textfield"
            name="mensagem"
            id="mensagem"
            required
          ></textarea>
        </div>
        <Button
          title={buttonContent}
          type="submit"
          className="contact-card__button"
        />
      </form>
    </div>
  );
};

export default ContactCard;
