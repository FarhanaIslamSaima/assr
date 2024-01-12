'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { images } from './lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { delay } from 'framer-motion'
interface props{
  images:string[];
}


const CarouselEvent = ({images}:props) => {
  return (
    <section className='py-12'>
    <div className=''>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ type: 'fraction' }}
        modules={[Navigation, Pagination,Autoplay]}
        onSwiper={swiper => console.log(swiper)}
        className='h-96  rounded-lg'
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='flex h-full w-full items-center justify-center'>
              <Image
                src={`/uploads/event/${image}`}
                alt={"hello"}
                width={500}
                height={500}


                className=' h-50 w-50 object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>

  );
};

export default CarouselEvent;