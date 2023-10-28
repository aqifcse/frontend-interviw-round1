import { BUILDNOWLOG } from "./Logo";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-left">
        <span>{BUILDNOWLOG()}</span>
      </div>
      <div className="header-container-right">
        Welcome to the Frontend Developer Interview!
      </div>
    </div>
  );
};

export default Header;
