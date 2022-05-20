import ContactCard from "./ContactCard/ContactCard";
import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact outer-container" id="contact">
      <h2 className="section-title">Contato</h2>
      <ContactCard />
    </section>
  );
};

export default Contact;
