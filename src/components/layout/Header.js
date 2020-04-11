import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i
            className="fas fa-address-card"
            style={{
              fontSize: '25px',
              paddingRight: '15px',
              color: '#17a2b8',
            }}
          />
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/contact/add">
                <i className="fas fa-plus-circle" /> Add
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/about">
                <i className="fas fa-info-circle" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: 'My App',
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
