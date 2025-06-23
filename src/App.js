import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Users from './pages/users';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Navbar from './components/Navbar'; // If not already imported

function App() {
  localStorage.setItem("isAuthenticated", "true");
  const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Router>
        {isAuthenticated && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}
        <Routes>
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

