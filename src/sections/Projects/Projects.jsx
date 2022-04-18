import { Project, Button } from "../../components";

import "./projects.scss";

const Projects = () => {
  return (
    <section className="projects outer-container" id="projects">
      <h2 className="section-title">Projetos</h2>
      <div className="projects__list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <Button title="Mais projetos" className="projects__button" />
    </section>
  );
};

export default Projects;
