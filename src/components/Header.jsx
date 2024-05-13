import React, { useRef, useState } from "react";
import "../style/header.css";
import logo from "../image/logoqora.png";
import { NavLink, useLocation } from "react-router-dom";
function Header() {
  let modal = useRef();
  function openModal() {
    modal.current.classList.add("show");
  }
  function closeModal() {
    modal.current.classList.remove("show");
  }

  const [buttonVisible, setButtonVisible] = useState(true);

  const handleClick = () => {
    setButtonVisible(!buttonVisible);
  };

  let location = useLocation();
  return (
    <section className="header">
      <div className="header__modal">
        <div className="header__modal2">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="burger" onClick={openModal}>
            {buttonVisible ? (
              <button className="button12" onClick={handleClick}>
                <i class="fa-solid fa-bars "></i>
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="burger2" onClick={closeModal}>
            {buttonVisible ? (
              ""
            ) : (
              <button className="button13" onClick={handleClick}>
                <i class="fa-solid fa-x "></i>
              </button>
            )}
          </div>
        </div>
        <div ref={modal} className="modal">
          <div className="modal__item">
            <NavLink to="/">
              <h4>HOME</h4>
            </NavLink>
            <NavLink to="/index">
              <h4>PORTFOLIO</h4>
            </NavLink>
            <NavLink to="/contact">
              <h4>CONTACT ME</h4>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <nav>
            <ul className="nav__link">
              <NavLink to="/" style={{ color: "#33323D" }}>
                <li
                  className={
                    location.pathname === "/" ? "nav__item" : "nav__item2"
                  }
                >
                  HOME
                </li>
              </NavLink>
              <NavLink to="/index" style={{ color: "#33323D" }}>
                <li
                  className={
                    location.pathname === "/index" ? "nav__item" : "nav__item2"
                  }
                >
                  PORTOFOLIO
                </li>
              </NavLink>
              <NavLink to="contact" style={{ color: "#33323D" }}>
                <li
                  className={
                    location.pathname === "/contact"
                      ? "nav__item"
                      : "nav__item2"
                  }
                >
                  CONTACT ME
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;
