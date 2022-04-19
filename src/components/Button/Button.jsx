import "./button.scss";

import { assets } from "../../constants";

const { DownloadIcon, ArrowIcon } = assets;

const Button = ({
  title,
  className = "",
  icon,
  disabled = false,
  ...options
}) => {
  const iconToRender = getIconToRender(icon);

  return (
    <button
      className={`button ${className} ${disabled ? "button--disabled" : ""}`}
      tabIndex={disabled ? -1 : 0}
      type="button"
      {...options}
    >
      {icon ? iconToRender : ""}
      {title}
    </button>
  );
};

export default Button;

function getIconToRender(type) {
  let iconToRender;

  switch (type) {
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
