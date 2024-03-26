import "./NavBar.css";
import SecondaryButton from "../Button/SecondaryButton/SecondaryButton";

function NavBar() {
  return (
    <nav className="d-flex justify-content-between">
      <div>
        <h1 className="home-logo">Fun Custom Generator</h1>
      </div>
      <div>
        <a href="https://playvalorant.com/" target="_blank" rel="noreferrer">
          <SecondaryButton value="Valorant" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
