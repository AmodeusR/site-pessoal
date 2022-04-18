import { useState, useEffect } from "react";
import sanityFetch from "../../../utils/sanityClient";
import { Icon } from "../../../components";

const Knowledge = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {

    (async () => {
      const data = await sanityFetch("techs");
      setTechs(data);

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
              <Icon key={item.technology} src={item.image} alt={item.technology} />
            ))}
          </div>
        </div>
        <div className="knowledge__apps-container">
          <h4 className="section-subtitle-l2">Programas</h4>
          <div className="knowledge__apps-list">
            {techs?.map((item) => (
              <Icon key={item.technology} src={item.image} alt={item.technology} />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
