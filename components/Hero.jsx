'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactCountryFlag from "react-country-flag";
import { PiHandWavingLight } from "react-icons/pi";
import MyProfilePic from '@/public/profile_pic.png';

export default function Hero() {
  const handVariants = {
    hover: {
      rotate: [0, 20, -20, 0],
      transition: { duration: 0.6, ease: 'easeInOut' },
    }
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center pt-10 bg-gray-50 px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Profile Picture */}
        <div className="flex justify-center md:justify-end md:w-1/2">
          <Image
            src={MyProfilePic}
            alt="Profile Picture of Håkon Asdøl"
            width={250}
            height={250}
            className="rounded-full object-cover shadow-lg"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h4 className="text-lg text-gray-600 flex justify-center md:justify-start items-center mb-2">
            <motion.span 
              variants={handVariants} 
              whileHover="hover" 
              className="mr-2"
            >
              <PiHandWavingLight size={24} />
            </motion.span>
            Hi, I'm
          </h4>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Håkon Asdøl
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Web Developer from Norway
            <ReactCountryFlag countryCode="NO" svg className="inline ml-2" />
          </p>
        </div>
      </div>
    </motion.section>
  );
}
