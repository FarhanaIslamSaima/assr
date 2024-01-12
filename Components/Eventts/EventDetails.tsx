'use client'
import React, { useEffect, useState } from 'react';
import CarouselEvent from './CarouselEvent';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useSearchParams } from 'next/navigation';
import { getEventsById } from '@/api';
const EventDetails = () => {
  const param=new URLSearchParams(useSearchParams());
  const id=param.get('id');
  const [post,setPost]=useState({
    category:'',
    desc:'',
    id:'',
    images:[],
    name:'',
    year:''

    
  });
  console.log(post);
  useEffect(()=>{
       const getAll=async()=>{
        const data=await getEventsById(id);
        setPost(data);

       }
       getAll();
  },[])
    return (
        <div>
        <div className='text-white flex flex-col gap-10 justify-center'>
       <div className='flex flex-col items-center'>
   
       </div>
      
       <div className='my-10'>
         <CarouselEvent images={post.images}/>
         <div className='flex items-center justify-center px-7 flex-col'>
            <p className='font-bold text-xl my-2'>{post&&post.name}</p>
            <p className='text-justify'>
            {post&&post.desc}
         </p>
         </div>

       </div>
       
   </div> 
   </div>
   
       
    
    );
};

export default EventDetails;