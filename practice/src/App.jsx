// src/App.js
import React, { useRef } from 'react';
import './App.css';

function App() {
  const targetRef = useRef(null);

  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <button
        className="p-2 mt-10 text-white bg-blue-500 rounded"
        onClick={handleClick}
      >
        Scroll to Section
      </button>
      
      <div className="flex items-center justify-center h-screen">
        <p>Scroll down to find the section</p>
      </div>

      <div
        ref={targetRef}
        className="flex items-center justify-center h-screen bg-green-100"
      >
        <h1 className="text-2xl">Target Section</h1>
      </div>
    </div>
  );
}

export default App;
