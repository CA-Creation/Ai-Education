import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Introduction to AI in Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Artificial Intelligence is revolutionizing education by providing personalized learning experiences
            and enabling data-driven decision making in educational institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl backdrop-blur-xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                AI is transforming traditional educational methods by introducing innovative ways to teach,
                learn, and assess. This technology enables personalized learning paths and provides
                real-time feedback to both students and educators.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Education Technology"
                className="w-full h-64 object-cover rounded-2xl mix-blend-overlay"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;