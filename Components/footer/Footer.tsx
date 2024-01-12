import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineAddLocation } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='h-[200px] bg-black text-white p-2 flex items-center justify-center  w-full' id='footer'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
               <div className='flex flex-col items-center justify-center'>
                <div className='w-[70px] h-[70px]'>
                <img src='/logo.png' width={100} height={100} />
                </div>
              
                
                

                <div className='flex text-2xl gap-2'>
               <Link href={'https://www.linkedin.com/company/ruet-assr'}><CiLinkedin/></Link>
                
              <Link href={'https://www.facebook.com/ruet.assr'}><FaFacebookSquare/></Link> 
               <Link href={'https://www.youtube.com/@ruet_assr'}><FaYoutubeSquare/></Link>
               <Link href={'https://www.instagram.com/ruet.assr'}><FaInstagram/></Link>
                </div>
               </div>

        
           
            <div>
                <p className='font-bold '>ADDRESS</p>
                <hr/>
                <ul className='text-sm mb-2'>
                    <li ><p className='flex items-center gap-1'><FaRegBuilding/>Rajshahi University of Engineering & Technology</p></li>
                    <li>	<p className='flex items-center gap-1'><MdOutlineAddLocation/>Rajshahi-6204, Bangladesh</p></li>
                    <li><p className='flex items-center gap-1'><MdOutlineMail/>assrofruet@gmail.com</p></li>
                </ul>
            </div>
            </div>
            <p></p>
          
        </div>
    );
};

export default Footer;