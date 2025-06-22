// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
        <Outlet />
      </main>
    </>
  );
};

export default layout;
