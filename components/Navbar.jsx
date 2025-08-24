'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const navLinks = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const ids = ['home', 'about', 'tech-stack', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-20 bg-white backdrop-blur-md border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Full-width content */}
      <div className="w-full flex justify-between items-center px-6 py-4">
        <h2 className="text-gray-800 text-lg">Håkon Asdøl | Portfolio</h2>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-2">
          {navLinks.map(link => {
            const id = link.toLowerCase().replace(' ', '-');
            const isActive = activeSection === id;
            return (
              <motion.a
                key={link}
                href={`#${id}`}
                className={`text-lg px-3 py-1 rounded-xl cursor-pointer transition-colors
                  ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-800 hover:bg-gray-100'}`}
              >
                {link}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (AnimatePresence for smooth open/close) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="bg-white rounded-xl shadow overflow-y-auto max-h-[80vh]">
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map(link => {
                  const id = link.toLowerCase().replace(' ', '-');
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={link}
                      href={`#${id}`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-semibold p-3 rounded cursor-pointer transition-colors
                        ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {link}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
