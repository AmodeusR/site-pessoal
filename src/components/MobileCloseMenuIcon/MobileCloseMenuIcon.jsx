import "./close-menu.scss";

const MobileCloseMenuIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="close-menu">
      <div className="line line-1" />
      <div className="line line-2" />
    </button>
  );
};

export default MobileCloseMenuIcon;
