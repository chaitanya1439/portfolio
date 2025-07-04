
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient mb-2">Vellanki Chaitanya</h3>
            <p className="text-gray-400">
              B.Tech Mechanical Engineering | AI & Full‑Stack Developer
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Crafting innovative solutions at the intersection of engineering and technology
            </p>
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 mb-4 group"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="group-hover:scale-110 transition-transform duration-200" />
            </button>
            <span className="text-gray-400 text-sm">Back to top</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vellanki Chaitanya. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
