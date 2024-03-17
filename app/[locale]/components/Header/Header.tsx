"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  subtitle: string;
  CTA: string;
}

const Header = ({ title, subtitle, CTA }: HeaderProps) => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.imgur.com/NNPcaqL.jpeg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{subtitle}</p>
          <button className="btn btn-primary">{CTA}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
<motion.div
      className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 dark:text-gray-400 text-opacity-80"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {message}
    </motion.div>

*/