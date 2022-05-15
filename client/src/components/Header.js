import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import "../index.css"

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <div className="container flex-row justify-space-between-xs justify-center align-center">
        <div>
          <Link className="text" to="/">
            <h1 className="m-5 title">LARPY</h1>
          </Link>
  
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="button m-4" to="/login">
                LOG IN
              </Link>
              <Link className="button m-4" to="/signup">
                SIGN UP
              </Link>
              <Link className="button_about m-4" to="/signup">
                About
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
