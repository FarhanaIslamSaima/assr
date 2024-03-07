'use client'
import React,{useEffect,useState} from 'react';
import { insights } from '@/Constants';
import Link from 'next/link';
import AchivementCard from './AchivementCard';


const Achievement = () => {
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
        <>
        <div className='mt-[20]'>
            <div className='flex flex-col items-center'>
            <p className='text-white mb-20 font-bold mt-[50px] text-4xl md:text-4xl'>Achievements</p>
            </div>
           
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 mx-[10%]'>
                {
                    posts.slice(0,4).map((item,index)=>(

                        <div>
                            <AchivementCard  key={index}item={item} />
                        </div>

                    ))
                }

            </div>
            <div className='flex justify-end w-full pr-20'>
            <Link href={"/achievements"}>
            <button  className='mt-5 text-white border-2 border-white p-2 rounded rounded-2'>READ MORE</button>
            </Link>
            </div>
           
        </div>
        <div className=" mx-[200px] mt-[30px]"><hr/></div>
        </> 
    );
};


export default Achievement;