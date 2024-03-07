'use client'
import React,{useEffect,useState} from 'react';
import BlogsCard from './BlogsCard';
import { insights } from '@/Constants';
import { getData } from '@/api';
import Link from 'next/link';


const Blogs = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const getAll=async()=>{
            const data=await getData();
           setPosts(data);
            

        }
        getAll();
    },[])
    return (
        <>
        <div className='text-white flex flex-col gap-10 justify-center items-center mt-[20]'>
            <div className='flex flex-col items-center'>
            <p className=' font-bold mt-[50px] text-md md:text-4xl'>EXPLORE OUR BLOGS</p>
            </div>
           
            <div className=''>
                {
                    posts && posts.slice(0,3).map((item,index)=>(
                        <BlogsCard  key={index}item={item} />
                    ))
                }

            </div>
            <div className='flex justify-end w-full pr-20'>
            <Link href={"/Blogs"} shallow>
            <button  className=' border border-2 border-white p-2 rounded rounded-2'>READ MORE</button>
            </Link>
            </div>
           
        </div>
        <div className=" mx-[200px] mt-[50px]"><hr/></div>
        </> 
    );
};

export default Blogs;