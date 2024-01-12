import React from "react";
import Cards from "@/Components/Cards";
import DevCards from "@/Components/DevCards";
import { developers, insights } from "@/Constants";
import ContactForm from "@/Components/ContactForm";

const page = () => {
  return (
    <div className="bg-gray-950 border border-gray-950 border-solid-1 mb-0">
      <div
        className="relative overflow-hidden bg-cover border-1 border-gray-50 bg-gray-950 bg-no-repeat p-12 text-center"
        style={{ height: "30vh" }}
      >
        <div
          className="flex  items-center justify-center absolute bottom-0 left-0 right-0 top-0 h-full max-w-full overflow-hidden bg-fixed"
          // style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div className=" border-b w-4/5 border-slate-200">
            <div className="text-white">
              <h2 className="mb-4 mt-20 text-4xl font-semibold">
                Developers panel
              </h2>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-10  text-black my-20">
        <div className="">
          {/* this portion is for president and secretary  */}
          <div className="flex justify-center">
            <div className='w-1/2 mb-4'>
                    {
                        developers.map((item,index)=>(
                            <DevCards  key={index}item={item} />
                        ))
                    }

                </div>
          </div>

        </div>
      </div>
        </div>

  );
};

export default page;
