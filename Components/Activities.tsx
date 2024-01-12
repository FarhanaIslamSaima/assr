'use client'
import React,{useRef,useState,useEffect} from 'react';
import {motion,Variants,useInView,useAnimationControls} from 'framer-motion'
import styles from '../styles'
import {fadeIn} from '../Utils/motion'
import { useScroll } from "framer-motion"
import ActivitiesCard from './ActivitiesCard';
import { exploreWorlds } from '@/Constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getEvents } from '@/api';
const Activities = () => {
  const router=useRouter();
  
  const [active,setActive]=useState<string>('world-02')
   
    const { scrollYProgress } = useScroll()
    const arr=[1,2,3,4]
    const mainControls=useAnimationControls()
    const ref=useRef(null)
    const IsinView=useInView(ref,{once:false})
    const divVariants={
      hidden:{opacity:0,y:-10},
      visible:{opacity:1,y:0}
    }
    const start=()=>{
     
    }
    useEffect(()=>{

      console.log(IsinView)
      if(IsinView){
        mainControls.start({
          opacity:1,
          transition:{duration:0.5,delay:0.25}
        })
      }
      const getAll=async()=>{
        const data=await getEvents();
        console.log(data);

      }
      getAll()
   
    

     },[])

    return (
        <div ref={ref}
        
     
      
        
          className=' w-full  bg-gradient-01   text-white  '
      
        id='activities'
        >
            <div
              className='flex items-center justify-center'
           
            >
             <motion.div 
           
        
      
     className='text-4xl font-extrabold m-20 animate-pulse'>Explore Our Activities</motion.div>
             </div>
            <div className='mt-[10px] flex lg:flex-row flex-col min-h-[50vh] gap-5 mx-20' 

            
            
            
            >
              {
                exploreWorlds.map((item,index)=>(
                <ActivitiesCard id={item.id} key={index} index={index} item={item} active={active} setActive={setActive}  /> 
                ))
              }
                
              
                </div> 
                <div className='flex justify-end m-3'>
                 <button  onClick={()=>{router.push('/Events')}}className='border border-2 border-white p-2 hover:bg-black'>View More</button>
                </div>
                <div className=" mx-[200px] mt-[50px]"><hr/></div>
           
         

        </div>
      
    );
};

export default Activities;