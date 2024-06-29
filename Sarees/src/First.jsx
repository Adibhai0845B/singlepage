import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slideshow() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div className="w-1/2 mx-auto h-1/2">
      <Slider {...settings}>
        <div>
          <img src="https://th.bing.com/th/id/OIP.D_5hWmEUY54W1Z8qncx93AHaFb?rs=1&pid=ImgDetMain" alt="Slide 1 landscape" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="https://windowsthemepack.com/themepack/_girls/girls-with-saree/20.jpg" alt="Slide 2 landscape" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.XbtnTklYNMeVXgcfiLJd6wHaFA?rs=1&pid=ImgDetMain" alt="Slide 3" className="object-cover w-full h-full" />
        </div>
      </Slider>
      
    </div>
  );
}

export default Slideshow;
