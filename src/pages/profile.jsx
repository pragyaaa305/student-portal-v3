import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Profile = () => {
  const [name, setName] = useState("Priyu");
  const [email, setEmail] = useState("priyu@example.com");
  const [password, setPassword] = useState("");

  return (
    <>
      
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">👤 Profile Settings</h2>

          <div className="flex justify-center mb-6">
            <img
              src="https://i.pravatar.cc/100"
              alt="Avatar"
              className="w-24 h-24 rounded-full border-4 border-yellow-400 dark:border-yellow-500"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Save Changes
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
