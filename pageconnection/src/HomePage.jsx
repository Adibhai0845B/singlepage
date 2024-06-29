// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/another-page');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to Another Page</button>
    </div>
  );
}

export default HomePage;
