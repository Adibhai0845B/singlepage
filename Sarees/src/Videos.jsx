import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';

const videoData = [
  {
    id: 1,
    title: 'Video 1',
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    description: 'This is the first video'
  },
  {
    id: 2,
    title: 'Video 2',
    url: 'https://www.youtube.com/watch?v=1Q8fG0TtVAY',
    description: 'This is the second video'
  },
  {
    id: 3,
    title: 'Video 3',
    url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    description: 'This is the third video'
  }
];

function Videos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="container p-4 mx-auto">
      <Slider {...settings}>
        {videoData.map(video => (
          <div key={video.id} className="overflow-hidden bg-white rounded-lg shadow-md">
            <ReactPlayer url={video.url} width="100%" height="360px" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Videos;
