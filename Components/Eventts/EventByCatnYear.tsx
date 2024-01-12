import React from 'react';
import Link from 'next/link';
interface itemProps{
    category:string,
    desc:string,
    id:string,
    images:string[],
    name:string,
    year:string

}
interface props{
 item:itemProps
}
const EventByCatnYear = ({item}:props) => {
    console.log(item.images[0])
    return (
        <div>
        <div className=' text-white bg-black p-4  flex items-center justify-center flex-col rounded rounded-2'>
         <div className=''>
            <img src={`/uploads/event/${item.images[0]}`} alt="img" width={300} height={300} className='object-fit'/>
         </div>
         <div className='py-2 text-xl font-bold h-100'>
            <p>{item.name}</p>
            
         </div>
         <Link href={{
            pathname:'/EventDetails',
            query:{id:`${item.id}`}
         }}><button className='bg-white text-black px-4  font-bold'>DETAILS</button></Link>
        </div>
        
        
        
       </div>
    );
};

export default EventByCatnYear;