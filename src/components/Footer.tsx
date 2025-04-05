import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 ">AI in Education</h3>
            <p className="text-gray-400">
              Transforming the future of learning through artificial intelligence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/Introduction" className="text-gray-400 hover:text-white">introduction</Link></li>
              <li><Link to="AITools" className="text-gray-400 hover:text-white">AI Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/ProsandCons" className="text-gray-400 hover:text-white">Pros and Cons</Link></li>
              <li><Link to="/EthicalConsiderations" className="text-gray-400 hover:text-white">Ethical Considerations</Link></li>
              <li><Link to="/References" className="text-gray-400 hover:text-white">References</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AI in Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;