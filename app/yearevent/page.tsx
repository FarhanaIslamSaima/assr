'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';

const page = () => {
    const param=new URLSearchParams(useSearchParams());
    const event=param.get('event');
    console.log(event);
    return (
        <div>
            hello
        </div>
    );
};

export default page;