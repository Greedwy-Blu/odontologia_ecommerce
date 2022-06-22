import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Components/Home/navbarHome';
import styles from  '../styles/animationEffect.module.css';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { IconContext } from 'react-icons';

const  imCardPreco = require('../assets/undraw_credit_card_re_blml.svg');
export default  class preco extends React.Component{
  render() {
    return (
      <div className="fixed">
      <header> <Nav/>
   
   </header>
        
      <main className={styles.containerAnimacao}>
    
   <div className="flex justify-center text-center lg:ml-56 lg:pl-60 mt-24 sm:m-8 fixed">

<h1 className="text-4xl  py-4 lg:pl-8 sm:pl-2">Sobre a odontemedic</h1>

          </div> 

          <div className="pl-12 translate-y-12">
<button className="flex justify-end lg:mt-24   sm:12  bg-green-500 h-10 w-10 rounded-full">
<IconContext.Provider value={{ size: "2em", className: "flex items-center" }}>
  <span className="mt-0.5 p-0.5"><BiLeftArrowAlt/></span>
  </IconContext.Provider>
</button>
   </div>
   

    <div className="flex lg:justify-start mt-36 pt-24 lg:ml-24  ">

    <span className="animate-waving-hand animate-bounce ">  <Image src={imCardPreco} className="" height={560} width={520} /></span>

    </div>
    
        
<div className="flex lg:justify-end m-4  lg:pl-56 lg:ml-40 mt-36 pt-36   ">

    <p className="text-2xl antialiased hover:subpixel-antialiased ">A odontomedic foi criado para fornecer ajuda  aos profissionais e as pessoas  que nescessita equipamentos medicos á produtos medicos </p>
  

    </div>


      </main>
      <div className={styles.overlay}></div>
  
    </div>
    );
  };
};