import React from 'react'

const ContactForm = () => {
  return (
<div className='bg-gray-950'>
  {/* Container for demo purpose */}
  <div className="container mx-auto md:px-6">
    {/* Section: Design Block */}
    <section className="mb-32">
      <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat " style={{ backgroundImage:"url('planet-02.png')"}}/>
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg  bg-[hsla(0,0%,5%,0.7)] shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
          <div className="flex flex-wrap justify-center">
            <div className="mb-12  shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 w-1/2 lg:px-6">
              <h1 className='flex justify-center text-gray-50 text-2xl p-4'>Contact Us</h1>
              <form className='text-black'>
                <div className="relative mb-6">
                
                <label
                    className="px-1  mb-5 max-w-[90%] text-gray-100"
                    htmlFor="exampleInput90"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    className="min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-2 mt-3"
                    id="exampleInput90"
                    placeholder="Name"
                  />

                </div>
                <div className="relative mb-6">
                <label
                    className="max-w-[90%] text-gray-100 px-1"
                    htmlFor="exampleInput91"
                  >
                    Email address:
                  </label>
                  <input
                    type="email"
                    className="min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-2 mt-3"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init="">
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="max-w-[90%] text-gray-100 px-1"
                  >
                    Message:
                  </label>
                  <textarea
                    className="min-h-[auto] w-full rounded border-0 px-3 bg-gray-100 mt-3"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Your message"
                    defaultValue={""}
                  />
                </div>
                
                <button
                  type="button"
                  className="mb-6 inline-block w-full rounded bg-primary-500  
                   px-6 pt-3.5 pb-2 text-xs font-medium uppercase text-slate-50 
                   shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out
                    focus:outline-none focus:ring-0 active:bg-primary-700 
                    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                    focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                    active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                    hover:bg-primary-700 lg:mb-0"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</div>

  )
}

export default ContactForm