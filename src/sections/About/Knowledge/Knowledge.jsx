import { useState, useEffect } from "react";
import { urlFor, client } from "../../../utils/sanityClient";

const Knowledge = () => {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    const query = "*[_type == 'techs']";
    const fetchData = async () => {
      try {
        const data = await client.fetch(query);
        console.log(data);
        setTechs(data);
        
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="knowledge inner-container">
      <h3 className="section-subtitle-l1 knowledge__title">Conhecimentos</h3>
    </section>
  );
};

export default Knowledge;
