'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import MenuOverLay from './MenuOverLay';
import { link } from 'fs';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

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
      path: "#",
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
  const [navbar, setNavbar] = useState(false);
  
  const cat=['Politics','Education','Agriculture','Sports']
  const [open,setOpen]=useState(false)
  const [active,setActive]=useState(1);
    const toogle=()=>{
        const navClass=document.querySelector('.nav-links');
        navClass?.classList.toggle('top-[9%]')

    }
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        
      <nav className={`absolute mx-auto top-0 left-0 right-0 z-10 bg-opacity-100  text-white ${navbar?'bg-black':'bg-transparent'} `}>
      
      <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
        <div>
          <div className="flex items-center justify-between  md:py-0 md:block">
            <Link href="/">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                <img src="/logo.png" width={'100px'} height={'100px'}/>
              </span>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            } `}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {
                navLinks.map((item=>(
                  <Link href={item.path} ><li className='my-3 px-2 py-2 hover:border-b-[5px] border-blue'>
                    {item.year?<div className='group'>
                      <button className={'flex justify items-center'}onClick={()=>setOpen(!open)}>{item.title}<span><IoIosArrowDown/></span></button>
                      <div className={`hidden group-hover:block transition-all duration-6000 ease-in-out xl:absolute top-19.5 bg-white rounded rounded-5 z-10   px-[20px] py-[10px]`}>
                
                <ul className='transition-all duration-300 ease-in-out'>
                  {
                    item.year.map((item)=>(
                      <Link 
                      href={{
                        pathname: "/Events",
                        query: { year: `${item}` },
                      }}
                      
                      ><li onClick={()=>setOpen(false)}className="text-black my-2 hover:bg-gray-500 hover:text-white pr-5 pl-2">{item}</li></Link>

                    ))
                  }


                </ul>
              </div>
                    
                    </div>
                    :item.title}
                  </li></Link>
                )))
              }
              {/* <li className="hover:text-blue-600">
                <Link href="">Home</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link href="">Blog</Link>
              </li>
              <li>
              <button className={'flex justify items-center'}onClick={()=>setOpen(!open)}>News<span><IoIosArrowDown/></span></button>
                <div className={`${open?'block':'hidden'} xl:absolute top-19.5 bg-white rounded rounded-5 z-10   px-[20px] py-[10px]`}>
                
                  <ul >
                    {
                      cat.map((item)=>(
                        <Link href={`/news/${item}`}><li onClick={()=>setOpen(false)}className="text-black my-2 hover:bg-gray-500 hover:text-white pr-5 pl-2">{item}</li></Link>

                      ))
                    }


                  </ul>
                </div>
              </li>
              <li className="hover:text-blue-600">
                <Link href="about">About US</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link href="/contact">Contact US</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
   
  


    );
};

export default Header;