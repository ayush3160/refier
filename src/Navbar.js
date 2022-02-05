import React from "react";

export default function Navbar(props) {
  return (
    <div className="nav" id = "nav">
      <ul>
        <li className="refier">
          <a
            style={{ color: "rgba(25, 4, 100, 0.555)", fontSize: "40px" }}
            href="#"
          >
            ReFier
          </a>
        </li>
        <li className="contact">
          <a href="#">Contact Us</a>
        </li>
        <li className="other">
          <button
            className="dropmenu"
            onClick={() => {
              document.getElementById("dropdown").classList.toggle("show");
            }}
          >
            MarketPlace
            <img
              src="./60995.png"
              style={{ width: "10px", paddingLeft: "5px" }}
            />
          </button>
          <ul className="dropdown" id="dropdown">
            <li>
              <a href="#">MarketPlace</a>
            </li>
            <li>
              <a href="#">Cohort</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Webinar</a>
            </li>
          </ul>
        </li>
        <li className="other">
          <a href="#">Jobs</a>
        </li>
        <li className="btn">
          <button
            className="login"
            onClick={() => {
              props.handleShow(1);
            }}
          >
            LogIn
          </button>
        </li>
        <li className="btn">
          <button className="register">Register</button>
        </li>
      </ul>
      <button
        className="icon"
        onclick={() => {
          var x = document.getElementById("nav");
          if (x.className === "nav") {
            x.className += " responsive";
          } else {
            x.className = "nav";
          }
        }}
      >
        Others
      </button>
    </div>
  );
}
