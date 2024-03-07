import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect,useState } from 'react';
import { getEventsYearnCat } from '@/api';
import EventByCatnYear from './EventByCatnYear';

const EventByYear = () => {
    const [post,setPost]=useState([])
    const param=new URLSearchParams(useSearchParams());
const year=param.get('year');
const cat=param.get('cat');
console.log(year);
console.log(cat);
    useEffect(()=>{
        const getAll=async()=>{
         const data=await getEventsYearnCat(year,cat);
         setPost(data)
         console.log(data);

        }
       getAll();

    },[cat])
    return (
        <div>
             <div className='text-white flex flex-col gap-10 justify-center p-2 '>
           
            
            <div className='mt-[100px] flex justify-center '>
                <p className='text-lg font-extrabold'>See All {cat} List of Year {year}</p>

            </div>
           
            <div className=' mx-2 grid grid-cols-1 md:grid-cols-4 gap-2 '>
               
            

            {
            post.map((item,index)=>(
                <EventByCatnYear item={item} key={index}/>
            ))
              
            }
            </div>
            
        </div> 
        </div>
    );
};

export default EventByYear;