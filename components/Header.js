import React from "react";

function Header({ header }) {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="#home">
            <span>{header.title}</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                {header.menu.map((menu) => (
                  <li className="nav-item">
                    <a className="nav-link" href={menu.link}>
                      {menu.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
