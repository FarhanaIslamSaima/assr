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
const DetailsBlog = ({item}:any) => {
  
    

  
    return (
    
        <div>
            
        <div className='w-full text-white flex flex-center justify-center  '>
       
      
       <div className='my-[120px] mx-auto w-70 '>
         
        
       <img
          src={`/uploads/${item.img}`}
          alt="planet-04"
          className="md:w-[260px] w-full h-[250px] float-left rounded-[32px] object-cover rounded mb-1 mx-3"
          
        />
         <div className='p-4'>
         <p className='font-bold text-xl mb-1'>{item.title}</p>
         <p className='text-sm text-gray-300 text-blue font-bold'>Author:{item.author}</p>
       
           
            
           
         
      
      
       <p className='text-justify'>{item.desc}</p>
       </div>
       
           

       </div>
       
//    </div> 
   </div>
    );
};


export default DetailsBlog;