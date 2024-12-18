import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/todos/all">All TODOs</NavLink>
        </li>
        <li>
          <NavLink to="/todos/completed">Completed TODOs</NavLink>
        </li>
        <li>
          <NavLink to="/todos/add">Add TODO</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
