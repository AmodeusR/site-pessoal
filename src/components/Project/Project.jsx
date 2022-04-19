import { Button } from "../../components";
import "./project.scss";

const Project = () => {
  const imgLink = "url(https://raw.githubusercontent.com/AmodeusR/FM--3-column-card/master/page-models/desktop.png)";

  
  const usedTechs = [
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"}
  ];
  
  return (
    <div
      style={{backgroundImage: imgLink}}
      className="project">
      
      <div className="project__overlay">
        <h2 className="project__title">Meu título</h2>
        <div className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni facere laboriosam asperiores, in, quidem consequatur explicabo enim velit vel itaque dolorum animi. Expedita non enim quod sed, amet maiores.</div>
        <div className="project__used-techs">
          <h3>Techs usadas</h3>
          <div className="project__list">
            {usedTechs.map((usedTech, i) => (
              <img src={usedTech.image} alt="image" key={i} />
            ))}
          </div>
        </div>
        <div className="project__cta">
          <Button title="Ver repo" className="button--hollow" />
          <Button title="Ver site" className="button--accent" />
        </div>
      </div>
    </div>
  );
};

export default Project;
