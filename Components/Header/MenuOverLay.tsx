import React from 'react';
import NavLinks from './NavLinks';
interface prop{
    path:string,
   title:string
}
interface props{
    link:prop
}
const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

const MenuOverLay = () => {
    return (
        <ul className="flex xs:bg-black  bg-black flex-col py-4 items-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLinks link={link} />
          </li>
        ))}
      </ul>
    );
};

export default MenuOverLay;