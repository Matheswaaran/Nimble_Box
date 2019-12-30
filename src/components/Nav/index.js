import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaSoundcloud } from "react-icons/fa";
import { AiOutlineDollar, AiOutlineProject } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi"
import "./index.css";

const Nav = (props) => {
  return(
    <nav className="nav-container">
      <div className="nav-group">
        <NavLink className="nav-item" activeClassName="nav-item-active" to="/dashboard">
          <FaSoundcloud className="font-32" />
        </NavLink>
        <NavLink className="nav-item" activeClassName="nav-item-active" to="/account">
          <FaRegUserCircle className="font-32" />
          <span>Accounts</span>
        </NavLink>
        <NavLink className="nav-item" activeClassName="nav-item-active" to="/projects">
          <AiOutlineProject className="font-32" />
          <span>Projects</span>
        </NavLink>
      </div>
      <div className="nav-group">
        <NavLink className="nav-item" activeClassName="nav-item-active" to="/billing">
          <AiOutlineDollar className="font-32" />
          <span>Billing</span>
        </NavLink>
        <NavLink className="nav-item" activeClassName="nav-item-active" to="/faqs">
          <FiMessageSquare className="font-32" />
          <span>FAQ</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
