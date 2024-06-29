import React from 'react';

const products = [
  { id: 1, name: 'Saree 1', image: 'https://th.bing.com/th/id/OIP.j6rnFSnlPgwMxV4NPyr0bAHaHa?rs=1&pid=ImgDetMain', price: '$10' },
  { id: 2, name: 'Saree 2', image: 'https://via.placeholder.com/150', price: '$20' },
  { id: 3, name: 'Saree 3', image: 'https://via.placeholder.com/150', price: '$30' },
  { id: 4, name: 'Saree 4', image: 'https://via.placeholder.com/150', price: '$40' },
  { id: 5, name: 'Saree 5', image: 'https://via.placeholder.com/150', price: '$50' },
  { id: 6, name: 'Saree 6', image: 'https://via.placeholder.com/150', price: '$60' },
  { id: 7, name: 'Saree 7', image: 'https://via.placeholder.com/150', price: '$70' },
  { id: 8, name: 'Saree 8', image: 'https://via.placeholder.com/150', price: '$80' },
  { id: 9, name: 'Saree 9', image: 'https://via.placeholder.com/150', price: '$90' },
  { id: 10, name: 'Saree 10', image: 'https://via.placeholder.com/150', price: '$100' },
  { id: 11, name: 'Saree 11', image: 'https://via.placeholder.com/150', price: '$110' },
  { id: 12, name: 'Saree 12', image: 'https://via.placeholder.com/150', price: '$120' },
  { id: 13, name: 'Saree 13', image: 'https://via.placeholder.com/150', price: '$130' },
  { id: 14, name: 'Saree 14', image: 'https://via.placeholder.com/150', price: '$140' },
];

function Second() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl text-center font-cursive">Products</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="flex flex-col items-center p-4 border rounded-lg shadow-lg h-80">
            <img src={product.image} alt={product.name} loading="lazy" className="object-cover w-full h-32 mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <button type="button" className="px-4 py-2 mt-4 font-semibold text-white bg-gray-800 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Second;
