import { urlFor } from "../../utils/sanityClient";

const Icon = ({ src, alt, className = null, linkRef = "#/" }) => {
  return (
    <a href={linkRef}>
      <img src={urlFor(src)} alt={alt} className={className} />
    </a>
  );
};

export default Icon;
