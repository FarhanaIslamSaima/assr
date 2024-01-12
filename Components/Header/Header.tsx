'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import MenuOverLay from './MenuOverLay';
import { link } from 'fs';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

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
  
const Header = () => {
  const [open,setOpen]=useState(false)
  const [active,setActive]=useState(1);
    const toogle=()=>{
        const navClass=document.querySelector('.nav-links');
        navClass?.classList.toggle('top-[9%]')

    }
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        
            
        <nav className="absolute mx-auto top-0 left-0 right-0 z-10 bg-opacity-100  ">
        <div className="flex container  flex-wrap items-center justify-between mx-auto px-4 py-1">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <h1 className="text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                <img src="/logo.png" width={'110px'} height={'110px'}/>
              </span>
            </h1>
          </Link>
  
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-1 border  rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
               <GiHamburgerMenu/>
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <ImCross/>
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto " id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">

              {/* <li className='z-10 text-white relative'>
                <button onClick={()=>{setOpen(!open)}}>Events</button>
                <div className={`${open?'show':'hidden'} absolute top-10` }>
                  <ul>
                    <li>2017</li>
                    <li>2018</li>
                    <li>2019</li>
                  </ul>
                </div>
              </li> */}
              {navLinks.map((link, index) => (
                <li key={index} onClick={()=>{setActive(link.id)}} >
                 

                  <NavLinks link={link} active={active} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverLay  /> : null}
      </nav>
  


    );
};

export default Header;