'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/Components/Header/Header';
import DetailsBlog from '@/Components/Blogs/DetailsBlog';
import { insights } from '@/Constants';
import Particle from '@/Components/Particle';
import { useSearchParams } from 'next/navigation';
import { GetServerSideProps,InferGetServerSidePropsType } from 'next';
import AchievementDetails from '@/Components/Achivement/AchievementDetails';




  async function getData(){
    const param=new URLSearchParams(useSearchParams());
    const id=param.get('id');
    // Fetch data from external API
    const res=await fetch(`https://assr-6kka-t1lt8pfue-farhanaislams-projects.vercel.app/api/blogs/${id}`)

  
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return  res.json()
  }




const page = async( ) => {
   const item=await getData();
  
    return (
        <div className="bg-gradient-to-r from-black to-deep_blue">
        
     <AchievementDetails item={item}/>
    </div>
    );
};

export default page;