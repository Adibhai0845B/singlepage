// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Page3() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/another-page-4');
  };
  return (
    <div>
      <h1>Page3</h1>
      <button onClick={handleClick}>Go to Another Page</button>
    </div>
  );
}
export default Page3;
