import "./mobile-menu.scss";

const MobileMenuIcon = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="mobile-menu">
        <div className="mobile-menu__top-line"  />
        <div className="mobile-menu__middle-line"  />
        <div className="mobile-menu__bottom-line"  />
      </button>
    </>
  );
};

export default MobileMenuIcon;
