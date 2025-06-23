import React from 'react';
import { motion } from 'framer-motion';

const userData = [
  {
    name: 'Riya Sharma',
    role: 'UI/UX Intern',
    year: '2nd Year, B.Tech',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Aditya Mehta',
    role: 'Backend Developer',
    year: 'Final Year',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Singh',
    role: 'Frontend Intern',
    year: '3rd Year, B.Tech',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Aman Verma',
    role: 'ML Intern',
    year: '2nd Year, B.Sc',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Kriti Desai',
    role: 'Web Developer',
    year: '1st Year, B.Tech',
    avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
  },
  {
    name: 'Rahul Raj',
    role: 'Cybersecurity Intern',
    year: 'Final Year',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

const Users = () => {
  return (
    <>
      
      <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Meet Our Interns</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {userData.map((user, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden text-center p-6 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400 dark:border-yellow-300"
              />
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{user.role}</p>
              <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">{user.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;



