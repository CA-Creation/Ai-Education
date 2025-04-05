import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import { Rocket, Globe, Cpu, Network } from 'lucide-react';

const Futureofai = () => {
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
            The Future of AI in Education
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className=" p-8 rounded-2xl backdrop-blur-xl border border-purple-500/20"> 
              <p className="text-gray-300 leading-relaxed mb-4">
              Artificial Intelligence (AI) is revolutionizing education by transforming teaching methodologies, 
              personalizing learning experiences, and enhancing administrative efficiency. With 
              the improvement of AI technologies, they are expected to change the education system and its associated 
              components which profoundly could aid in improving the systems of learning, accessibility, and engagement. 
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl backdrop-blur-xl border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Personalized Learning
              </h2>
              <p className="text-gray-300 leading-relaxed">
              One of the most important effects of AI is on personalization in education. AI-driven systems can analyze students’ 
              learning patterns, strengths, and weaknesses to develop educational content according to their needs. 
              Intelligent tutoring systems (ITS) have the capability to give individualized instructions and feedback, enabling to 
              learn at their own pace. As AI technology improves, education is expected to become more adaptable 
              to suit different learning needs and preferences, making it more inclusive.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-6">
                AI Powered Assessment and Feedback
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Traditional assessment methods can be time-consuming and may not always provide timely feedback. AI-based 
              assessment tools can automate grading and provide immediate, data-driven feedback to students. 
              This not only enhances efficiency but also helps educators identify gaps in student understanding more quickly. 
              Future AI-powered assessments will likely go beyond multiple-choice exams, evaluating critical thinking and 
              problem-solving abilities using natural language processing and machine learning .
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-6">
                Intelligent Virtual Assistants and Chatbots
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Intelligent chatbot assistants have gained popularity for use by both teachers and students. These virtual 
              chatbot assistants can address questions posed by learners, provide study guides, and also perform some non-teaching 
              tasks like scheduling and reminders. The virtual assistants of the future will be more engaging than 
              ever, providing students with on the spot tutoring and emotional support to foster active participation in learning.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-6">
                Bridging Educational Gaps and Accessibility
              </h2>
              <p className="text-gray-300 leading-relaxed">
              AI has the potential to bridge educational inequalities by providing quality education to students in remote and 
              underserved areas. AI-driven platforms can offer interactive lessons, translation services, and 
              speech-to-text functionalities, making education more accessible to learners with disabilities. 
              As AI technology advances, its role in creating inclusive education will expand, ensuring equitable learning 
              opportunities for all students.
              </p>

              <p className="text-gray-300 leading-relaxed mt-4">
              The future of AI in education holds immense potential to enhance learning experiences, improve accessibility, 
              and streamline educational processes. However, it also presents challenges that must be carefully managed to ensure 
              ethical and equitable implementation. As AI continues to evolve, collaboration among educators, 
              policymakers, and technology developers will be essential in forming an AI-powered education system that benefits 
              all learners.
              </p>
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

export default Futureofai;