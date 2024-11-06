import React, { useState, useEffect } from 'react';
import SliderIMG1 from '../assets/Hero/Slider1.png';
import SliderIMG2 from '../assets/Hero/Slider2.png';
import SliderIMG3 from '../assets/Hero/Slider3.png';

const Hero = () => {
  const images = [SliderIMG1, SliderIMG2, SliderIMG3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='w-full h-auto overflow-hidden relative'>
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-auto object-cover rounded-[50px] p-4 md:p-10"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
