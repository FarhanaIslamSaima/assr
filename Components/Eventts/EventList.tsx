import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface itemProps{
    category:string,

}
interface props{
 item:string
}
const EventList = ({item}:props) => {
    const param=new URLSearchParams(useSearchParams());
    const year=param.get('year');
  
    
    return (
   <div className=''>
    <Link href={{
        pathname:'/EventByYear',
        query:{year:`${year}`,
               cat:`${item}`
    
    }
    }}><div className=' cursor:pointer text-black bg-white p-4  flex items-center justify-center flex-col rounded rounded-2 mx-40 hover:bg-gray-500  '>
    
     <div className='py-2 text-3xl font-extrabold h-100'>
        <p>{item.toUpperCase()}</p>
        
     </div>
     
    </div></Link>
    
    
    
   </div>
    );
};

export default EventList;