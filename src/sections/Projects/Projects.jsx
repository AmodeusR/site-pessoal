import { useState, useEffect } from "react";
import { Project, Button } from "../../components";

import { sanityFetchProjects } from "../../utils/sanityClient";

import "./projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedProjects = await sanityFetchProjects();

      setProjects(fetchedProjects);
    })();
  }, []);

  return (
    <section className="projects outer-container" id="projects">
      <h2 className="section-title">Projetos</h2>
      <div className="projects__list">
        {projects?.map(({ _id, imageSrc, title, description, usedTechs, repoLink, demoLink }) => (
          <Project
            backgroundImage={imageSrc}
            title={title}
            description={description[0]}
            usedTechs={usedTechs}
            key={_id}
            repoLink={repoLink}
            demoLink={demoLink}
          />
        ))}
      </div>
      <Button title="Mais projetos" className="projects__button" onClick={() => window.open("https://github.com/AmodeusR/repositorio-geral/blob/main/README.md", "_blank")} />
    </section>
  );
};

export default Projects;
