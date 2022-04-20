import "./close-menu.scss";

const MobileCloseMenuIcon = ({ onClick, ...MoreOpts }) => {
  return (
    <button onClick={onClick} className="close-menu" {...MoreOpts}>
      <div className="line line-1" />
      <div className="line line-2" />
    </button>
  );
};

export default MobileCloseMenuIcon;
