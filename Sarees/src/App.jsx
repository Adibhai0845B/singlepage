import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Gall from './Gall';
import Videos from './Videos';
import Location from './Location';
import Login from './Login';
import Contac from './Contac';
import Home from './Home';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const targetRef = useRef(null);

  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function LoginButton() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
      navigate('/login');
    };

    return (
      <button
        onClick={handleLoginClick}
        className="px-4 py-2 font-bold transition bg-white rounded shadow text-customGreen hover:bg-gray-200"
      >
        Login
      </button>
    );
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-100">
        <nav className="fixed z-50 flex items-center justify-between w-full p-4 bg-gray-800 shadow-md bg-customGreen">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">P</h1>
            <h1 className="text-xl font-bold text-green-400">Panchvati</h1>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customGreen"
            />
            <button className="px-4 py-2 font-bold transition bg-white rounded shadow text-customGreen hover:bg-gray-200">
              Search
            </button>
            <LoginButton />
          </div>
        </nav>
        <nav className="fixed left-0 flex justify-between w-full p-4 text-white bg-gray-800 shadow-md top-14">
          <h1 className="text-lg font-bold">Shop By Category</h1>
          <div className="flex space-x-2">
            <CustomNavLink label="HOME" path="/" />
            <CustomNavLink label="Category" path="/category" />
            <CustomNavLink label="About Us" path="/Hi" />
            <CustomNavLink label="Gallery" path="/gallery" />
            <CustomNavLink label="Videos" path="/videos" />
            <CustomNavLink label="Testimonials" path="/testimonials" />
            <CustomNavLink label="Contact Us" path="/Contac" />
            <CustomNavLink label="Location" path="/Location" />
            <CustomNavLink label="Product" path="/category" />
          </div>
        </nav>
        <main className="p-4 pt-24">
          <div className="max-w-lg p-6 mx-auto mt-10 transition-opacity duration-1000 rounded shadow-md opacity-100 bg-">
            <h2 className="mb-4 text-2xl font-bold text-center text-customGreen">Welcome to Panchvati!</h2>
            <p className="text-center text-gray-700">Explore our collection of products and find what you need.</p>
            <Home/>
          </div>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/category" element={<Second />} />
            <Route path="/gallery" element={<Gall />} />
            <Route path="/videos" element={<Videos ref={targetRef} />} />
            <Route path="/location" element={<Location />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Contac" element={<Contac />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function CustomNavLink({ label, path }) {
  return (
    <NavLink to={path} className="p-2 rounded hover:bg-gray-700" activeClassName="bg-gray-700">
      {label}
    </NavLink>
  );
}
export default App;