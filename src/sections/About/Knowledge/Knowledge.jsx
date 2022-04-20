import { useState, useEffect } from "react";
import sanityFetch from "../../../utils/sanityClient";
import { Icon } from "../../../components";

const Knowledge = () => {
  const [techs, setTechs] = useState([]);
  const [apps, setApps] = useState([]);

  useEffect(() => {

    (async () => {
      const techsData = await sanityFetch("techs");
      const appsData = await sanityFetch("apps");
      setTechs(techsData);
      setApps(appsData);

    })();

  }, []);

  return (
    <section className="knowledge inner-container">
      <h3 className="section-subtitle-l1">Conhecimentos</h3>
      <div className="knowledge__container">
        <div className="knowledge__techs-container">
          <h4 className="section-subtitle-l2">Tecnologias</h4>
          <div className="knowledge__techs-list">
            {techs?.map((item) => (
              <Icon key={item.techName} src={item.imageSrc} alt={item.techName} />
            ))}
          </div>
        </div>
        <div className="knowledge__apps-container">
          <h4 className="section-subtitle-l2">Programas</h4>
          <div className="knowledge__apps-list">
            {apps?.map((item) => (
              <Icon key={item.appName} src={item.imageSrc} alt={item.appName} />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
