'use client'
import { useState } from 'react';
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
  { id:1,
    title: "Home",
    path: "/",
  },
    { id:2,
      title: "About",
      path: "#motto",
    },
    { id:3,
      title: "Events",
      path: "/Events",
      year:[2017,2018,2019,2020,2021,2022,2023]
    },
    
    { id:4,
      title: "Blogs",
      path: "/Blogs",
    },
    { id:5,
      title: "Executives",
      path: "/panel",
    },
    { id:6,
      title: "Developers",
      path: "/devs",
    },
    { id:7,
      title: "Contact",
      path: "#footer",
    },
  ];

const MenuOverLay = () => {
  const [active,setActive]=useState(1);
    return (
        <ul className="flex xs:bg-black  bg-black flex-col py-4 items-center">
        {navLinks.map((link, index) => (
          <li key={index} className='group'>
            <NavLinks link={link} active={active}  />
          </li>
        ))}
      </ul>
    );
};

export default MenuOverLay;