import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import { Rocket, Globe, Cpu, Network } from 'lucide-react';

const TeachingBeyond = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Global Reach",
      description: "Connect with learners worldwide through digital platforms"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Smart Technology",
      description: "Leverage AI-powered tools for enhanced learning"
    },
    {
      icon: <Network className="w-8 h-8 text-pink-400" />,
      title: "Connected Learning",
      description: "Create interactive networks of knowledge sharing"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "Future Ready",
      description: "Prepare students for tomorrow's challenges"
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
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            Teaching Beyond the Classroom
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Breaking traditional boundaries with innovative digital learning solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl backdrop-blur-xl border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Digital Transformation in Education
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Digital tools have revolutionized education, breaking down traditional classroom barriers 
                and enabling learning to happen anywhere, anytime. This transformation opens new 
                possibilities for both teachers and students.
              </p>
            </div>

            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border-2 border-cyan-500/20">
              <YouTube
                videoId="4KugVjCvJag"
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
            className="grid grid-cols-1 sm:grid-cols-1 gap-6"
          >
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

export default TeachingBeyond;