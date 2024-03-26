import "./Header.css";
import MainButton from "../../components/Button/MainButton/MainButton";

function Header() {
  return (
    <div className="header-hero">
      <div className="header-hero-content">
        <div className="header-text">
          <h1>Generate a team of 10 individuals for a custom fun match!</h1>
        </div>
        <div className="header-sub-text">
          <p>
            Gather your 10 best friends or more and let's create your team
            randomly right here! Then, let's have a blast together with the team
            selected by our website!
          </p>
        </div>
        <a href="#generate">
          <MainButton value="Try Now" />
        </a>
      </div>
    </div>
  );
}

export default Header;
