import { FaFacebookF, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

interface panelProps{
  id:number,
//   imgUrl:string,
  name:string,
  dept:string,
  post:string,
  phone:string,
  email:string,
  facebook: string,
  linkedin:string,
  portfolio: string,

}

interface props{
  item:panelProps
}


const AdvisorCards = ({item}:props) => {
  if(item.email) {
    const mailLink = item.email
  }
  return (
    <div className=" 
      ">
      <div
        className="
w-full max-w-lg   rounded-lg shadow
bg-gray-900 border-gray-700 h-[450] card-border-effect"
      >
        <div className="px-4 pt-4">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://source.unsplash.com/3tYZjGSBwbk"
              alt="Bonnie image"
            />
            <h5 className="mb-5 text-xl font-medium text-white">
              {item.name}
            </h5>
            <span className="text-sm text-gray-400">{item.post}</span>
            <p className="text-sm text-center text-gray-400">Dept of {item.dept}</p>
            <span className="text-sm text-center text-gray-400">
              Rajshahi University of Engineering & Technology
            </span>
            <div className="w-[80%] justify-between flex mt-4 md:mt-6">
              <div className="socialAnimation hover:animate-spin-slow">
                <Link
                  href={item.email?`mailto:${item.email}`:"#"} target='_blank'
                  className="inline-flex items-center px-2 
                          py-2 md:text-2xl	font-medium text-center text-xl
                          socialButton animate-spin-slow
                        "
                >
                  <SiGmail />
                </Link>
              </div>

              <div className="socialAnimation hover:animate-spin-slow">
                <Link
                  href={item.linkedin? item.linkedin:"#"}
                  className="inline-flex items-center px-2 
                          py-2 md:text-2xl	font-medium text-center text-xl
                          socialButton 
                           "
                >
                  <FaLinkedinIn />
                </Link>
              </div>

              <div className="socialAnimation hover:animate-spin-slow">
                <Link
                  href={item.facebook? item.facebook:"#"}
                  className="inline-flex items-center px-2 
                          py-2 md:text-2xl	font-medium text-center text-xl
                          socialButton
                           "
                >
                  <FaFacebookF />
                </Link>
              </div>

              <div className="socialAnimation hover:animate-spin-slow">
                <Link
                  href={item.portfolio? item.portfolio:"#"}
                  className="inline-flex items-center px-2 
                          py-2 md:text-2xl	font-medium text-center text-xl
                          socialButton
                           "
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
            <div className="text-gray-50 my-5 text-sm">
              <span
                className="inline-flex items-center px-2 justify-between 
          py-2 md:text-md	font-medium text-center text-s
         text-orange-200
           "
              >
                <FaPhoneAlt />{" "}
                <span className="ml-2">
                  :<span className="text-xs ml-2">{item.phone}</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorCards;
