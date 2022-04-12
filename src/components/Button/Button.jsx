import "./button.scss";

import { assets } from "../../constants";

const { DownloadIcon, ArrowIcon } = assets;

const Button = ({ title, className = "", type, ...options }) => {
  const iconToRender = getIconToRender(type);


  console.log(!!iconToRender);
  
  return (
    <button className={`button ${className}`} type="button" {...options}>
      {type ? iconToRender : ""}
      {title}
    </button>
  );
};


export default Button;

function getIconToRender(type) {
  let iconToRender;

  switch(type) {
  case "download":
    iconToRender = <DownloadIcon />;
    break;
  
  case "arrow":
    iconToRender = <ArrowIcon />;
    break;
  
  default:
    iconToRender = null;
  }

  return iconToRender;
}