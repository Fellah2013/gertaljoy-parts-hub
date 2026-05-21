import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-neutral-900">
              GERTALJOY<span className="text-red-600">AUTOPARTS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-red-600 ${
                    isActive ? 'text-red-600' : 'text-neutral-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254729658126" className="flex items-center text-sm font-semibold text-neutral-900 hover:text-red-600 transition-colors">
              <Phone className="mr-2 h-4 w-4" />
              +254 729 658 126
            </a>
            <Button variant="destructive" asChild>
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-900">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-neutral-200 text-neutral-900 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-neutral-200 flex justify-between items-center">
                    <span className="text-xl font-bold">GERTALJOY</span>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block text-lg font-medium hover:text-red-600 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="p-6 border-t border-neutral-200 space-y-4">
                    <a href="tel:+254729658126" className="flex items-center text-lg font-semibold w-full">
                      <Phone className="mr-3 h-5 w-5 text-red-600" />
                      Call Us
                    </a>
                    <Button className="w-full" variant="destructive" asChild onClick={() => setIsOpen(false)}>
                      <Link to="/shop">Shop Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;