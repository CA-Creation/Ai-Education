import React from 'react';
import { motion } from 'framer-motion';

const Future = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Future of AI in Education
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Emerging Technologies
              </h2>
              <ul className="space-y-3">
                <li>• Advanced Natural Language Processing</li>
                <li>• Virtual and Augmented Reality</li>
                <li>• Emotional AI and Empathetic Learning</li>
                <li>• Quantum Computing Applications</li>
                <li>• Brain-Computer Interfaces</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Predicted Impact
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                AI is expected to revolutionize education by creating more personalized, accessible, and effective learning experiences for students worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Future Trends
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Personalized Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">AI-driven individual education paths</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Global Classrooms</h3>
                  <p className="text-gray-600 dark:text-gray-300">Borderless education opportunities</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Smart Content</h3>
                  <p className="text-gray-600 dark:text-gray-300">Dynamic, AI-generated materials</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Challenges to Address
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Digital divide and access equality</li>
                <li>• Privacy and data protection</li>
                <li>• Teacher training and adaptation</li>
                <li>• Ethical AI implementation</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Future;