import React from 'react';
import ExecutiveMemberCard from './ExecutiveMemberCard';
import { members } from '@/Constants';
const ExecutiveMember = () => {

    return (
        <div className='text-white flex flex-col gap-10 justify-center'>
        <div className='flex flex-col items-center'>
        <p className='lg:text-4xl md:text-3xl text-2xl font-bold mt-[50px]'>MEET OUR MEMBERS</p>
        </div>
       
        <div className='mb-4 mx-[10%] flex flex-wrap  justify-center'>
            {
                members.map((item,index)=>(
                    <div className='m-2 lg:m-4' key={index}>
                        <ExecutiveMemberCard item={item} key={index}/>
                    </div>
                ))
            }

        </div>
    </div>
    );
};

export default ExecutiveMember;