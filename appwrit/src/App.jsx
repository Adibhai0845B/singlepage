import React from 'react';
import Signin from './Signin';
//import Nav from './Nav';  // Assuming Nav is in the same directory
import First from './First'
import Second from './Second'
function App() {
  // If using Vite
  console.log(import.meta.env.VITE_APPWRITE_URL);
  // If using Create React App
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  return (
    <div>
     <First/>
      <Second/>
    </div>
  );
}

export default App;
