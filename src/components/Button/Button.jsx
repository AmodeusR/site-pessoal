import "./button.scss";

import { assets } from "../../constants";

const { DownloadIcon } = assets;

const Button = ({ title, className, type, ...options }) => {
  return (
    <button className={`button ${className}`} type="button" {...options}>
      {type === "download" ? <DownloadIcon /> : ""}
      {title}
    </button>
  );
};


export default Button;
