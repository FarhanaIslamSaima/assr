import { FaFacebookF, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; 

import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

interface memberstruct{
    name:string,
    role:string
    phn:string
}
interface props{
    item:memberstruct
}
const ExecutiveMemberCard = ({item}:props) => {
    return (
<div>



<div className="
w-[300px] max-w-lg text-black border rounded-lg shadow
bg-gray-900 border-gray-700">
      

      
        <div className="px-4 pt-4">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://source.unsplash.com/3tYZjGSBwbk" alt="Bonnie image"/>
        <h5 className="mb-5 text-xl font-medium text-white dark:text-white">Deba Priyo Guha</h5>
        <span className="text-xs text-center text-red dark:text-gray-400 font-bold">{item.role}</span>
        <span className="text-xs text-white dark:text-white">Undergraduate Student</span>
        <p className="text-xs text-center text-white dark:text-gray-400">Dept of ECE</p>
        <span className="text-xs text-center text-white dark:text-gray-400">Rajshahi University of Engineering & Technology</span>
        
        <div className="flex mt-4 md:mt-6">
          
          
          <a href="#" className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-white text-xl
           dark:text-gray-100
           ">

              <SiGmail />
           </a>

           <a href="#" className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-white text-xl
          dark:text-gray-100
           ">

          
              <FaLinkedinIn />
           </a>


           <a href="#" className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-white text-xl
          dark:text-gray-100
           ">

          <FaFacebookF />
           </a>


           <a href="#" className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-white text-xl
          dark:text-gray-100
           ">

          <FaGlobe />
           </a>


         
        </div>
        <div className="text-gray-50 my-5 text-sm">
          <span className="inline-flex items-center px-4 
          py-2 md:text-md	font-medium text-center text-white text-s
          dark:text-gray-100
           "><FaPhoneAlt/> <span className="ml-2">:<span className="text-xs ml-2">880 1987543228</span></span> 
           </span>
           
           
        </div>

        </div>
      </div>
    </div>


    </div>


    );
};

export default ExecutiveMemberCard;