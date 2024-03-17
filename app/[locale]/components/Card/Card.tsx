"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from 'react';
interface CardProps {
  title: string;
}



const Card = ({ title }: CardProps) => {



  return (
    <motion.div
    className="p-4 md:w-1/3 flex flex-col text-center items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <div className="card w-96 glass">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
    </motion.div>
  );
};

export default Card;


