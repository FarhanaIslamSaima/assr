import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from "react-icons/lu";

interface blogProps{
    id :      string,    
    title :   string,
    desc  :   string,
    img    :  string,
    tagId  :  string,
    author :  string,
    userId :  string,
  

    comments :Comment[]

}
interface props{
    item:blogProps
}

const AchivementCard = ({item}:any) => {
    console.log(item)
    return (
        <div className='bg-gray-900  rounded-xl p-5 '>
            <div className='card text-white grid grid-cols-3
                             gap-y-10 px-5 pt-[8%]'>

                <div className='col-span-3 px-4'>
                    <h1 className='text-2xl font-bold font-serif '>{item.title}</h1>
                </div>
               
                <div className=' px-2 grid grid-cols-1 gap-2
                                self-center  text-sm 
                                text-gray-50 justify-self-center'>
                    <p>{item.desc}</p>
                    <p className='text-slate-400'>{item.year}</p>
                </div>
                <div className='justify-self-start py-2 pl-8 col-span-2 border-l border-slate-300'>
                    <h1 className='text-lg font-semibold mb-3'>Paticipants:</h1>
                    {item.paticipants.map((participant:any)=>(
                        <p className='text-md leading-6 pl-2'>{participant}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AchivementCard;


                    //     <Link
                    //     href={{
                    //       pathname: "/BlogDetails",
                    //       query: { id: `${item.id}` },
                    //     }}
                    //   >
                  
            
                // <LuArrowUpRight className="text-5xl"/>
                // </Link>