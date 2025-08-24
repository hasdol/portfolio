'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaLinkedin, FaGithub } from "react-icons/fa";



export default function Contact() {
  const router = useRouter();
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleLinkedinClick = () =>{
    router.push('https://www.linkedin.com/in/h%C3%A5kon-asd%C3%B8l-7983a2271/')
  }
  const handleGithubClick = () =>{
    router.push('https://github.com/hasdol')
  }

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      variants={sectionVariants}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4"
    >
      <div className="max-w-2xl text-center">
          <h2 className="text-3xl bg-gray-50 rounded-xl px-4 py-2 w-fit mx-auto text-gray-900 mb-10">About Me</h2>
        <div className="text-lg text-gray-700 mb-4">
          Get in touch for collaboration or inquiries. Feel free to email me at:
          <div className='flex flex-col mt-5 space-y-2'>
            <a
              href="mailto:hasdol98@gmail.com"
              className="text-blue-600 hover:underline"
            >
              hasdol98@gmail.com
            </a>
            <a href="tel:+4747286648"
              className="text-blue-600 hover:underline"
            >+4747286648</a>
          </div>

        </div>
      </div>
      <div className='flex space-x-5 mt-2'>
        <div className='cursor-pointer shadow p-2 rounded-xl bg-white hover:bg-gray-100' onClick={handleLinkedinClick}>
          <FaLinkedin size={30}/>
        </div>
        <div className='cursor-pointer shadow p-2 rounded-xl bg-white hover:bg-gray-100' onClick={handleGithubClick}>
          <FaGithub size={30}/>
        </div>
      </div>
    </motion.section>
  );
}
