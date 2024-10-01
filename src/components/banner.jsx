import React, { useState, useEffect } from 'react';

import image1 from '../assets/images/banner1.png';
import image2 from '../assets/images/banner2.png';
import image3 from '../assets/images/banner3.png';

const Banner = ({ interval = 3000 }) => {
    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);  
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    useEffect(() => {
      const autoSlide = setInterval(() => {
        goToNext();
      }, interval);
  
      return () => clearInterval(autoSlide);
    }, [currentIndex, interval]);
  
    return (
      <div className="banner">
        <div className="banner-image">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        </div>
    );
  };
  
  export default Banner;