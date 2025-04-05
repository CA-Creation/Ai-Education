import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import { Rocket, Globe, Cpu, Network } from 'lucide-react';

const EthicalConsiderations = () => {
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
            Ethical Considerations
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
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Ethical Considerations and Challenges
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
              Integrating Artificial Intelligence (AI) into education has its pros, including providing customized learning 
              experiences, automating some administrative functions, and improving data analysis on students. A considerable 
              range of advancement does not come without raising great ethical concerns and challenges, especially concerning 
              data privacy, bias, and the impact on teachers' roles.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl backdrop-blur-xl border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Data Privacy and Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
              AI’s most prominent ethical issue in the educational sector is the use and abuse of student data. 
              The majority of the AI tools available today use so much data that it includes children’s personal information, 
              learning behaviours, and academic performances. While data has potential in developing 
              personalize learning in education, the matter of privacy should not be ignored. Poor handling, 
              unauthorized access and misuse of sensitive data can result in very harmful consequences, such as identity theft 
              and exploitation. It is in the higher interest of educational bodies to bear in mind that problems 
              such as a violation of students’ privacy are too important to overlook when the shift to AI systems is in place.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-6">
                Bias and Fairness
              </h2>
              <p className="text-gray-300 leading-relaxed">
              The effectiveness of AI algorithms is directly dependent on the data they trained on, and if the data itself is biased, 
              these biases can be perpetuated by AI systems. Education is not an exception as bias may be present in 
              learning evaluations and AI may prefer some students over others leading to unequal learning opportunities. For instance, 
              AI-powered grading tools could negatively impact minority students if the training data lacks representation of different 
              cultures and languages. In working towards addressing these biases, a priority focus should be placed on 
              ensuring that AI systems are trained using diverse and representative data sets.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-6">
                The Role of Teachers
              </h2>
              <p className="text-gray-300 leading-relaxed">
              AI is capable of completely transforming the role of a teacher. While AI would help automate repeat tasks such as 
              lesson planning and grading, its application would also in reduction of the human interaction, which is important 
              to developing emotional intelligence, social interactions and critical skills. The increasing use of 
              AI may also create ethical concerns as teachers might feel that their presence in the classroom is no longer necessary 
              which can make lacking of human-centered education. Educators must maintain a balance between making use of AI for 
              efficiency and retaining the human element of teaching that fosters creativity and empathy in students.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-6">
                Transparency and Accountability
              </h2>
              <p className="text-gray-300 leading-relaxed">
              AI technologies present the clear problem of lacking transparency. Their algorithms are typically “black boxes,” 
              and educators and students alike will find it difficult to understand how decisions are made. In 
              educational settings, such opacity creates issues with comprehending the logic behind AI’s recommendations or decisions
               regarding the evaluation and grading of students or changes in the curriculum. Schools and universities
                have an ethical responsibility to provide explanation and to take responsibility for AI systems, especially when 
                those AI systems have direct consequences on students’ lives.
              </p>

              <p className="text-gray-300 leading-relaxed mt-4">
              AI in education brings forth exciting opportunities but also serious ethical challenges that must be addressed to 
              ensure a fair, transparent, and secure learning environment. Key considerations such as data privacy, bias, the role 
              of educators, and accountability must be carefully managed to avoid unintended negative consequences. 
              With the rapid advancements in AI technology, it is high time for collective action by all who have an interest in 
              education: practitioners, politicians, and software designers to formulate firm ethical boundaries within which 
              all will be protected.
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

export default EthicalConsiderations;