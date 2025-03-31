import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Tablet } from 'lucide-react';

const IntegratingTechnology = () => {
  const tools = [
    {
      icon: <Monitor className="w-8 h-8 text-emerald-400" />,
      title: "Interactive Displays",
      description: "Smart boards and digital presentations"
    },
    {
      icon: <Laptop className="w-8 h-8 text-teal-400" />,
      title: "Learning Platforms",
      description: "Online course management systems"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Mobile Learning",
      description: "Educational apps and mobile resources"
    },
    {
      icon: <Tablet className="w-8 h-8 text-blue-400" />,
      title: "Digital Resources",
      description: "E-books and multimedia content"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 mb-6">
            Integrating Technology into the Classroom
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform traditional learning spaces with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                ICT's Role in Modern Education
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Information and Communication Technology (ICT) has become integral to modern education,
                transforming how we teach and learn. This integration creates new opportunities for
                interactive learning and skill development.
              </p>
            </div>

            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border-2 border-emerald-500/20">
              <YouTube
                videoId="1DU4fmm0R5s"
                className="w-full"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 h-full">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-xl border border-emerald-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Implementation Strategy
              </h3>
              <p className="text-gray-300">
                Successful technology integration requires a balanced approach considering infrastructure,
                teacher training, and student needs. Regular assessment ensures technology serves its
                intended educational purpose.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

export default IntegratingTechnology;