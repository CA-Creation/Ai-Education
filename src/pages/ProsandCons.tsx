import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, BookOpen, Brain, BarChart, Zap, Users, Database, Cloud } from 'lucide-react';

const Tools = () => {


  const tools = [
    {
      icon: <PenTool className="w-100 h-100 text-purple-500" />,
      title: "Personalized Learning",
      description: "AI can understand the unique needs of students by analyzing their strengths, weaknesses, learning pace and preferences. Using this data, AI creates customized lesson plans and resources with instructions best suited to their personal learning styles, allowing students to achieve their learning goals at their own pace (Carlie, 2023 ; Clugston, 2024).",
      gradient: "from-purple-500 to-pink-500"
    },



    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: "Immersive Learning Experiences",
      description: "AI can create immersive learning experiences that engage students more effectively  than traditional teaching methods. By integrating VR and AR technologies, AI can create real-world incidents, enhancing students’ interest and active participation in learning. Exploring historical sites and conducting virtual science experiments through VR and AR are examples of how AI provides a hands-on learning experience (Clugston, 2024).",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-12 h-12 text-pink-500" />,
      title: "Immediate Feedback",
      description: "AI can provide immediate and personalized feedback for each student, guiding them towards their learning goals. By receiving real-time assistance and responses to their needs, students become more motivated and encouraged in their studies (Carlie, 2023 ; Clugston, 2024).",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Improved student engagement and motivation",
      description: "AI enhances student engagement and motivation by creating interactive and personalized learning experiences. Adaptive learning platforms use AI to tailor lessons based on students’ strengths, weaknesses, and learning styles, making education more relevant and engaging. Gamification elements, such as AI-driven quizzes, virtual tutors, and real-time feedback, encourage active participation and sustain students' interest. Additionally, AI-powered tools provide instant assistance, reducing frustration and helping learners stay motivated. By making learning more dynamic and responsive to individual needs, AI fosters a more engaging and enjoyable educational experience ( OpenAI, 2025).",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-500" />,
      title: "Increased Efficiency",
      description: "Teachers can use AI for grading papers and planning lessons due to its capability for automating tasks. This allows them to allocate more time  to other important duties, such as strengthening greater interaction with students (Carlie, 2023 ; Clugston, 2024).",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: <Database className="w-12 h-12 text-red-500" />,
      title: "Cost- Effective Learning",
      description: "AI can make learning more cost-effective due to its capability to automate administrative tasks such as grading assignments and  maintaining students records. Moreover, AI -powered educational platforms can handle large amounts of data of students at a low cost while providing high-quality education to a wide audience. This helps decrease the cost of education , allowing more students to access quality learning experiences (Clugston, 2024).",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-12 h-12 text-sky-500" />,
      title: "Ongoing assessment and long-term enhancement",
      description: "AI promotes continuous evaluation and development by offering real-time insights into student’s performance and academic outcomes. AI can monitor student progress, spot patterns, and point up areas for development using analysis of data. Teachers can utilize this data to improve their methods, create individualized activities, and make sure that students are meeting learning goals. A proactive approach to education is made possible by continuous evaluation, which allows for quick adjustments to improve learning outcomes and experiences (Clugston, 2024).",
      gradient: "from-sky-500 to-blue-500"
    },

    {
      icon: <PenTool className="w-100 h-100 text-purple-500" />,
      title: "Increasing the quality of education and academic standards",
      description: "AI integration in education holds promise for improving overall educational quality and enhancing academic standards. Artificial intelligence can support teachers in providing effective instruction, guarantee reliability and precision in grading, and give access to excellent resources. Educational institutions can provide an improved  and demanding curriculum that satisfies students’ changing expectations by utilizing AI technologies. AI can help create collaborative learning settings where teachers and students may exchange resources and expertise, encouraging a culture of ongoing learning and development (Clugston, 2024).",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  const distools = [
    {
      icon: <PenTool className="w-100 h-100 text-purple-500" />,
      title: "Data Privacy Issue",
      description: "The issue of data privacy is one of the main drawbacks of AI in education. AI systems collect  a large amount of personal data to function effectively. This data includes student records and even biometric information. There is serious concern about storage and protection of this data. Insufficient security measures may lead to data violations,  exposing students’ private data to unauthorized parties. This can result in identity fraud or other abuses. Therefore, It is essential to protect this sensitive information by ensuring strict adherence to regulations and implementing strong data privacy measures (Clugston, 2024).",
      gradient: "from-purple-500 to-pink-500"
    },



    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: "Academic Misconduct",
      description: "Cheating is another major issue associated with integrating AI in education. Using AI to finish assignments or take tests is unfair to students who do the work honestly. A generation of individuals who cheat and use shortcuts in education will not be beneficial for the future. The use of strategies by students to bypass AI detectors through advanced AI tools is another risk in the education sector. Continuously updating AI tools by educational institutions, such as schools and universities,  is crucial for minimizing  this issue (Clugston, 2024).",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-12 h-12 text-pink-500" />,
      title: "Uncertainty and Misinformation",
      description: "AI's effectiveness depends on the quality of the algorithms and data it relies on. If the data is flawed or biased, the output it generates will also be inaccurate or misleading. Therefore, students must develop critical thinking skills to analyze and assess the information they encounter rather than accepting it without question. Various online educational resources are available to help them enhance these evaluation skills ( OpenAI, 2025).",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Improved student engagement and motivation",
      description: "AI enhances student engagement and motivation by creating interactive and personalized learning experiences. Adaptive learning platforms use AI to tailor lessons based on students’ strengths, weaknesses, and learning styles, making education more relevant and engaging. Gamification elements, such as AI-driven quizzes, virtual tutors, and real-time feedback, encourage active participation and sustain students' interest. Additionally, AI-powered tools provide instant assistance, reducing frustration and helping learners stay motivated. By making learning more dynamic and responsive to individual needs, AI fosters a more engaging and enjoyable educational experience ( OpenAI, 2025).",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-500" />,
      title: "Over Reliance on Technology",
      description: "Dependence on technology may have adverse effects on critical thinking and problem-solving skills in students as they may rely on AI systems to complete academic tasks instead of developing those skills themselves. Greater use of AI for teaching and administrative tasks could also lead to significant technical problems or cyber-attacks (Clugston, 2024).",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: <Database className="w-12 h-12 text-red-500" />,
      title: "Reduced Human Interaction",
      description: "Relying on AI may weaken student-teacher relationships and diminish the social-emotional aspects of learning. Although AI systems are effective, they cannot replace the empathy, understanding, and interpersonal connection that human educators provide. A lack of human interaction can negatively impact students’ social and emotional growth. Moreover, it can affect their overall engagement and motivation in the learning process (Clugston, 2024).",
      gradient: "from-red-500 to-pink-500"
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          The Advantages and Disadvantages of AI in Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Artificial Intelligence is rapidly changing the world around us. The integration of AI in education provides numerous benefits to both students and educators in various ways, 
          but it also presents drawbacks that should be carefully considered to ensure an effective learning environment.
          </p>
          
        </motion.div>
        
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 mb-6 mt-20">
          Advantages of AI in Education
          </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${tool.gradient} p-[2px] rounded-2xl group hover:scale-105 transition-transform duration-300`}
            >
              <div className="h-full bg-gray-900 rounded-2xl p-6 backdrop-blur-xl">
                <div className="mb-4 transform  transition-transform duration-300">
                  {tool.icon}
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {tool.title}
                </h2>
                <p className="text-gray-400">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400 mb-6 mt-20">
          Disadvantages of AI in Education
          </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {distools.map((distool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${distool.gradient} p-[2px] rounded-2xl group hover:scale-105 transition-transform duration-300`}
            >
              <div className="h-full bg-gray-900 rounded-2xl p-6 backdrop-blur-xl">
                <div className="mb-4 transform  transition-transform duration-300">
                  {distool.icon}
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {distool.title}
                </h2>
                <p className="text-gray-400">
                  {distool.description}
                </p>
              </div>
            </motion.div>
          ))}
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

export default Tools;