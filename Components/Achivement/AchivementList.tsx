'use client'
import React, { useEffect, useState } from "react";
import { developers, insights } from "@/Constants";

import ContactForm from "@/Components/ContactForm";
import DevCards from "../DevCards";
import AchCards from "../AchCards";
import AchivementCard from "./AchivementCard";

const AchivementList = () => {
    const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const getAll=async()=>{
        const query=await fetch('api/achievements');
        const data=await query.json();
       setPosts(data);
        

    }
    getAll();
},[])
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-[5%]"
    >
      {posts.map((item, index) => (
        <div className="w-400 ">
          <AchivementCard key={index} item={item} />
        </div>
      ))}
    </div>
  );
};

export default AchivementList;
