import "./input.scss";
// import { v4 as uuidv4 } from "uuid";

const Input = ({
  type,
  title,
  required = false,
  className = "",
  name,
  onChange,
  value,
  ...moreOptions
}) => {
  const capitalize = (text) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
  };

  title = title.toLowerCase();
  const titleId = title.replaceAll(" ", "");

  return (
    <div className={`${className} inputlabel`}>
      <label htmlFor={titleId} className={`${value ? "shrink" : ""}`}>
        {capitalize(title)}
      </label>
      <input
        type={type}
        id={titleId}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        {...moreOptions}
      />
    </div>
  );
};

export default Input;
