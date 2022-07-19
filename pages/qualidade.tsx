import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Components/Home/navbarHome';
import styles from  '../styles/animationEffect.module.css';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { IconContext } from 'react-icons';

const  imCardProduto = require('../assets/undraw_add_to_cart_re_wrdo.svg');
export default  class qualidade extends React.Component{
  render() {
    return (
      <div className="">
     
    
           
      <main className={styles.containerAnimacao}>
      <Nav/>
   
   <div className="flex lg:justify-center text-center lg:items-center lg:ml-56 lg:pl-60 mt-24 sm:m-8 sm:pl-2  fixed">

<h1 className="text-4xl  py-4 lg:pl-4 lg:mt-8 sm:ml-4 ">Sobre a odontemedic</h1>

          </div> 

          <div className=" pr-32 lg:mt-24 sm:mt-32 m-8 fixed">
<button className="flex justify-end lg:mt-24    bg-green-500 h-10 w-10 rounded-full">
<IconContext.Provider value={{ size: "2em", className: "flex items-center" }}>
  <span className="mt-0.5 p-0.5"><BiLeftArrowAlt/></span>
  </IconContext.Provider>
</button>
   </div>
   

  
   <div className=" flex lg:justify-start  sm:justify-center lg:mt-36   lg:ml-24 translate-y-40 fixed">
   <p className="lg:hidden lg:text-3xl sm:text-xl antialiased hover:subpixel-antialiased   translate-y-96 fixed">A odontomedic foi criado para fornecer ajuda  aos profissionais e as pessoas  que nescessita equipamentos medicos á produtos medicos </p>
    
<div className={styles.blobImage}>

<span className="">  <Image src={imCardOdont} className="" height={460} width={420} /></span>
</div>
 


</div>

    
        
<div className="lg:flex  lg:justify-end sm:justify-center  m-4  lg:ml-40 lg:mt-36 lg:pt-36 translate-x-6 ">

    <p className="lg:text-3xl sm:text-xl antialiased text-center   ">A odontomedic foi criado para fornecer ajuda  aos profissionais e as pessoas  que nescessita equipamentos medicos á produtos medicos </p>
  

    </div>

   
      </main>
      <div className={styles.overlay}></div>
  
    </div>);
  };
};