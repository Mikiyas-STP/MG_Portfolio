// src/components/layout/Layout.tsx - FINAL, TRANSPARENT NAVIGATION VERSION

import { ReactNode } from 'react';
import { socialLinks } from '../../data/socials';
import SocialIcon from '../common/SocialIcon';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HEADER: Floating, Translucent (Glassy) NavBar */}
      {/* Key Fix: bg-white/10 (highly transparent) + backdrop-blur + strong shadow */}
      <header className="bg-white/10 backdrop-blur-lg sticky top-0 z-50 border-b border-white/20 shadow-2xl">
        <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
          
          {/* Logo: Clean Text Logo (White text to stand out on dark background) */}
          <span className="font-bold text-xl tracking-tight text-white">
            Mikiyas Portfolio
          </span>
          
          {/* Navigation Links: Pill-Style (Text color must be white for visibility) */}
          <ul className="flex gap-2 text-sm font-medium"> 
            <li>
              <a 
                href="#projects" 
                // Hover effect uses transparent white background
                className="hover:bg-white/20 px-3 py-2 rounded-full text-white transition-all font-semibold"
              >
                Projects
              </a>
            </li>

            {/* NEW: CV/Resume Link - Primary CTA */}
            <li>
                <a 
                    // CRITICAL FIX: The path to a file in 'public' should start with a /
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