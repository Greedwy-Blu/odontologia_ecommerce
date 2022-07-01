import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Components/Home/navbarHome';
import styles from  '../styles/animationEffect.module.css';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { IconContext } from 'react-icons';

const  imCardOdont = require('../assets/delesign-business-idea.svg');

export default  class odontomedic extends React.Component{

  render() {
   
    return (
      <div className="">
     
    
           
        <main className={styles.containerAnimacao}>
        <Nav/>
     
     <div className="flex lg:justify-center text-center lg:items-center lg:ml-56 lg:pl-60 mt-24 sm:m-8 sm:pl-2  fixed">

<h1 className="text-4xl  py-4 lg:pl-4 lg:mt-8 sm:ml-4 ">Sobre a odontemedic</h1>

            </div> 

            <div className=" pr-36 lg:mt-24 sm:mt-32 m-8 fixed">
<button className="flex justify-end lg:mt-24     bg-green-500 h-10 w-10 rounded-full">
  <IconContext.Provider value={{ size: "2em", className: "flex items-center" }}>
    <span className="mt-0.5 p-0.5"><BiLeftArrowAlt/></span>
    </IconContext.Provider>
</button>
     </div>
     

      <div className="flex lg:justify-start sm:justify-center lg:mt-36 pt-36 lg:ml-24 ">

      <span className="animate-bounce ">  <Image src={imCardOdont} className="" height={460} width={420} /></span>

      </div>
      
          
  <div className="flex  lg:justify-end sm:justify-center m-4   lg:pl-56 lg:ml-40 mt-36 pt-36   ">
 
      <p className="lg:text-2xl sm:text-2xl antialiased hover:subpixel-antialiased    ">A odontomedic foi criado para fornecer ajuda  aos profissionais e as pessoas  que nescessita equipamentos medicos á produtos medicos </p>
    

      </div>


        </main>
        <div className={styles.overlay}></div>
    
      </div>
    );
  };
};