import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="footer-left col-12 col-md-6 col-sm-4 my-2">
            <h1>Shopping WEB</h1>
            <p>
              Best Trending Clothing and Products is here.
            </p>
            <div className="socialmedia">
              <a className="navbar-brand text-white" href="#">
                <span className="bi bi-instagram m-2"></span>
                <span className="bi bi-linkedin m-2"></span>
                <span className="bi bi-facebook m-2"></span>
                <span className="bi bi-twitter m-2"></span>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-sm-6">
            <div className="row">
              <div className="footer-right col-12 col-md-4 col-sm-6 my-2">
                <h3>Services</h3>

                <div className="links">
                  <span>
                    <a href="">IT Consulting</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Development</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Cloud</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Support</a>
                  </span>
                  <br />
                </div>
              </div>

              <div className="footer-right col-12 col-md-4 col-sm-6 my-2">
                <h3>Industries</h3>

                <div className="links">
                  <span>
                    <a href="">Finance</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Public Sector</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Smart Office</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Retail</a>
                  </span>
                </div>
              </div>

              <div className="footer-right col-12 col-md-4 col-sm-6 my-2">
                <h3>Company</h3>

                <div className="links">
                  <span>
                    <a href="">Sign Up</a>
                  </span>
                  <br />
                  <span>
                    <a href="">About Us</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Contact Us</a>
                  </span>
                  <br />
                  <span>
                    <a href="">Join Us</a>
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fs-2">
          <hr />
        </div>

        <div className="footer-bottom d-flex justify-content-between">
          <div>
            <p>© 2023 Shopping WEB</p>
          </div>
          <div>
            <span className="mx-2">Terms of Use</span>
            <span className="mx-2">Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
