import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import nav from "styles/nav.module.css";
import growth from "images/growth.png";
import home from "images/home.png";
import person from "images/person.png";
import growth_active from "images/growth_active.png";
import home_active from "images/home_active.png";
import person_active from "images/person_active.png";

export const NavBar: React.FC = () => {
  const [path, set_path] = useState(`home`);

  const get_path = (active: string) => {
    set_path(active);
  }

  const switcher = {
    "true": (pathname: string) => {
      get_path(pathname);
      return [nav.nav_text, nav.active].join(" ");
    },
    "false": () => nav.nav_text
  };

  return (
    <nav className={nav.nav}>
      <ul className={nav.nav_list}>
        <li className={nav.nav_item}>
          <NavLink 
            to={`/home`} 
            className={({ isActive }) =>{
                const active = isActive ? `true` : `false`;
                return switcher[active](`home`);
              }
            }
          >
            <img src={path.includes(`home`) ? home_active : home} alt="" />
          </NavLink>
        </li>
        <li className={nav.nav_item}>
          <NavLink 
            to={`/activities`} 
            className={({ isActive }) =>{
                const active = isActive ? `true` : `false`;
                return switcher[active](`activities`);
              }
            }
          >
            <img src={path.includes(`activities`) ? growth_active : growth} alt="" />
          </NavLink>
        </li>
        <li className={nav.nav_item}>
          <NavLink 
            to={`/profile`} 
            className={({ isActive }) =>{
              const active = isActive ? `true` : `false`;
              return switcher[active](`profile`);
              }
            }
          >
            <img src={path.includes(`profile`) ? person_active : person} alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}