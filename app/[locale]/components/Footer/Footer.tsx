"use client";
import { motion } from "framer-motion";
//Icons
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { SiBuymeacoffee } from "react-icons/si";
import Link from "next/link";

const Footer = ( ) => {

  let year = new Date().getFullYear()

  return (
    <footer className="text-gray-400  body-font">
              <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <Link
                  className="btn btn-ghost text-xl text-primary"
                  href="/"
                >
                  SPORTLE
                </Link>
                </a>
                <p className="text-sm text-neutral sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-accent sm:py-2 sm:mt-0 mt-4">
                  © {year} —
                  <a
                    href="http://daianaarena.vercel.app/"
                    className="text-neutral ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @sportle
                  </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a 
                  className="ml-3 text-accent"
                  href="https://www.buymeacoffee.com/arenadaianadev"
                  target="_blank"
                  >
                  <SiBuymeacoffee size={20}/>
                  </a>
                  
                  <a 
                  className="ml-3 text-neutral"
                  href="https://www.instagram.com/dai.tsx/"
                  target="_blank"
                  >
                  <FaInstagram size={20}/>
                  </a>
                  
                </span>
              </div>
            </footer>
  );
};

export default Footer;
