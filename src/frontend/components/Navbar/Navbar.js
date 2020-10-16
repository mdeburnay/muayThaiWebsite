import React, { Component } from "react";
import logo from "../../../images/muayThaiLogo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

export default class Navbar extends Component {
  state = { isOpen: false };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} className="main-logo" alt="Yokkao Logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/yokkao">Yokkao Fights</Link>
            </li>
            <li>
              <Link to="/oneFC">ONE FC Fights</Link>
            </li>
            <li>
              <Link to="/maxMuayThai">MAX Muay Thai Fights</Link>
            </li>
            <li>
              <Link to="/muayTies">Muay Ties Fights</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
