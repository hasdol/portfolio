'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CrossCountry from '@/public/cross_country.png'

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      variants={sectionVariants}
      className="min-h-screen flex items-center justify-center bg-white py-16 px-4"
    >
      <div className='md:grid md:grid-cols-3 md:w-2/3 md:space-x-10 mx-5 space-y-5'>


        <div className="max-w-2xl text-center md:col-span-2">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I will complete my Bachelor's degree in Summer 2025, but I have already acquired the majority of my skills through self-learning. With a background as a top athlete, I have learned the value of discipline, focused work, and teamwork. I am passionate about creating modern, user-friendly solutions that make a real difference.
          </p>

        </div>
        <div className='shadow-xl h-fit w-fit my-auto mx-auto'>
          <Image
            src={CrossCountry}
            alt="Håkon Asdøl Cross Country skiing"
            width={300}
            height={300}
            className="object-contain "
          />
        </div>


      </div>
    </motion.section>
  );
}
