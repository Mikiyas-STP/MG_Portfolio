import { ReactNode } from 'react';
import { socialLinks } from '../../data/socials';
import SocialIcon from '../common/SocialIcon';
import {  Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white/10 backdrop-blur-lg sticky top-0 z-50 border-b border-white/20 shadow-2xl">
        <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <Link to="/" className="font-bold text-xl tracking-tight text-white transition-colors hover:text-cyan-400">
            <span className="text-cyan-400">S/W Eng</span> | <span className="text-cyan-400">PERN Stack</span>
          </Link>
          <ul className="flex gap-2 text-sm font-medium"> 
            <li>
                <a 
                    href="#skills"
                    className="hover:bg-white/20 px-3 py-2 rounded-full text-white transition-all font-semibold"
                >
                    Skills
                </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="hover:bg-white/20 px-3 py-2 rounded-full text-white transition-all font-semibold"
              >
                Projects
              </a>
            </li>
            <li>
                <a 
                    href="/images/cv-template.pdf" 
                    target="_blank"
                    className="bg-cyan-400 px-3 py-2 rounded-full text-slate-900 font-semibold hover:bg-cyan-300 transition-all"
                >
                    Resume
                </a>
            </li>
            
            <li>
              <a 
                href="#contact" 
                className="hover:bg-white/20 px-3 py-2 rounded-full text-white transition-all font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full p-4">
        {children} 
      </main>

      <footer id="contact" className="bg-slate-900 text-white py-12 mt-auto border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
                aria-label={link.platform}
              >
                <SocialIcon iconName={link.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-6">
              <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Mikiyas Portfolio. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                  Built with React, TypeScript, Tailwind, and deployed via Netlify.
              </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;