import React, { useState } from 'react';
import { Link } from "gatsby"

const Header = ({ shouldRenderTitle }) => {
  const [isNavCollapsed, toggleNav] = useState(true);
  const currentPath = window.location.pathname;
  const directory = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]
  return (
    <header className="header">
      <nav className="navbar navbar-custom" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              onClick={() => toggleNav(!isNavCollapsed)}
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {shouldRenderTitle && <a className="navbar-brand" href="/">Ali Haghani</a>}
          </div>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
            <ul className="nav navbar-nav navbar-right">
              {directory.map(({ name, path }) => {
                const isPathActive = path === currentPath;
                return (
                  <li className={isPathActive ? 'active' : ''}>
                    <Link to={path}>{name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
