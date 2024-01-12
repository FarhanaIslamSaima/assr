'use client'
import { Bubblegum_Sans } from 'next/font/google';
import React,{useEffect,useState} from 'react';
import LazyVideo from './LazyVideo';





const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "EXPLORE SCIENCE AND OBSERVE UNIVERSE" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === 'E') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  
  
    
    return (
        
        
        <div className=' bg-gray-500 h-screen relative mb-2'>
            <div className=''>
            <LazyVideo
            
        src="/earth.mp4"
        poster="/galaxy.jpg"
      />

            {/* <video autoPlay muted loop className='w-screen h-screen object-cover inset-0 z-neg-1   '>
                <source src={'/earth.mp4'}/>
            </video> */}
            </div>

            <div className='flex flex-col items-center  inset-0 z-1 absolute right-10 left-100 text-white '>
            
            <p className='md:text-6xl xs:text-lg  text-4xl font-bold mt-[230px] mx-5  text-white custom-text-shadow'>ASTRONOMY AND SCIENCE SOCIETY OF RUET</p>
            <span className="wrap mt-[20px] text-white font-extrabold xl:text-2xl text-xl custom-text-shadow mx-5" >{text}</span>
            <button className='mt-6 border border-[5px] border-white p-3 font-extrabold text-xl custom-text-shadow' >BEGIN YOUR JOURNEY</button>
            
            
            </div>
            
           
        </div>
    );
};

export default Banner;