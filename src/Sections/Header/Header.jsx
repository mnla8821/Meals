import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid parent">
          <a className="navbar-brand" href="#">
            MixMaster
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>
              <NavLink to="/About" className="nav-item">
                Features
              </NavLink>
              <NavLink to="/Newsletter" className="nav-item">
                NewsLetters
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
