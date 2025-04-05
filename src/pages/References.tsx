import React from 'react';
import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';

const References = () => {
  const blogPosts = [
    {
      title: "Privacy and security issues of using AI for academic purposes",
      date: "2024, March 29",
      category: "Balaban",
      link: "https://www.forbes.com/sites/davidbalaban/2024/03/29/privacy-and-security-issues-of-using-ai-for-academic-purposes/",

    },
    {
      title: "AI in education: The advantages and disadvantages",
      date: "2023, August 30",
      category: "Carlie",
      link: "https://www.instrucko.com/blogs/the-advantages-and-disadvantages-of-ai-in-education/",
    },
    {
      title: "Advantages and disadvantages of AI in education. University Canada West",
      date: "2024, July 19",
      category: "Clugston, B",
      link: "https://www.ucanwest.ca/blog/education-careers-tips/advantages-and-disadvantages-of-ai-in-education/",
    },
    {
      title: "TThe evolution of classroom technology: From chalkboards to AI. Global Academic Forum.",
      date: "2023, December 27",
      category: "Global Academic Forum",
      link: "https://globalacademicforum.com/the-evolution-of-classroom-technology-from-chalkboards-to-ai/",
    },
    {
      title: "Artificial intelligence . Ditch That Textbook.",
      date: "2023",
      category: "Miller, M. ",
      link: " https://ditchthattextbook.com/ai-tools/",
    },
    {
      title: "Weapons of math destruction: How big data increases inequality and threatens democracy. Crown Publishing Group",
      date: "2016",
      category: "O'Neil, C.",
    },
    {
      title: "ChatGPT (Mar 28 version) [AI as the latest innovation in education’s technological evolution].",
      date: "2025",
      category: "OpenAI",
      link: " https://openai.com/chatgpt",
    },
    {
      title: "Should robots replace teachers? AI and the future of education (1st ed.). Polity Press.",
      date: "2019",
      category: "Selwyn, N.",
      link: " https://research.monash.edu/en/publications/should-robots-replace-teachers-ai-and-the-future-of-education/",
    },
    {
      title: "The evolution of EdTech: From chalkboards to AI. Syndu. ",
      date: "2024, September 14",
      category: "Syndu.",
      link: "https://syndu.com/blog/the-evolution-of-edtech-from-chalkboards-to-ai/",
    },
    {
      title: "Artificial intelligence and the value of transparency. AI & Society, 36(2), 585–595.",
      date: "2021",
      category: "Walmsley, J.",
      link: "https://doi.org/10.1007/s00146-020-01066-z/",
    },
    {
      title: "The datafication of teaching in Higher Education: Critical issues and perspectives. Teaching in Higher Education, 25(4), 351–365.",
      date: "2020",
      category: "Williamson, B., Bayne, S., & Shay, S. ",
      link: "https://doi.org/10.1080/13562517.2020.1748811",
    },
    {
      title: "Systematic review of research on artificial intelligence applications in higher education – where are the educators? International Journal of Educational Technology in Higher Education, 16, Article 39. ",
      date: "2019",
      category: "Zawacki-Richter, O., Marín, V. I., Bond, M., & Gouverneur, F.",
      link: "https://doi.org/10.1186/s41239-019-0171-0",
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
          References
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
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <button className="text-blue-500 hover:text-blue-600 font-semibold" onClick={() => window.open(post.link, "_blank")}>
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

export default References;