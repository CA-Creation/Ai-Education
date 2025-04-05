import React from 'react';
import { motion } from 'framer-motion';
import MouseReactiveImage from '../components/MouseReactiveImage';

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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl"></div>
              <MouseReactiveImage
                src="/images/AIEducation.jpg" 
                alt="AI in Education" 
                className="w-full h-96 object-cover rounded-2xl mix-blend-overlay"
              />
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl backdrop-blur-xl border border-purple-500/20">
              <p className="text-gray-300 leading-relaxed mb-6">
              Artificial Intelligence (AI) in education involves the use of computer platforms to manage learning and administrative tasks that typically require human intelligence, with the goal of improving learning experiences and supporting both students and educators. 
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
              Artificial intelligence  technology, such as robots, machine learning, an natural language processing, can customize learning by adjusting pace and content to meet the needs of each individual learner. Each student will have the opportunity and resources they require to accomplish their goals owing to this individualized approach, which helps accommodate a variety of learning styles and speeds.
              </p>
              <p className="text-gray-300 leading-relaxed">
              AI in education may encourage interactive learning environments and creative teaching strategies. AI has the potential to revolutionize education through making it more efficient, individualized, and accessible as it develops.

              </p>
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