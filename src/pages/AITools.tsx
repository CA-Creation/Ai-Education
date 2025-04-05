
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Tablet } from 'lucide-react';
import MouseReactiveImage from '../components/MouseReactiveImage';

const AITools = () => {
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
            AI Tools
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
              The Impact of Digital Tools on Modern Education
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
              The integration of technology in the classroom has dramatically transformed the way teachers instruct and students learn. 
              Over time, as new technologies have emerged, they’ve not only changed the tools used in education but also redefined the 
              very structure of teaching itself. Today, teachers are moving away from traditional stand-up lectures and incorporating digital 
              tools that foster group collaboration, creativity, and personalized learning. These advancements aim to make classroom environments 
              more efficient, dynamic, and engaging for students. From the earliest use of the chalkboard to the latest AI-powered tools, 
              each technological leap offers new ways for educators to connect with students, present lessons, and evaluate progress. As technology
               continues to evolve, the classroom of tomorrow promises to be more interactive, immersive, and adaptive, ensuring that every student
                has the opportunity to thrive.
              </p>

              <div>
                <a target="blank"
                  href="https://animoto.com/play/hAID1qCi00SdBQ7A4vVK9Q"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
                  >
                  Watch Video
                  </a> 
              </div>
            </div>
              

            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
              AI-Powered Learning Tools
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
              Artificial intelligence (AI) refers to the capability of computers or machines to perform tasks that typically require human 
              intelligence, such as learning, problem-solving, decision-making, and more. There are various methods for creating AI systems, 
              including machine learning, where a system learns from a dataset and improves its performance over time, and rule-based systems, 
              where decisions are made according to a set of pre-established rules.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              AI can be utilized across many fields, such as natural language processing, image and video recognition, robotics, and even in 
              platforms like Platinum Play( Miller, 2023). Few examples are mentioned below: 
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/copilot.png" 
                            alt="Developer" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Microsoft Copilot
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Microsoft Copilot is a ChatGPT-4 powered chatbot that can help browsing the web, answer questions, and much more. Microsoft 
                      Copilot can also be used as a creative tool, helping you write poems, stories, or even share ideas for a project. 
                      It provides summaries of books, articles and documents. 
                    </p>
                    <a target='blank'
                      href="https://copilot.microsoft.com/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent   mb-6">
                          ChatGPT
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      ChatGPT is a generative AI chatbot that interacts conversationally, 
                      the way a human would. It's trained with information from all over the internet, and other sources.
                      </p>
                      <a target='blank'
                        href="https://chatgpt.com/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/ChatGPT.png" 
                            alt="Developer" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/claude.png" 
                            alt="Developer" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-9">
                        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent ">
                          Claude and Perplexity
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Claude is an AI assistant created by Anthropic. Claude can process large amounts of information, brainstorm ideas, generate text and code.
                    </p>
                    <a target ='_blank'
                      href="http://claude.ai/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent   mb-6">
                          Google Gemini
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Google Gemini is an experimental conversational AI chat service created by Google. It is designed to interact with users 
                      through text-based conversations, providing responses and generating dialogue that resembles human communication. By 
                      utilizing advanced natural language processing techniques, Google Gemini can comprehend and generate text in response 
                      to user inputs, making it a valuable tool for natural language understanding and generation.
                      </p>
                      <a target='_blank'
                        href="https://gemini.google.com/app"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/Google Ai Gemini.png" 
                            alt="Developer" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/pi.png" 
                            alt="Developer" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Pi
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Pi is a kind of personal AI companion, ready to assist people with various tasks and provide answers to queries.
                    </p>
                    <a target='blank'
                      href="https://pi.ai/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent   mb-6">
                        Curipod
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      It will generate an interactive slide deck in seconds, including: polls, word clouds, open-ended questions and a drawing tool.
                      </p>
                      <a target='blank'
                        href="https://curipod.com/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/curipod.png" 
                            alt="curipod" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/diffit.png" 
                            alt="diffit" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-9">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent ">
                          Diffit
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Diffit enables users to access tailored resources for virtually anything. It allows individuals to modify existing materials for any audience, 
                      create customized resources for any topic, and then edit and share these materials with students.
                    </p>
                    <a target ='_blank'
                      href="https://web.diffit.me/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent   mb-6">
                          MagicSchool.ai
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      MagicSchool.ai is an AI-driven educational platform aimed at helping teachers save time by automating tasks like lesson planning, 
                      grading, and content creation. It provides more than 40 AI tools, which are searchable by keywords and organized into categories 
                      for planning, student support, community, productivity, and tools for engagement.
                      </p>
                      <a target='_blank'
                        href="https://www.magicschool.ai/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/Majic.webp" 
                            alt="magicschool" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>
            
              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/SchoolA.png" 
                            alt="SchoolAi" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          SchoolAI
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      SchoolAI is a comprehensive AI platform designed for K-12 teachers and students. It provides tools for teachers to efficiently complete tasks, 
                      along with custom AI chatbots for students. The platform also features built-in student monitoring and controls for teachers. 
                    </p>
                    <a target='blank'
                      href="https://schoolai.com/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent   mb-6">
                          Brisk Teaching
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Brisk integrates with Google Classroom, Docs, Slides, YouTube, Canvas, and Schoology, allowing teachers to create instructional materials, provide feedback, 
                      evaluate student writing, adjust reading levels, generate personalized curriculum, and analyze class progress.
                      </p>
                      <a target='blank'
                        href="https://www.briskteaching.com/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/Brisk.png" 
                            alt="Brisk" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/teachaid.png" 
                            alt="teachaid" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-9">
                        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent ">
                          TeachAid
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      TeachAid serves as an AI teaching assistant that automates lesson preparation. It offers tools for lesson planning, assessment design, 
                      interactive presentations, and learning activities. All these features are integrated into a single platform, bringing multiple tools 
                      from different apps together in one place.
                    </p>
                    <a target ='_blank'
                      href="https://www.teachaid.ca/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent   mb-6">
                          Education Copilot
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Education Copilot provides AI generated templates for lesson plans, writing prompts, educational handouts, student reports, 
                      project outlines and lots more.
                      </p>
                      <a target='_blank'
                        href="https://educationcopilot.com/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/educationcopilot.png" 
                            alt="education copilot" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/eduaide_cube.png" 
                            alt="eduaide" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Eduaide.ai
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Eduaide.ai is an AI-powered teaching assistant designed to help teachers with lesson planning, instructional design, and generating 
                      educational content. It offers a resource generator, teaching assistant, feedback bot and AI chat.
                    </p>
                    <a target='blank'
                      href="https://www.eduaide.ai/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent   mb-6">
                          Khanmigo
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Khanmigo is an AI-powered learning tool developed by Khan Academy that can be used as a virtual tutor and as a debate partner. 
                      It can also be used by teachers to generate lesson plans and assist with other administrative tasks.
                      </p>
                      <a target='blank'
                        href="https://www.khanmigo.ai/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/Khanmigo.png" 
                            alt="Khanmigo" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r rom-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/Padlet.png" 
                            alt="Padlet logo" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-9">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent ">
                          Magic Padlet
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Magic Padlet is a feature in Padlet that uses AI to simplify the creation and organization of content on digital boards. It helps 
                      teachers generate ideas, arrange information, and design visually appealing content for classroom activities and collaborative projects.
                    </p>
                    <a target ='_blank'
                      href="https://padlet.com/"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Try Now
                    </a>
                    </div>
                  </div>
                </div>
              </section>


              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent   mb-6">
                          Google NotebookLM
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Google's NotebookLM summarizes the provided sources into text and audio resources to enhance understanding. 
                      Google describes it as "your personalized AI research assistant."
                      </p>
                      <a target='_blank'
                        href="https://notebooklm.google.com/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                    <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/GOOGLE.png" 
                            alt="magicschool" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </section>

              <section id="about" className="py-24 bg-blackdark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-2/5">
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <MouseReactiveImage 
                            src="/images/grammarly.png" 
                            alt="grammarly" 
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent   mb-6">
                          Grammarly
                        </span>
                      </h2>
                      
                      <p className="text-lg text-gray-300 leading-relaxed dark:text-white-300 mb-6 leading-relaxed transition-colors prose text-justify">
                      Grammarly is an online writing assistant that uses artificial intelligence to enhance clarity, correctness, and style. It integrates 
                      with email clients, productivity suites, and social media platforms. Its AI-powered tools check grammar, spelling, tone, and overall 
                      writing quality.
                      </p>
                      <a target='blank'
                        href="https://www.grammarly.com/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </div>

                
              </section>
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

export default AITools;