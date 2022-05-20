import { useState, useEffect, useReducer } from "react";
import { useForm } from "@formspree/react";

import { Input, Button, LoadingAnimation } from "../../../components";
import "./contact-card.scss";

// Trying out reducer, just a little practice
const reducer = (fields, action) => {
  const fieldChanges = {
    name: { ...fields, name: action.payload },
    email: { ...fields, email: action.payload },
    message: { ...fields, message: action.payload },
    default: fields,
  };

  const fieldChangesOpts = Object.keys(fieldChanges);

  const handleFieldChange = fieldChangesOpts.find(
    (option) => option === action.type
  );

  return fieldChanges[handleFieldChange];
};

const ContactCard = () => {
  const [fields, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    message: "",
  });

  const [state, handleFormSubmit] = useForm("xyyobgqr");
  const [buttonContent, setButtonContent] = useState("Enviar mensagem");
  const { submitting, succeeded, errors } = state;

  useEffect(() => {
    if (submitting) {
      setButtonContent(<LoadingAnimation />);
    } else if (errors.length) {
      setButtonContent("Algo deu errado :(");
      errors.forEach((error) => {
        console.warn("Formspree Error:");
        console.warn(error);
      });
    } else if (succeeded) {
      setButtonContent("Enviado!");
    }
  }, [state]);

  const handleInputChange = (input, e) => {
    dispatch({ type: input, payload: e.target.value });
  };

  return (
    <div className="contact-card">
      <h2 className="section-subtitle-l2 contact-card__title">
        Quer que eu trabalhe pra você? Só mandar uma mensagem ;)
      </h2>
      <form
        className="contact-card__form"
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <Input
          title="Seu nome"
          type="text"
          name="nome"
          value={fields.name}
          onChange={(e) => handleInputChange("name", e)}
          required
        />
        <Input
          title="Seu e-mail"
          type="email"
          name="email"
          value={fields.email}
          onChange={(e) => handleInputChange("email", e)}
          required
        />
        <div className="inputlabel">
          <label htmlFor="mensagem">Sua mensagem</label>
          <textarea
            value={fields.message}
            onChange={(e) => handleInputChange("message", e)}
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
