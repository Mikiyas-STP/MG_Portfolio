// src/components/layout/Layout.tsx - FINAL NAVIGATION VERSION

import { ReactNode } from 'react';
import { socialLinks } from '../../data/socials';
import SocialIcon from '../common/SocialIcon';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER: Floating, Glassy, Professional NavBar */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-xl">
        <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
          
          {/* Logo: Clean Text Logo */}
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Mikiyas Portfolio
          </span>
          
          {/* Navigation Links: Pill-Style */}
          <ul className="flex gap-2 text-sm font-medium"> 
            <li>
              <a 
                href="#projects" 
                className="hover:bg-cyan-100 px-3 py-2 rounded-full text-slate-700 hover:text-slate-900 transition-all font-semibold"
              >
                Projects
              </a>
            </li>


             {/* NEW: CV/Resume Link */}
    <li>
        <a 
            href="public/images/cv-template.pdf" // ⬅️ IMPORTANT: Update this path! (Place your PDF in the 'public' folder)
            target="_blank"
            className="bg-cyan-400 px-3 py-2 rounded-full text-slate-900 font-semibold hover:bg-cyan-300 transition-all"
        >
            Resume
        </a>
    </li>
            



            <li>
              <a 
                href="#contact" 
                className="hover:bg-cyan-100 px-3 py-2 rounded-full text-slate-700 hover:text-slate-900 transition-all font-semibold"
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

      {/* FOOTER: Seamless Dark Color */}
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
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Built with React, TypeScript & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;