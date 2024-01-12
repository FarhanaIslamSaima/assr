import AchivementList from '@/Components/Achivement/AchivementList'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-950'>
        <div className='bg-gray-950 h-[20vh]'></div>
        <div className='mx-[15%]'>
            <h1 className='text-white text-6xl font-bold flex justify-start font-mono pb-10'>Achievements</h1>
            <div className=''>
                <AchivementList/>
            </div>
        </div>
    </div>
  )
}

export default page