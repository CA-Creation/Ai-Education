import React from 'react';
import { motion } from 'framer-motion';

const Administration = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          AI in Teaching and Administration
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Administrative Tasks
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Automated grading and assessment</li>
                <li>• Schedule optimization</li>
                <li>• Resource allocation</li>
                <li>• Student performance tracking</li>
                <li>• Attendance management</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Teaching Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                AI assists teachers by automating routine tasks, providing insights into student performance, and suggesting personalized learning strategies for different students.
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
                Benefits
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Time Savings</h3>
                  <p className="text-gray-600 dark:text-gray-300">Reduced administrative workload</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Improved Accuracy</h3>
                  <p className="text-gray-600 dark:text-gray-300">Reduced human error in data handling</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Better Insights</h3>
                  <p className="text-gray-600 dark:text-gray-300">Data-driven decision making</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Implementation
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Successful implementation requires careful planning, staff training, and a phased approach to ensure smooth transition and adoption of AI-powered administrative tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Administration;