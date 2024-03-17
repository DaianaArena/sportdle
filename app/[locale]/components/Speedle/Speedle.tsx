"use client";
import { motion } from "framer-motion";
import Link from "next-intl/link";
interface SpeedleProps {
  title: string;
  subtitle: string;
  CTA: string;
}

const Speedle = ({ title, subtitle, CTA }: SpeedleProps) => {
  return (
    <div className="hero py-36 bg-secondary ">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <img 
        className="mask mask-parallelogram" 
        src="https://i.imgur.com/Qg8BPTq.jpeg" 
        width={500}
        height={600}
      />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          <Link 
            href="/pages/speedle"
            className="btn btn-primary"
            >
            {CTA}
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Speedle;

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