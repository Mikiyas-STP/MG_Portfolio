import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // "I accept any valid React HTML/Component as content"
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Top of the Frame (Placeholder for now) */}
      <header className="bg-white shadow-sm p-4">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl">MyPortfolio</span>
          <ul className="flex gap-4 text-sm font-medium text-gray-600">
            <li className="cursor-pointer hover:text-black">Projects</li>
            <li className="cursor-pointer hover:text-black">Contact</li>
          </ul>
        </nav>
      </header>

      {/* 2. The Dynamic Content (The Picture) */}
      {/* 'flex-grow' forces this section to fill empty space, pushing footer down */}
      <main className="flex-grow max-w-4xl mx-auto w-full p-4">
        {children} 
      </main>

      {/* 3. Bottom of the Frame */}
      <footer className="bg-slate-900 text-white text-center p-8 mt-auto">
        <p className="text-sm text-gray-400">© 2025 Built with React & TypeScript</p>
      </footer>
    </div>
  );
};

export default Layout;