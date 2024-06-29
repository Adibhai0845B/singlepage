import React from 'react';

// Import your images (replace with your actual image paths)
function Gall() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="justify-center mb-8 font-sans text-3xl text-center text-gray-800">Gallery</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative group">
          <img src='data:image/jpeg;base64,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' alt="Gallery 1" className="object-cover w-full h-auto transition duration-500 transform rounded-lg shadow-lg group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center transition duration-500 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg text-white">Wedding collection</p>
          </div>
        </div>
        <div className="relative group">
          <img src='https://i.pinimg.com/originals/9e/6f/de/9e6fdeccdfc0ae48666f51ae2d790c54.jpg'alt="Gallery 2" className="object-cover w-full h-40 transition duration-500 transform rounded-lg shadow-lg group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center transition duration-500 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg text-white">Caption for Image 2</p>
          </div>
        </div>
        <div className="relative group">
          <img src='https://i.pinimg.com/originals/5e/a2/50/5ea2507ce38e5792c8b543761f9b1881.jpg'alt="Gallery 3" loading='lazy' className="object-cover w-full h-auto transition duration-500 transform rounded-lg shadow-lg group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center transition duration-500 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg text-white">Saree with silk touch</p>
          </div>
        </div>
        <div className="relative group">
          <img src='https://i.pinimg.com/originals/1a/a5/7f/1aa57fee33a29530bf72a472bb5b0dfd.jpg' alt="Gallery 4" className="object-cover w-full h-auto transition duration-500 transform rounded-lg shadow-lg group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center transition duration-500 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg text-white">Saree with cotton</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gall;
