import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Tablet } from 'lucide-react';
import MouseReactiveImage from '../components/MouseReactiveImage';
import { ChevronRight } from 'lucide-react';

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
              <p className="text-gray-300 leading-relaxed">
              The integration of technology in the classroom has dramatically transformed the way teachers instruct and students learn. 
              Over time, as new technologies have emerged, they’ve not only changed the tools used in education but also redefined the 
              very structure of teaching itself. Today, teachers are moving away from traditional stand-up lectures and incorporating digital 
              tools that foster group collaboration, creativity, and personalized learning. These advancements aim to make classroom environments 
              more efficient, dynamic, and engaging for students. From the earliest use of the chalkboard to the latest AI-powered tools, 
              each technological leap offers new ways for educators to connect with students, present lessons, and evaluate progress. As technology
               continues to evolve, the classroom of tomorrow promises to be more interactive, immersive, and adaptive, ensuring that every student
                has the opportunity to thrive.
              </p>
            </div>

            <div className="w-full h-[600px]">
              <YouTube
                videoId="1DU4fmm0R5s"
                className="w-fullw-full h-full"
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
                      Microsoft Copilot is an ChatGPT-4 powered chatbot that can help you browse the web, answer questions, and much more. 
                      It can be accessed through the Copilot website or Microsoft Edge browser, and can be used to ask both simple and complex 
                      questions, request summaries of articles, books, events, news, sports results, and more. Microsoft Copilot can also be used 
                      as a creative tool, helping you write poems, stories, or even share ideas for a project.
                    </p>
                    <a
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
                      ChatGPT is a generative AI chatbot that interacts with you conversationally, the way a human would. It's trained with information from 
                      all over the internet and tons of other sources and it's been trained by humans to interact with you in an authentic way.
                      </p>
                      <a
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
                      Claude (claude.ai) is an AI assistant created by Anthropic. Claude can process large amounts of information, brainstorm ideas, generate text and code.
                    </p>
                    <a
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
                      Google Gemini is an experimental conversational AI chat service developed by Google. Google Gemini is designed to engage in text-based 
                      conversations with users, offering responses and generating human-like dialogue. It uses advanced natural language processing techniques 
                      to understand and generate text in response to user prompts, making it a useful tool for natural language understanding and generation.
                      </p>
                      <a
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