'use client'
import Image from "next/image";
import { useCallback } from "react";

import { BsRocket } from "react-icons/bs";
// import Activities from "@/Components/Activities";
import Particle from "@/Components/Particle";
import { motion } from "framer-motion";
import Homes from "@/Components/Home";
// import Blogs from "@/Components/Blogs";
// import Motto from "@/Components/Motto";
// import Achievement from "@/Components/Achivement/Achievement";
// import ExecutiveMember from "@/Components/ExecutiveMember";
import dynamic from 'next/dynamic';
import { useState,useEffect } from "react";
const Banner=dynamic(()=>
import("@/Components/Banner")

)
const Motto=dynamic(()=>import("@/Components/Motto"))
const Achievement=dynamic(()=>import("@/Components/Achivement/Achievement"))
const Activities=dynamic(()=>import("@/Components/Activities"))
const Blogs=dynamic(()=>import("@/Components/Blogs"))
const ExecutiveMember=dynamic(()=>import("@/Components/ExecutiveMember"))
import { useScroll,useAnimationControls,Variants } from "framer-motion";

export default function Home() {
const [scroll,setScroll]=useState(false);
console.log(scroll)
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
      setScroll(true);
    }
    else{
      setScroll(false)
    }
  })

},[])
 
  
const scrollTo=()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

  
  
 
  return (
    <div className="bg-gradient-to-r from-black to-deep_blue ">
      {
        scroll&&
        <button style={{
          position:"fixed",
          bottom:"50px",
          right:"35px",
          height:"50px",
          width:"50px",
          zIndex:10,
          fontSize:"15px"

        }} onClick={scrollTo}> <BsRocket className='text-6xl text-white' /></button>
      }
       

      
      
      <Banner/>
      <Motto/>
    

      <Activities />
      <Blogs />
    
      <ExecutiveMember/>
      <Achievement/>
    </div>
  );
}
