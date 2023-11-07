import { NavLink, Navigation } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <div className='navigation'>
      <ul>
        <NavLink to='/'>
          <li>Accueil</li>
        </NavLink>
        <NavLink to='/about'>
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
