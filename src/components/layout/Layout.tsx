import { ReactNode } from 'react';
// 1. Imports
import { socialLinks } from '../../data/socials';
import SocialIcon from '../common/SocialIcon';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl tracking-tight">MyPortfolio</span>
          <ul className="flex gap-6 text-sm font-medium text-gray-600">
            {/* Added scroll links */}
            <li><a href="#projects" className="hover:text-black transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full p-4">
        {children} 
      </main>

      {/* 2. Updated Footer with Icons */}
      <footer id="contact" className="bg-slate-900 text-white py-12 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label={link.platform}
              >
                <SocialIcon iconName={link.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Built with React, TypeScript & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;