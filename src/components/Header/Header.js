import React from "react";
import logo from "../../instagram 22.jpg";
import search_icon from "../../assest/149852.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="nav_bar">
        <section className="logo">
          <img src={logo} alt="logoimage" />
        </section>
        <section className="search_bar">
          <img src={search_icon} alt="search_icon" className="search_icon" />
          <input type="text" placeholder="Search" className="input_box" />
        </section>
        <section className="login">
          <button className="btn">Log In</button>
          <button className="sign_btn">Sign Up</button>
        </section>
      </div>
    </>
  );
}

export default Header;
