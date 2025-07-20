import React from 'react';

// components
import Btn from '../../Components/Btns/Btn';


//  from react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// images
const images = [
  "/bg1.jpg",
  "/bg2.jpg",
  "/bg3.jpg",
];

export default function BackgroundSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    swipe: true,
    pauseOnHover: false,
  };

  return (
    <div className="relative h-[250px] sm:h-[380px] md:h-[420px] lg:h-[470px] w-full overflow-hidden">

      <div className="absolute h-[250px] sm:h-[380px] md:h-[420px] lg:h-[470px] inset-0 z-0">
        
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx}>
              <img
                src={src}
                alt={`bg-${idx}`}
                className="w-full h-[250px] sm:h-[380px] md:h-[420px] lg:h-[470px] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* make background dark*/}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      </div>

      {/* content */}
      <div className="absolute inset-0 z-20 flex items-center text-white p-3 vsm:p-10 md:p-16 lg:p-24 sm:container">
        <div className="sm:-translate-y-5 w-full ">
          <h1 className="TBO_ani text-[25px] vsm:text-[30px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold">Summer Collection 2025</h1>
          <p className="LRO_ani vsm:text-lg mb-4">Discover our new arrivals with up to 30% off on selected items</p>

            <div className='O_ani flex flex-col sm:flex-row sm:gap-4'>
                <Btn text="Shop Now"/>
                <Btn text="View collection" bg="bg-white"  textColor="text-[#4F46E5]"/>
            </div>
        </div>
      </div>
    </div>
  );
}
