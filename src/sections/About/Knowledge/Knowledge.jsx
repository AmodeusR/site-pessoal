// import { useState, useEffect } from "react";
// import { urlFor, client } from "../../../utils/sanityClient";

const Knowledge = () => {
  // const [techs, setTechs] = useState([]);
  // useEffect(() => {
  //   const query = "*[_type == 'techs']";
  //   const fetchData = async () => {
  //     try {
  //       const data = await client.fetch(query);
  //       console.log(data);
  //       setTechs(data);
        
  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const data = [
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}
  ];

  return (
    <section className="knowledge inner-container">
      <h3 className="section-subtitle-l1">Conhecimentos</h3>
      <div className="knowledge__container">
        <div className="knowledge__techs-container">
          <h4 className="section-subtitle-l2">Tecnologias</h4>
          <div className="knowledge__techs-list">
            {data.map((item, i) => (
              <img src={item.image} alt="teste" key={i} />
            ))}
          </div>
        </div>
        <div className="knowledge__apps-container">
          <h4 className="section-subtitle-l2">Programas</h4>
          <div className="knowledge__apps-list">
            {data.map((item, i) => (
              <img src={item.image} alt="teste" key={i} />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
