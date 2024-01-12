'use client'
import React, { useState } from 'react';
import { exploreWorlds } from '@/Constants';
import EventList from './EventList';
import { getEventsYear } from '@/api';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Events = () => {
    const [post,setPost]=useState([])
   const [cat,setCat]=useState([''])
    console.log(cat)
    const param=new URLSearchParams(useSearchParams());
const year=param.get('year');
    useEffect(()=>{
        const getAll=async()=>{
            const catArray:any[]=[];
            const data=await getEventsYear(year);
            data.map((item:any)=>(
                catArray.push(item.category)
            
            ))
            setCat(catArray)

         
          
            

        }
       
      
        getAll()
        // if(cat){
        //     cat.filter((value,index)=>(cat.indexOf(value)===index))


        // }
    }
    ,[year])
   
    
    return (
        <div>
             <div className='text-white flex flex-col gap-10 justify-center h-screen'>
           
            
            <div className='mt-[150px] flex justify-center '>
                <p className='text-xl font-extrabold'>See All Event List of Year {year}</p>

            </div>
           
            <div className=' mx-2 grid grid-cols-1 md:grid-cols-1 gap-2 '>
               
            

            {
               cat&&cat.filter((value,index)=>cat.indexOf(value)==index).map((item,index)=>(
                 

                    
                    <EventList key={index} item={item}/>
                ))
            }
            </div>
            
        </div> 
        </div>
    );
};

export default Events;