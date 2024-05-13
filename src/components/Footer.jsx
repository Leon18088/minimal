import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../image/logooq.png";
import twitter from "../image/twitter.png";
import linked from "../image/linkedin.png";
import github from "../image/github.png";
import "../style/footer.css";
function Footer() {
  const location = useLocation()
  return (
    <footer className="footer">
      <div className="container">
        <div className={location.pathname === "/contact" ? "none__db77" :"footer__top"}>
          <h4>Interested in doing a project together?</h4>
          <span></span>
          <NavLink to="/contact">
            <button>CONTACT ME</button>
          </NavLink>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footerBottom__card">
            <div className="fotBot__cards">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
              <nav>
                <ul className="footer__nav">
                  <NavLink to="/">
                    <li>HOME</li>
                  </NavLink>
                  <NavLink to="/index">
                    <li>PORTOFOLIO</li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li>CONTACT ME</li>
                  </NavLink>
                </ul>
              </nav>
            </div>
            <div className="footer__item">
              <img src={github} alt="" />
              <img src={twitter} alt="" />
              <img src={linked} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
