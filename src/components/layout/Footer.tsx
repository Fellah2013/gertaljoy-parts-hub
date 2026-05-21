import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
              GERTALJOY<span className="text-red-600">AUTOPARTS</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed">
              Premium auto parts supplier in Kisumu, providing genuine and reliable car components for all major brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-neutral-400 hover:text-white transition-colors">Browse Shop</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6">Top Categories</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Engine Parts" className="text-neutral-400 hover:text-white transition-colors">Engine Parts</Link></li>
              <li><Link to="/shop?category=Brake Systems" className="text-neutral-400 hover:text-white transition-colors">Brake Systems</Link></li>
              <li><Link to="/shop?category=Suspension" className="text-neutral-400 hover:text-white transition-colors">Suspension</Link></li>
              <li><Link to="/shop?category=Batteries" className="text-neutral-400 hover:text-white transition-colors">Batteries</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-neutral-400">
                <MapPin className="h-5 w-5 text-red-600 mt-1" />
                <span>Kisumu, Kenya</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-400">
                <Phone className="h-5 w-5 text-red-600" />
                <a href="tel:+254729658126" className="hover:text-white">+254 729 658 126</a>
              </li>
              <li className="flex items-center space-x-3 text-neutral-400">
                <Mail className="h-5 w-5 text-red-600" />
                <a href="mailto:info@gertaljoy.com" className="hover:text-white">info@gertaljoy.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Gertaljoy Autoparts. All rights reserved.</p>
          <p>Designed for excellence in Kisumu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;