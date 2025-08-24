'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SkiLabMobile from '@/public/ski-lab.png';
import EiendomDesktop from '@/public/eiendomsmegler1.png';
import { useRouter } from 'next/navigation';


export default function Projects() {
  const router = useRouter()

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSkiLabClick = () =>{
    router.push('https://ski-lab.com')
  }
  const handleBachelorClick = () =>{
    router.push('https://bachelor-eiendomsmegler1.firebaseapp.com/kjope-bolig')
  }

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      variants={sectionVariants}
      className="min-h-screen flex items-center justify-center bg-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl bg-gray-50 rounded-xl px-4 py-2 w-fit mx-auto text-gray-900 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Ski-Lab Project */}
          <div className="flex flex-col items-center" onClick={handleSkiLabClick}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-[200px] h-auto overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={SkiLabMobile}
                alt="Ski-Lab Mobile Interface"
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </motion.div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Ski-Lab.com</h3>
            <p className="text-gray-600 text-center max-w-sm mt-2">
              A modern platform where athletes can manage their skis, test skis, and analyze results.
            </p>
            <a
              href="https://ski-lab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-300"
            >
              Visit Website
            </a>
          </div>
          {/* Eiendomsmegler1 Project */}
          <div className="flex flex-col items-center" onClick={handleBachelorClick}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-[200px] h-auto overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={EiendomDesktop}
                alt="Eiendomsmegler1 Project Interface"
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </motion.div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Eiendomsmegler1</h3>
            <p className="text-gray-600 text-center max-w-sm mt-2">
              My Bachelor's thesis project where we modernized the sales process, resulting in a more user-friendly and efficient solution.
            </p>
            <a
              href="https://bachelor-eiendomsmegler1.firebaseapp.com/kjope-bolig"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-300"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
