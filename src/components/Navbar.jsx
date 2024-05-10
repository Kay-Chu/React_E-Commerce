import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle the state to true/false
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top mb-2"
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <div className="container d-flex justify-content-between">
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
            <img src="/assets/logo.png" alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  BOOKSTORE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {isLoggedIn ? (
                <>
                  <button className="btn" onClick={toggleLogin}>
                    <NavLink
                      to="/userInfo"
                      className="btn btn-outline-secondary m-2 rounded-circle"
                    >
                      <i className="fas fa-user"></i>
                    </NavLink>
                  </button>
                  <button className="btn" onClick={toggleLogin}>
                    <NavLink
                      to="/login"
                      className="btn btn-outline-secondary m-2 rounded-circle"
                    >
                      <i className="fas fa-right-from-bracket"></i>
                    </NavLink>
                  </button>
                </>
              ) : (
                <>
                  <button className="btn" onClick={toggleLogin}>
                    <NavLink
                      to="#"
                      className="btn btn-outline-secondary m-2 rounded-circle"
                    >
                      <i className="fas fa-user"></i>
                    </NavLink>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <Breadcrumb />
          </div>
          <div className="col d-flex justify-content-end">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
