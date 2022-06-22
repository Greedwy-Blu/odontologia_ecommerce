import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Image from 'next/image'
const  imIcon = require('../../assets/icons8-stethoscope-64.png');
import Link from 'next/link'
import styles from  '../../styles/animationEffect.module.css';


function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className={styles.navUp}>
        <nav className="bg-[#f4f8f5] sm:border-none fixed ">
          <nav className="max-w-7xl  mx-auto px-4 sm:px-6  lg:px-8 ">
            <div className="flex items-center justify-start sm:fixed h-16 ">
              <div className="flex items-center ">
                <div className="flex flex-shrink-0  ">
                 <div className="flex text-center ">
                     <div className="bg-green-900  h-12 w-12 rounded-bl-full rounded-tl-full rounded-br-full mt-2 m-4 shadow-sm"><a className="flex items-center pl-2.5 mt-1"><Image  src={imIcon} width="32" height="32" className=' mt-2 pl-2 object-center overflow-hidden' /></a></div>
                     <a className="flex items-baseline mt-2 text-xl">ODONTOMEDIC</a>
                     </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-32 pl-28  flex items-baseline space-x-4">
                  <Link href="/odontomedic">
                    <a
                      className="text-slate-900 px-3 py-2  text-lg font-medium border-b-2   border-transparent hover:border-emerald-500  p-1 transition  duration-300 delay-150"
                    >
                    Sobre
                    </a>
             </Link>
             <Link href="/preco">
                
                    <a
                      href="#"
                      className="text-slate-900  px-3 py-2  text-lg font-medium border-b-2   border-transparent hover:border-emerald-500  p-1 transition  duration-300 delay-150"
                    >
                      Preço
                    </a>
                    </Link>
                    <Link href="/qualidade">
            
                    <a
                      href="#"
                      className="text-slate-900  px-3 py-2  text-lg font-medium  border-b-2   border-transparent hover:border-emerald-500  p-1 transition  duration-300 delay-150"
                    >
                      Produto
                    </a>
                    </Link>
                   
                  </div> 
                </div>
              </div>
              <div className="-mr-2 sm:border-none  flex lg:hidden w-full md:flex md:items-center md:w-auto  sm:bg-[#f4f8f5]">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-teal-900 flex inline-flex items-center   justify-end ml-16 p-2   rounded-md text-gray-400 hover:text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </nav>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="flex  md:hidden  " id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 pl-16 space-y-1 sm:px-3 ">
                <Link href="/odontomedic">
                    <a
                      href="#"
                      className="text-slate-900 px-3 py-2  text-lg font-medium border-b-2   border-transparent hover:border-emerald-500  p-1 transition  duration-300 delay-150"
                    >
                    Sobre
                    </a>
             </Link>
             <Link href="/preco">
                
                    <a
                      href="#"
                      className="text-slate-900  px-3 py-2  text-lg font-medium border-b-2   border-transparent hover:border-emerald-500  p-1 transition  duration-300 delay-150"
                    >
                      Preço
                    </a>
                    </Link>
                    <Link href="/qualidade">
            
                    <a
                      href="#"
                      className="text-slate-900  px-3 py-2  text-lg font-medium  border-b-2   border-transparent hover:border-emerald-500  p-1 transition  duration-300 delay-150"
                    >
                      Produto
                    </a>
                    </Link>
                 
                </div>
              </div>
            )}
          </Transition>
        </nav>
  
       
      </div>
    );
  }
  
  export default Nav;