import "./close-menu.scss";

const MobileCloseMenuIcon = ({ onClick, className = null }) => {
  return (
    <button
      onClick={onClick}
      className={`close-menu ${className}`}
      style={{ padding: ".7rem" }}
    >
      <div className="line line-1" />
      <div className="line line-2" />
    </button>
  );
};

export default MobileCloseMenuIcon;
