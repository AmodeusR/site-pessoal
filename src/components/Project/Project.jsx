import { useState } from "react";
import { Button, MobileCloseMenuIcon } from "../../components";
import { urlFor } from "../../utils/sanityClient";

import "./project.scss";

const Project = ({ backgroundImage, title, description, usedTechs = [], repoLink = "#/", demoLink = "#/" }) => {
  const [overlay, setOverlay] = useState(false);

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <article className={`project ${overlay ? "active" : ""}`}>
      <div
        className="project__background-image"
        style={{ backgroundImage: `url(${urlFor(backgroundImage)})` }}
        onClick={handleOverlay}
      />
      <div className="project__overlay">
        <MobileCloseMenuIcon
          className="project__close"
          onClick={() => setOverlay(false)}
        />
        <h2 className="project__title">{title}</h2>
        <div className="project__description">{description}</div>
        <div className="project__used-techs">
          <h3>Techs usadas</h3>
          <div className="project__list">
            {usedTechs.map(usedTech => (
              <img src={urlFor(usedTech.imageSrc)} alt={usedTech.techName} key={usedTech._id} />
            ))}
          </div>
        </div>
        <div className="project__cta">
          <Button title="Ver repo" className="button--hollow" onClick={() => window.open(repoLink, "_blank")} />
          <Button title="Ver site" className="button--accent" onClick={() => window.open(demoLink, "_blank")} />
        </div>
      </div>
    </article>
  );
};

export default Project;
