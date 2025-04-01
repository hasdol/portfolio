'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const navLinks = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-20 bg-white/70 backdrop-blur-md border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Nav bar content */}
      <div className="container mx-auto flex justify-between items-center p-4">
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-lg font-semibold text-gray-700 cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
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
            {/* 
              Instead of placing the menu directly below, we can place
              it in an absolutely positioned container or give it overflow-y-auto 
              so it can scroll on small screens if the content is tall.
            */}
            <div className="bg-white rounded-xl shadow overflow-y-auto max-h-[80vh]">
              <div className="flex flex-col space-y-4 p-4">
                {navLinks.map(link => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-gray-700 bg-white p-3 rounded cursor-pointer"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
