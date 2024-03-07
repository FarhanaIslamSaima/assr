'use client'
import React,{Dispatch,SetStateAction} from 'react';
import { fadeIn } from '@/Utils/motion';
import { motion } from 'framer-motion';
import styles from '@/styles';
import Link from 'next/link';
interface itemProps{
    id:string,
    imgUrl:string,
    title:string
}
interface props{
    index:number,
    id:string,
    item:itemProps,
    active:string,
    setActive:Dispatch<SetStateAction<string>>

}

const ActivitiesCard = ({id,item,index,active,setActive}:props) => {
    console.log(active)
    return (
    <motion.div
        variants={fadeIn('right','spring',index*0.5,0.75)}
        className={`relative flex ${active==id?'lg:flex-[3.5]':'lg:flex-[1.5] flex[3]'} flex items-center justify-center min-w-[50px] h-[300px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
        onHoverStart={() => setActive(id)}
      >
        <img
          src={item.imgUrl}
          alt="planet-04"
          className="w-full h-full object-cover rounded"
        />
         {active !== id ? (
      <h3 className=" bg-[rgba(0,0,0,0.8)] sm:text-[26px] text-[18px] text-white absolute z-0 bottom-[20px] px-2  ">
        {item.title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.8)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {item.title}
        </h2> 
        <Link href={{
          pathname:"/yearevent",
          query:{event:item.title.toLocaleLowerCase()}
        }} shallow><p className='font-bold text-red'>Details</p></Link> 
      </div>
    )}
       
          
    
      </motion.div>
       
    );
};

export default ActivitiesCard;