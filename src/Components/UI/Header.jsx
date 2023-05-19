import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <span className="bi bi-instagram m-2"></span>
            <span className="bi bi-linkedin m-2"></span>
            <span className="bi bi-facebook m-2"></span>
            <span className="bi bi-twitter m-2"></span>
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
         
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >       
            <ul className="navbar-nav mb-2 mb-lg-0  ">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-white" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-white" href="#">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className="nav-link text-white" href="#">
                  Service
                </NavLink>
              </li>

   <li type="button" className="btn btn-primary mx-2" style={{width: "8rem"}} onClick={loginHandler}>Log In</li>
        
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
