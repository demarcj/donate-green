import React from "react";
import { Link } from "react-router-dom";
import nav from "styles/nav.module.css";

export const NavBar: React.FC = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.nav_list}>
        <li className={nav.nav_item}>
          <Link to={`/home`} className={nav.nav_text}>Home</Link>
        </li>
        <li className={nav.nav_item}>
          <Link to={`/activities`} className={nav.nav_text}>Activities</Link>
        </li>
        <li className={nav.nav_item}>
          <Link to={`/profile`} className={nav.nav_text}>Profile</Link>
        </li>
      </ul>
    </nav>
  )
}