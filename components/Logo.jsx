'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MyLogo from '@/public/ha_logo.png';


export default function Logo() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center"
    >
      <Image
        src={MyLogo}
        alt="Håkon Asdøl Logo"
        width={30}
        height={30}
        priority
        className="object-contain cursor-pointer"
        onClick={handleLogoClick}
      />
    </motion.div>
  );
}
