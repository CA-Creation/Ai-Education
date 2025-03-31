import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Lightbulb, Users, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Adaptive Learning',
      description: 'AI-powered systems that adapt to individual learning styles and pace.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Smart Content Creation',
      description: 'Automated generation of personalized educational materials.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Collaborative Learning',
      description: 'Enhanced group learning experiences through AI-facilitated collaboration.',
      gradient: 'from-blue-500 to-teal-400',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Performance Analytics',
      description: 'Real-time tracking and analysis of student progress and engagement.',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              AI in Education
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Transforming the Future of Learning Through Artificial Intelligence
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </motion.section>


          {/* AI in Education */}
        <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 mb-6">
              AI in Education
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform traditional learning spaces with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20">
                <h2 className="text-5xl font-bold text-white mb-8 text-center">
                  AI as the Latest Innovation in Education’s Technological Evolution
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4 ">
                The evolution of new teaching technologies highly influenced teaching methodologies and students’ learning experiences, transitioning from traditional chalkboards to advanced systems powered by Artificial Intelligence (AI). This progression shows a continuous effort to enhance educational outcomes through technological innovation.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                Introduced in the early 19th century, chalkboards became a staple in classrooms, enabling educators to present information visually to groups of students. This tool facilitated interactive teaching, allowing for real-time illustrations and explanations that were pivotal in conveying complex concepts. (OpenAI, 2025) Syndu (2024) highlighted that the simplicity and effectiveness of chalk boards made them a key part of education for over a century.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                The late 20th century witnessed the advent of personal computers in educational settings, marking a significant shift towards digital learning. Early programs like LOGO introduced students to programming, fostering problem-solving skills and logical thinking ( OpenAI, 2025). With the increased availability of computers, schools started incorporating them into the curricula. Computer labs became a staple in educational institutions, providing students with practical experience in technology. Syndu (2024) stated that this era was foundational for the advancement of technology in education.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                Building upon traditional chalkboards, interactive whiteboards emerged in the 1990s, offering dynamic, multimedia capabilities. These tools allowed educators to display digital content, annotate lessons, and engage students through interactive features (OpenAI, 2025)
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                The 21st century introduced Augmented Reality (AR) and Virtual Reality (VR) into the educational landscape, providing immersive experiences that transcend traditional learning boundaries ( OpenAI, 2025). The students' ability to interact with complicated models, along with the capability of going on virtual trips and visiting different historical places, makes it easier for them to grasp the content of the lesson.  Syndu (2024) highlights that according to early studies, VR can contribute to 60-70% better outcomes for low performing students.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                At present, AI plays a main role in educational innovation by providing customized learning experiences that fulfill the students’ unique needs. AI-driven platforms analyze student data to adapt curricula, provide real-time feedback, and predict performance, thereby enhancing learning outcomes(OpenAI, 2025) These developments highlight the importance of AI and its ability to transform education in a way that supports students to develop innovative ideas and aid in accessibility. This document provides an extensive review of AI, especially its importance in an educational context.

                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
          </div>
        </div>
        </div>
      
      {/* Features Section */}
      <section ref={ref} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400">
              Discover how AI is transforming education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-r ${feature.gradient} p-[2px] rounded-2xl`}
              >
                <div className="h-full bg-gray-900 rounded-2xl p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
            {/* Teaching Beyond the Classroom */}
          <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-lightgray-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-6 ">
                    Teaching Beyond the Classroom
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
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
                      The Impact of Digital Tools on My Teaching Approach
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                      Education has evolved from using chalkboards to embracing digital tools that bring subjects to life and encourage student interaction. Technology has transformed classrooms into spaces for creativity, 
                      critical thinking, and exploration. While there is debate over technology's role in teaching, a balanced approach that combines hands-on activities with digital tools has proven effective in engaging 
                      students and enhancing learning. This mix offers both the benefits of digital innovations and real-world experiences.


                      </p>
                    </div>

                    <div className="w-full h-[600px]">
                      <YouTube
                        videoId="4KugVjCvJag"
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

            {/* Integrating Technology into the Classroom */}
            
            <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-lightgray-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                  Integrating Technology into the Classroom
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
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl backdrop-blur-xl border border-cyan-500/20">
                      <h2 className="text-3xl font-bold text-white mb-4">
                      ICT's Role in Modern Education
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-1xl">
                      The integration of Information and Communication Technology (ICT) into classrooms is transforming education, 
                      offering new opportunities for interactive and personalized learning. While ICT enhances student engagement 
                      and critical skills, challenges such as classroom management and distractions arise. Effective professional 
                      development (PD) for teachers is crucial for successful implementation, with sustained training and 
                      mentorship playing key roles. Additionally, AI can support both teacher development and personalized 
                      student learning. Balancing digital tools with traditional methods and ensuring equal access to technology 
                      are essential for maximizing ICT’s potential in education. Ultimately, a well-planned approach can create 
                      dynamic, engaging, and effective learning environments.


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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group"
            >
              <Link to="/teaching-beyond" className="block">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] rounded-2xl">
                  <div className="bg-gray-900 rounded-2xl p-6 h-full group-hover:bg-gray-800 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">Teaching Beyond</h3>
                    <p className="text-gray-400 mb-4">Explore how digital tools transform traditional teaching methods</p>
                    <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">Learn more →</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="group"
            >
              <Link to="/integrating-technology" className="block">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-[2px] rounded-2xl">
                  <div className="bg-gray-900 rounded-2xl p-6 h-full group-hover:bg-gray-800 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">Integrating Technology</h3>
                    <p className="text-gray-400 mb-4">Discover modern classroom technology integration</p>
                    <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">Learn more →</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="group"
            >
              <Link to="/ProsandCons" className="block">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-2xl">
                  <div className="bg-gray-900 rounded-2xl p-6 h-full group-hover:bg-gray-800 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">Pros and Cons</h3>
                    <p className="text-gray-400 mb-4">Explore The Advantages and Disadvantages of AI in Education</p>
                    <span className="text-purple-400 group-hover:text-purple-300 transition-colors">Learn more →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-64 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">Collaborative Learning</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative h-64 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">AI Innovation</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-64 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Digital Learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">Digital Transformation</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;