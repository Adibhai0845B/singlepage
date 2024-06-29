import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function First() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'https://th.bing.com/th/id/OIP.3b_NNPKM51KndLoq5XX52QHaE8?rs=1&pid=ImgDetMain',
    'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://i5.walmartimages.com/asr/9b88c541-63b6-4e4d-a2f8-1673084ad0b2.9f5470f7882e2127b1d9fa6d1ec5b837.jpeg',
  ];

  return (
    <div>
    <div className='p-6 bg-gray-500'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='w-full h-80'key={index}>
            <img src={image} alt={`Slide ${index}`} className='w-full h-auto rounded-lg shadow-lg' />
          </div>
        ))}
      </Slider>
    </div>
    <h1 className="px-6 py-4 text-xl font-bold text-white bg-black rounded-lg shadow-lg md:text-2xl lg:text-3xl">
    Trendy Pickup
</h1>
<div className='bg-gray-500'>
</div>
    </div>
  );
}

export default First;
