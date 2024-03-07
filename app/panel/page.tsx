'use client'

import React, { useState, useEffect } from 'react'
import Cards from '@/Components/Cards'
import { advisors } from '@/Constants'
import AdvisorCards from '@/Components/AdvisorCards'

const page = () => {
  const [panelsData, setPanelsData] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await fetch('api/panels');
        const data = await response.json();
        setPanelsData(data);

      } catch (error) {
        console.error('Error fetching panels data:', error);
      }
    }

    fetchData();
  }, []);
// const presidentPanels = panelsData.filter((panel:any) => panel.post === 'President');
//   const vicePresidentPanels = panelsData.filter((panel:any) => panel.post === 'Vice president');
  const presidentPanels = panelsData.filter((panel:any) => panel.post === 'President');
  const vicePresidentPanels = panelsData.filter((panel:any) => panel.post === 'Vice president');
  const OtherPanels = panelsData.filter(
    (panel:any) => panel.post !== 'President' && panel.post !== 'Vice president'
  );
  return (
    <div className='bg-gray-950 border border-gray-950 border-solid-1 mb-0'>
        

        <div
      className="relative overflow-hidden bg-cover border-1 border-gray-50 bg-gray-950 bg-no-repeat p-12 text-center"
      style={{ height: '30vh' }}
    >
      <div
        className="flex  items-center justify-center absolute bottom-0 left-0 right-0 top-0 h-full max-w-full overflow-hidden bg-fixed"
        // style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className=" border-b w-4/5 border-slate-200">
          <div className="text-white">
            <h2 className="mb-4 mt-20 text-4xl font-semibold animate-pulse">Executive Panel 2023-2024</h2>
            
          </div>
        </div>
      </div>
    </div>





        <div className='mx-10  text-black my-20'>
        <h1 className='w-full text-3xl text-center font-bold mb-10 text-white' >Advisors</h1>
        <div className=''>
            <div className=' flex flex-wrap  justify-center group'>
              {
                advisors.map((item)=>(
                  <div className="w-full md:w-2/5 xl:w-[30%] m-2">
                    <AdvisorCards item={item} key={item.id}/>
                  </div>
                ))
              }
              {/* <div className="w-full md:w-2/5 xl:w-1/4 m-2 group-hover:scale-[0.90] hover:!scale-100"><Cards/></div>
              <div className="w-full md:w-2/5 xl:w-1/4 m-2 group-hover:scale-[0.90] hover:!scale-100"><Cards/></div> */}
            </div>
        </div>
     </div>


     <div className='mx-10  text-black my-20'>
        <h1 className='w-full text-3xl text-center font-bold mb-10 text-white' >President Panel</h1>
        <div className=''>
          {/* this portion is for president and secretary  */}
            <div className='flex flex-wrap  justify-center group'>
            {
              presidentPanels.map((item,index)=>(
                <div className="w-[400px] md:w-2/5 xl:w-[30%] m-2 
                  ">
                  <Cards  item={item} key={index} />
                </div>
              ))
            }            
            </div>
            {/* president and secretary portion ends here */}



            {/* this portion is for the vice president */}
            <div className='flex flex-wrap  justify-center group my-10'>
            {
              vicePresidentPanels.map((item,index)=>(
                <div className="w-full md:w-2/5 xl:w-[30%] m-2 
                ">
                  <Cards  item={item} key={index} />
                </div>
              ))
            }            
            </div>
            {/* this portion vice president portion ends here */}

            {/* this portion is for other posts */}
            <div className='flex flex-wrap  justify-center group'>
            {
              OtherPanels.map((item,index)=>(
                <div className="w-full md:w-2/5 xl:w-[30%] mx-2 my-5">
                  <Cards  item={item} key={index} />
                </div>
              ))
            }
            </div>
            {/* the other posts ends here */}
        </div>
     </div>

     
    </div>
  )
}

export default page
