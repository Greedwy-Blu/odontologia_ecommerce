import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Components/Home/navbarHome';
import styles from  '../styles/animationEffect.module.css';

const  imCardOdont = require('../assets/delesign-business-idea.svg');

export default  class odontomedic extends React.Component{

  render() {
   
    return (
      <div className="">
        <header> <Nav/>
     </header>
          
        <main className={styles.containerAnimacao}>
      
     <div className="flex justify-center text-center lg:ml-56 lg:pl-60 mt-24 sm:m-8 fixed">

<h1 className="text-4xl  py-4">Sobre a odontemedic</h1>

            </div> 

      <div className="flex lg:justify-start mt-36 pt-24 lg:ml-24  ">

      <span className="animate-waving-hand animate-bounce ">  <Image src={imCardOdont} className="" height={360} width={320} /></span>

      </div>
      
          
  <div className="flex lg:justify-end m-4  lg:pl-56 lg:ml-40 mt-36 pt-36   ">
 
      <p className="text-base antialiased hover:subpixel-antialiased ">A odontomedic oference diversos produtos desde higiene a produtos como equipamentos medicos</p>
    

      </div>


        </main>
        <div className={styles.overlay+'border-none'}></div>
    
      </div>
    );
  };
};