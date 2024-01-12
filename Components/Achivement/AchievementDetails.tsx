import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
interface blogProps{
    id :      String    
    title :   String
    desc  :   String
    img    :  String
    tagId  :  String
    author :  String
  
    userId :  String

    comments :Comment[]

}
interface props{
    item:blogProps
}


const AchievementDetails = ({item}:any) => {
    return (
        <div className='pb-10'>
            <div className='h-[20vh] bg-transparent'></div>
            <div className='grid grid-cols-1 gap-5 md:mx-[18%]'>
                    <div className='flex justify-start mx-[5%] '>
                        <h1 className='text-5xl text-white font-bold font-sans p-3'>{item.title}</h1>
                    </div>
                    <div>
                        <img 
                        src={`/uploads/${item.img}`}
                        className='w-full aspect-video'
                        alt="" 
                        />
                    </div>
                    <div className='flex justify-start mx-[5%]'>
                        <p className='text-sm text-white font-serif'>{item.desc}</p>
                    </div>
            </div>
        </div>
    );
}

export default AchievementDetails