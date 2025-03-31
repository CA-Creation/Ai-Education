import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Evolution of AI in Education",
      date: "March 15, 2024",
      excerpt: "Exploring how artificial intelligence has transformed the educational landscape over the past decade.",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Implementing AI in the Classroom",
      date: "March 12, 2024",
      excerpt: "A practical guide for educators looking to integrate AI tools into their teaching methods.",
      category: "Education",
      readTime: "8 min read"
    },
    {
      title: "The Future of Learning Analytics",
      date: "March 10, 2024",
      excerpt: "How AI-powered analytics are helping educators make data-driven decisions.",
      category: "Analytics",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Blog
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-500 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <button className="text-blue-500 hover:text-blue-600 font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;