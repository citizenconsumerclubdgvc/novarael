import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about-novarael' | 'about-ccc' | 'events' | 'team' | 'rulebook' | 'general-rules';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'about-novarael' as Page, label: 'About Novarael\'25' },
    { id: 'about-ccc' as Page, label: 'About CCC' },
    { id: 'events' as Page, label: 'Events' },
    { id: 'team' as Page, label: 'Organizing Team' },
    { id: 'rulebook' as Page, label: 'Rulebook' },
    { id: 'general-rules' as Page, label: 'General Rules' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="text-xl font-serif font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-red-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Novarael'25
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === link.id
                    ? 'bg-teal-500/20 text-teal-400 shadow-lg shadow-teal-500/20'
                    : 'text-gray-300 hover:text-teal-400 hover:bg-teal-500/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-teal-400 hover:bg-teal-500/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-teal-500/20">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === link.id
                    ? 'bg-teal-500/20 text-teal-400 shadow-lg shadow-teal-500/20'
                    : 'text-gray-300 hover:text-teal-400 hover:bg-teal-500/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
