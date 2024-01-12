import React from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
interface controlProps{
    hasNext:boolean,
    hasPrev:boolean
}
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
const PaginationControl = ({hasNext,hasPrev}:controlProps) => {
    const router=useRouter();
    const searchParams=useSearchParams()
    const pages=searchParams.get('page')??1;
    const per_page=searchParams.get('per_page')??5;
    return (
        <div className='flex text-white font-bold gap-2 py-2 items-center'>
            <button disabled={!hasPrev} onClick={
                ()=>{
                    router.push(`/Blogs?page=${Number(pages)-1}&per_page(${per_page})`)
                }
            }><FaCaretLeft className='text-4xl'/></button>
            <div>
                {pages}/{Math.ceil(10/Number(per_page))}
            </div>
            <button disabled={!hasNext}
            onClick={
                ()=>{
                    router.push(`/Blogs?page=${Number(pages)+1}&per_page(${per_page})`)
                }
            }
            
            
            ><FaCaretRight className='text-4xl'/></button>
            
        </div>
    );
};

export default PaginationControl;