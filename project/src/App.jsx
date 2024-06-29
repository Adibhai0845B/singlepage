import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import Login from './Login';
import Logout from './Logout';
import ChangePassword from './ChangePassword';
import ForgetPassword from './ForgetPassword';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900">
        <div className="w-full max-w-4xl p-6 mx-auto overflow-hidden bg-black rounded-lg shadow-lg">
          <NavigationButtons isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
          <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
const NavigationButtons = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="flex mb-6 space-x-4">
      <button
        onClick={() => navigate('/signup')}
        className="px-4 py-2 font-medium text-white transition-transform duration-300 transform bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-105"
      >
        Register
      </button>
      <button
        onClick={() => navigate('/login')}
        className="px-4 py-2 font-medium text-white transition-transform duration-300 transform bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-105"
      >
        Login
      </button>
      {isAuthenticated && (
        <button
          onClick={() => {
            navigate('/logout');
            handleLogout();
          }}
          className="px-4 py-2 font-medium text-white transition-transform duration-300 transform bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:scale-105"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default App;
