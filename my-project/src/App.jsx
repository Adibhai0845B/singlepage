import React, { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]); // Initialize state for cart items
  const [val,Setval] = useState();
  const handleClick = (productName) => {
    setCartItems([...cartItems, productName]); // Add the product name to the cartItems array
    Setval(val + 1);
  };

  return (
    <div>
      <div>
        <h1>Product 1</h1>
        <button onClick={() => handleClick('Product 1')}>Add to Cart</button> 
      </div>
      <div>
        <h1>Product 2</h1>
        <button onClick={() => handleClick('Product 2')}>Add to Cart</button>
      </div>
      <h1>My Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
