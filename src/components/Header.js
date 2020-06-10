import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ paths }) => {

  const createLinks = (
    <ul>
      {
        paths.map((item, key) => 
          <li key={key}>
            <NavLink to={item.layout + item.path} key={key}>{item.name}</NavLink>
          </li>
        )
      }
    </ul>
  )

  return (
    <>
      {createLinks}
    </>
  )
};

export default Header;
