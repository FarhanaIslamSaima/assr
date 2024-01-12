// components/LazyVideo.tsx
'use client'
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyVideoProps {
  src: string;
  poster: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.load();
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <video ref={videoRef} autoPlay muted loop poster={poster} className="w-screen h-screen object-cover inset-0 z-neg-1">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyVideo;
