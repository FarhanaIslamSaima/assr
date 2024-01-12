"use client"
import React, { useState,useEffect } from 'react';
import BlogsCard from '../BlogsCard';
import Link from 'next/link';
import { insights } from '@/Constants';
import { getData } from '@/api';

const BlogList = () => {
    const [post,setPost]=useState([]);
    useEffect(()=>{
        const getAll=async()=>{
            const data=await getData();
           setPost(data);
            

        }
        getAll();
    },[])
    return (
       <></>
    );
};

export default BlogList;