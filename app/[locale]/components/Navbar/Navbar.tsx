"use client";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next-intl/link";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className="  w-52  flex flex-row items-center text-base justify-center"><a>About us</a></li>
      <li className="  w-52  flex flex-row items-center text-base justify-center">
        <details className="w-52 ">
          <summary>Games</summary>
          <ul className="w-36">
            <li><a>Speedle</a></li>
            <li className="flex flex-row justify-between items-center">
            <div className="tooltip tooltip-right tooltip-accent" data-tip="Soon!">
            <Link href="/futboldle"  >Futboldle</Link>
            </div>
              </li>
          </ul>
        </details>
      </li>
      <li className="  w-52  flex flex-row items-center text-base justify-center">
                  <Link
                    className="mx-5 hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="en"
                  >
                    🇺🇸
                  </Link>
                  <p className="">|</p>
                  <Link
                    className=" hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="es"
                  >
                    🇪🇸
                  </Link>
                </li>
                
      </ul>
    </div>
    <Link
      className="btn btn-ghost text-xl"
      href="/"
    >
      SPORTLE
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1  flex justify-center">
      <li className="  w-52  flex flex-row items-center text-base justify-center"><a>About us</a></li>
      <li className="  w-52  flex flex-row items-center text-base justify-center">
        <details className="w-52 ">
          <summary>Games</summary>
          <ul className=" w-52">
            <li><a>Speedle</a></li>
            <li className="flex flex-row justify-between items-center">
            <div className="tooltip tooltip-right tooltip-accent" data-tip="Soon!">
            <Link href="/futboldle"  >Futboldle</Link>
            </div>
              </li>
          </ul>
        </details>
      </li>
      <li className="  w-52  flex flex-row items-center text-base justify-center">
                  <Link
                    className="mx-5 hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="en"
                  >
                    🇺🇸
                  </Link>
                  <p className="">|</p>
                  <Link
                    className=" hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="es"
                  >
                    🇪🇸
                  </Link>
                </li>
                
                <li className=" w-52 flex justify-center md:justify-end">
                  <ThemeSwitcher />
                </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign In</a>
  </div>
</div>
   
  );
};

export default Navbar;
/*

*/