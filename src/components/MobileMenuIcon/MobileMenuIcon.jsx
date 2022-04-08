import "./mobile-menu.scss";

const MobileMenuIcon = () => {
  return (
    <>
      <div className="mobile-menu" data-type="mobile-menu">
        <div className="mobile-menu__top-line" data-type="mobile-menu" />
        <div className="mobile-menu__middle-line" data-type="mobile-menu" />
        <div className="mobile-menu__bottom-line" data-type="mobile-menu" />
      </div>
    </>
  );
};

export default MobileMenuIcon;
