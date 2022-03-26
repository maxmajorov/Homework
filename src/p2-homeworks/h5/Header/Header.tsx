import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../RoutesPages/RoutesPages";
import classes from "./Header.module.css";

const Header = () => {
  const [openStyle, setOpen] = useState<string>(classes.menu);

  const onMouseEnterHandler = () => {
    setOpen(`${classes.menu} ${classes.menu_active}`);
  };

  const onMouseLeaveHandler = () => {
    setOpen(`${classes.menu}`);
  };

  console.log(openStyle);

  return (
    <div
      className={openStyle}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <button className={classes.trigger}>
        <span>menu</span>
      </button>
      <nav className={classes.menu_list}>
        <NavLink
          to={PATH.PRE_JUNIOR}
          className={({ isActive }) =>
            classes.link + " " + (isActive ? classes.link_active : "")
          }
        >
          PRE-Junior
        </NavLink>
        <NavLink
          to={PATH.JUNIOR}
          className={({ isActive }) =>
            classes.link + " " + (isActive ? classes.link_active : "")
          }
        >
          Junior
        </NavLink>
        <NavLink
          to={PATH.JUNIOR_PLUS}
          className={({ isActive }) =>
            classes.link + " " + (isActive ? classes.link_active : "")
          }
        >
          Junior+
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
