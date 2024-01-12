'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import EventByYear from '@/Components/Eventts/EventByYear';

const page = () => {
    
    return (
        <div className="bg-gradient-to-r from-black to-deep_blue ">
            <EventByYear/>
            
        </div>
    );
};

export default page;