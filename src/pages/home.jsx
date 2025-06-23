import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      
      <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Home Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-purple-200 dark:bg-purple-800 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold">🎓 Announcements</h2>
            <p className="text-2xl font-bold">5 New</p>
          </motion.div>
          <motion.div
            className="bg-pink-200 dark:bg-pink-800 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold">📝 Assignments</h2>
            <p className="text-2xl font-bold">3 Pending</p>
          </motion.div>
          <motion.div
            className="bg-indigo-200 dark:bg-indigo-800 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold">📆 Calendar</h2>
            <p className="text-2xl font-bold">2 Events</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;

