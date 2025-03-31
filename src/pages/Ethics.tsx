import React from 'react';
import { motion } from 'framer-motion';

const Ethics = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Ethical Considerations and Challenges
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
                Privacy Concerns
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Data collection and storage</li>
                <li>• Student information protection</li>
                <li>• Consent and transparency</li>
                <li>• Third-party access</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Bias and Fairness
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                AI systems must be carefully designed and monitored to avoid perpetuating existing biases in education and ensure equal opportunities for all students.
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
                Ethical Guidelines
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Transparency</h3>
                  <p className="text-gray-600 dark:text-gray-300">Clear communication about AI use</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Accountability</h3>
                  <p className="text-gray-600 dark:text-gray-300">Regular auditing of AI systems</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Inclusivity</h3>
                  <p className="text-gray-600 dark:text-gray-300">Equal access to AI resources</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Future Considerations
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                As AI technology evolves, we must continuously evaluate and update ethical guidelines to ensure responsible implementation in educational settings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ethics;