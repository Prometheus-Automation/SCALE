import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-neutral-900 tracking-tight">
            SCALE
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm font-medium">
              About
            </Link>
            <Link to="/portfolio" className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link to="/contact" className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm font-medium">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-neutral-900 text-white px-5 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Get Free Audit
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              className="block text-neutral-700 hover:text-neutral-900 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-neutral-700 hover:text-neutral-900 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="block text-neutral-700 hover:text-neutral-900 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block text-neutral-700 hover:text-neutral-900 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block w-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium text-center hover:bg-neutral-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
