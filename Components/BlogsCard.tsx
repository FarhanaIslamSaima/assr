import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from "react-icons/lu";

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

const BlogsCard = ({item}:props) => {
    console.log(item)
    return (
        <div className='flex flex-col lg:flex-row  gap-8 items-center px-2'>
            
            <img
          src={`/uploads/${item.img}`}
          alt="planet-04"
          className="md:w-[260px] w-full h-[250px] rounded-[32px] object-cover rounded mb-2 "
          
        />
            
            
            <div className='flex flex-col max-w-[700px]'>
            <p className='text-[18px]  '>{item.title}</p>
            <p className='text-xs mt-5'><b>Author: </b>{item.author}</p>
            <p className='text-[12px] text-justify  my-5'>{item.desc.substr(0,300)+'...'}</p>
            </div>
            <div className='border border-white rounded-md cursor-pointer xs:display-hidden mb-2'>
                
                        <Link
                        href={{
                          pathname: "/BlogDetails",
                          query: { id: `${item.id}` },
                        }}
                      >
                  
            
                <LuArrowUpRight className="text-5xl"/>
                </Link>
               
            </div>
            
            
            
        </div>
    );
};

export default BlogsCard;