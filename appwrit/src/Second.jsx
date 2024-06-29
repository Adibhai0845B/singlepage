import React from 'react';

function Second() {
  const images = [
    'https://th.bing.com/th/id/OIP.3b_NNPKM51KndLoq5XX52QHaE8?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.BBojf9dvZhhAcfXNMywipgHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://i5.walmartimages.com/asr/9b88c541-63b6-4e4d-a2f8-1673084ad0b2.9f5470f7882e2127b1d9fa6d1ec5b837.jpeg',
    'https://th.bing.com/th/id/OIP.3MPTS6LwaH1BfXDC0g09_wHaH-?w=168&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.Rmku9hav_14xE0hiaj7hTwHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.MuCBL06Hw1r28r44OynOiAHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGltYWdlfGVufDB8fHx8MTY1NjU2NjA5Nw&ixlib=rb-1.2.1&q=80&w=400',
    'https://th.bing.com/th?id=OIP.EHp6SA9ELR9SeWHh3M_01QHaIv&w=230&h=271&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th/id/OIP.rIPmqC41qrZW-4N2VFoQrAHaNK?w=186&h=331&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  ];

  return (
    <div className="container p-4 mx-auto bg-gray-500">
      <div className="grid grid-cols-1 gap-4 bg-gray-500 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="w-full h-64">
            <img src={image} alt={`Image ${index}`} className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
      <br/>
      <div className="container p-4 mx-auto">
      <div className="mb-6">
        <h1 className="px-6 py-4 text-xl font-bold text-white bg-black rounded-lg shadow-lg md:text-2xl lg:text-3xl">
          Best Deals
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
            <img src={image} alt={`Image ${index}`} className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white">{`Buy Now + get ${index * 10}% off`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Second;
