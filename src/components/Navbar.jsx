export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-3">
      <div className="container-fluid">
        <span className="navbar-brand">
          <a className="nav-link mx-3" href="#top">
            Wai Ian
          </a>
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
              <a className="nav-link mx-3" href="#aboutMe">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
