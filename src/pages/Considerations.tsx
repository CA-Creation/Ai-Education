import React from 'react';
import { motion } from 'framer-motion';

const Considerations = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Advantages and Disadvantages of AI in Education
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-6">
                Advantages
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                      Personalized Learning
                    </h3>
                    <p className="mt-2 text-green-700 dark:text-green-300">
                      Adapts to individual student needs and learning pace
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                      24/7 Availability
                    </h3>
                    <p className="mt-2 text-green-700 dark:text-green-300">
                      Learning resources accessible anytime, anywhere
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                      Immediate Feedback
                    </h3>
                    <p className="mt-2 text-green-700 dark:text-green-300">
                      Real-time assessment and response to student work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-red-800 dark:text-red-200 mb-6">
                Disadvantages
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      !
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
                      Implementation Costs
                    </h3>
                    <p className="mt-2 text-red-700 dark:text-red-300">
                      High initial investment in technology and training
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      !
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
                      Technical Limitations
                    </h3>
                    <p className="mt-2 text-red-700 dark:text-red-300">
                      Dependency on internet connectivity and hardware
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      !
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
                      Limited Human Interaction
                    </h3>
                    <p className="mt-2 text-red-700 dark:text-red-300">
                      Reduced face-to-face communication and social learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Considerations;