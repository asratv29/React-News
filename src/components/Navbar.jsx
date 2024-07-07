import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg  w-100">
      <div className="container">
        <a className="navbar-brand" href="#">
          <span className="badge bg-dark fs-3">Latest News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                onClick={() => setCategory("business")}
                className="nav-link active"
                aria-current="page"
              >
                business
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCategory("entertainment")}
                className="nav-link"
              >
                entertainment
              </div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory("health")} className="nav-link">
                health
              </div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory("science")} className="nav-link">
                science
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCategory("technology")}
                className="nav-link"
              >
                technology
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Other
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
