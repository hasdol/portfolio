'use client';
import { motion } from 'framer-motion';
import { SiReact, SiFirebase, SiNextdotjs, SiTailwindcss, SiStripe, SiJavascript } from 'react-icons/si';

export default function TechStack() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const techs = [
    { name: 'React', icon: <SiReact size={40} />, desc: 'SPA and component-based development' },
    { name: 'Next.js', icon: <SiNextdotjs size={40} />, desc: 'Fullstack React framework' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, desc: 'Utility-first CSS for rapid styling' },
    { name: 'Javascript', icon: <SiJavascript size={40} />, desc: 'Authentication, database, and hosting' },
    { name: 'Firebase', icon: <SiFirebase size={40} />, desc: 'Authentication, database, and hosting' },
    { name: 'Stripe', icon: <SiStripe size={40} />, desc: 'Secure payment solutions' },
    
  ];

  return (
    <motion.section
      id="tech-stack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      variants={sectionVariants}
      className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl bg-gray-50 rounded-xl px-4 py-2 w-fit mx-auto text-gray-900 mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {techs.map((tech) => (
            <div 
              key={tech.name} 
              className="p-4 bg-white rounded-lg shadow flex flex-col items-center"
            >
              <div className="mb-3 text-gray-700">{tech.icon}</div>
              <h3 className="font-semibold text-gray-800">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
