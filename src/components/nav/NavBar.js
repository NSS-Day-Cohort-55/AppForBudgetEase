import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar text-white flex-md-nowrap p-0 shadow">

      <img className="logo" src="../images/coinJar.jpg" alt="logo"/>

      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/friends">
            Income 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">
           Expense
          </Link>
       
        </li>
      </ul>
    </nav>
  );
};