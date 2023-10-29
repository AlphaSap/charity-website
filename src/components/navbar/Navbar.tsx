import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <span className="navbar-logo-container">
        <img className="navbar-logo-img" src="logo.svg" />
        <p className="navbar-logo-write navbar-logo-write-dholar">Dholar </p>
        <p className="navbar-logo-write navbar-logo-write-community">Community</p>
      </span>
      <span className="navbar-link-container">
        <a className="navbar-item" href="#">
          Home
        </a>
        <a className="navbar-item" href="#">
          About
        </a>
        <a className="navbar-item" href="#">
          Contact us
        </a>
      </span>
    </div>
  );
}

export default Navbar;
