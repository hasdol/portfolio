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
          <h2 className="text-3xl bg-gray-50 rounded-xl px-4 py-2 w-fit mx-auto text-gray-900 mb-10">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I completed my Bachelor's degree in Summer 2025, and I have acquired the majority of my skills through self-learning. With a background as a top athlete, I have learned the value of discipline, focused work, and teamwork. I am passionate about creating modern, user-friendly solutions that make a real difference.
          </p>

        </div>
        <div className='shadowh-fit w-fit my-auto mx-auto'>
          <Image
            src={CrossCountry}
            alt="Håkon Asdøl Cross Country skiing"
            width={300}
            height={300}
            className="object-contain rounded"
          />
        </div>


      </div>
    </motion.section>
  );
}
