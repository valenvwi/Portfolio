import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-3">
      <div className="container-fluid">
        <span className="navbar-brand logo-font">
          <Link to="/" className="nav-link mx-3">
            Wai Ian
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleNavDropdown"
          aria-controls="navbarToggleNavDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggleNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-3">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link mx-3">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
