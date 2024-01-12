'use client'
import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from 'framer-motion';
import Link from 'next/link';
interface prop{
  id:Number,
    path:string,
   title:string,
   year?:number[]
}
interface props{
    active:number
    link:prop
}

const NavLinks = ({link,active}:props) => {
  const [open,setOpen]=useState(false)
  console.log(active)
    return (
      <div className='group'>
        <Link
      href={link.path}
      id="dropdownDividerButton"
      data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
      className={`${link.year?'relative':'block'} py-2 pl-3 pr-4 text-white  sm:text-xl rounded md:p-0 hover:text-red-700 ${active==link.id?' border-b-[5px] border-white':''}`}
    >
     
    <button className='group flex justify-center items-center'>{link.title}{link.year?<IoMdArrowDropdown className={'font-xl'}/>:''}</button>
 

     
    </Link>
    {link.year?
   <div id="dropdown-menu" className={`hidden group-hover:block absolute top-19 bg-white divide-y divide-gray-100 py-5 rounded-lg shadow w-30 dark:bg-gray-700 dark:divide-gray-600 flex items-center justify-center`}>
    <ul className='flex items-center justify-center flex-col'>
      {
        link.year.map((item)=>(
          <Link 
          href={{
            pathname: "/Events",
            query: { year: `${item}` },
          }}
          
          ><li className='hover:bg-blue px-10 py-2'>{item} Events</li></Link>
        ))
      }
    </ul>
    
</div>:''

  
  }
    </div>
    );
};

export default NavLinks;