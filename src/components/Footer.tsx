
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-moveeasy-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xl font-bold mb-4">MoveEasy</h4>
            <p className="mb-6 text-gray-300">
              Empowering Communities, Enabling Growth
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Business Avenue</p>
              <p>Cape Town, South Africa</p>
              <p>Email: info@moveeasy.com</p>
              <p>Phone: +27 21 123 4567</p>
            </address>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-accent hover:bg-accent/90 whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} MoveEasy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-300 italic">
              "Building better businesses, one community at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
