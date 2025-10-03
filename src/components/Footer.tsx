import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-tight">SCALE</h3>
            <p className="text-sm leading-relaxed">
              Drive customers through social media that converts.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm hover:text-white transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="block text-sm hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <div className="space-y-3">
              <p className="text-sm">Content Strategy</p>
              <p className="text-sm">Social Media Management</p>
              <p className="text-sm">Paid Advertising</p>
              <p className="text-sm">Analytics & Reporting</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-white text-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Scale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
