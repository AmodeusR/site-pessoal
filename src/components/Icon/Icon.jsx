import { urlFor } from "../../utils/sanityClient";

const Icon = ({ src, alt, className = "" }) => {
  return <img src={urlFor(src)} alt={alt} className={className} />;
};

export default Icon;
