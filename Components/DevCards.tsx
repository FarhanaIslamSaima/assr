import { FaFacebookF, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";


interface blogProps{
    id:number,
    imgUrl:string,
    name:string,
    dept:string,
    roll:string,
    qoutes:string,
}

interface props{
    item:blogProps
}




const DevCards = ({item}:props) => {
  return (
    <div className="border border-slate-700 border-solid-1 mb-5">
      <div
        className="
  rounded-lg shadow
bg-gray-900 border-gray-50"
      >
        <div className="px-4 pt-4">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-40 h-40 mb-3 rounded-full shadow-lg"
              src={item.imgUrl}
              alt="Bonnie image"
            />
            <h5 className="mb-5 text-xl font-medium text-white">
              {item.name}
            </h5>
            <p className="text-sm text-center text-gray-400">{item.dept}</p>
            <p className="text-sm text-center text-gray-400">Roll: {item.roll}</p>
            <span className="text-sm text-center text-gray-400">
              Rajshahi University of Engineering & Technology
            </span>

           
            <blockquote className=" p-4 my-4 border-s-4 rounded-lg shadow border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            {item.qoutes}
          </p>
        </blockquote>


        <div className="w-full flex justify-center mt-4 md:mt-6 border-t rounded-lg border-slate-800">
              <Link
                href="#"
                className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-xl
          text-gray-100
           "
              >
                <SiGmail />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-xl
         text-gray-100
           "
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-xl
         text-gray-100
           "
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center px-4 
          py-2 md:text-2xl	font-medium text-center text-xl
         text-gray-100
           "
              >
                <FaGlobe />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default DevCards;
