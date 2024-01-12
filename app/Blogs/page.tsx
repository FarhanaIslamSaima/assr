"use client"
import React, { useState,useEffect } from 'react';
import BlogsCard from '@/Components/BlogsCard';
import Link from 'next/link';
import { insights } from '@/Constants';
import { getData } from '@/api';
import PaginationControl from '@/Components/Blogs/PaginationControl';

const page = ({searchParams}:{searchParams:{[key:string]:string|string[]|undefined}}) => {
        const [post,setPost]=useState([]);
    useEffect(()=>{
        const getAll=async()=>{
            const data=await getData();
           setPost(data);
            

        }
        getAll();
    },[])
        
    const pages=searchParams['page']??1;
    const per_page=searchParams['per_page']??5;
    const start=(Number(pages)-1)*Number(per_page);
    const end=start+Number(per_page);


    return (
        <div className="bg-gradient-to-r from-black to-deep_blue">
             <div className='text-white flex flex-col gap-10 justify-center items-center'>
            <div className='flex flex-col items-center justify-center'>
        
            </div>
           
            <div className='my-[120px]'>
                {
                    post.slice(start,end).map((item,index)=>(
                        <BlogsCard  key={index} item={item} />
                    ))
                }
                

            </div>
            <PaginationControl
            hasNext={end<post.length}
            hasPrev={start>0}
            
            />
            
            
        </div> 
        </div>
    );
};

export default page;