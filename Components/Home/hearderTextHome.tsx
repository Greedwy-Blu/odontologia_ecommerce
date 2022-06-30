// @flow
import * as React from 'react';
import styles from  '../../styles/animationEffect.module.css';

function HearderHome(){
  
    return (
      <div className={styles.textUp}>
      <div className="flex grid lg:grid-cols-3  lg:content-start  sm:grid-cols-1 sm:content-center  lg:mt-32    sm:translate-y-12 lg:fixed">
        
        <div className="m-8  ">
        <h1 className="text-3xl text-emerald-800 ">AQUI VOCÊ ENCONTRA DIVERSOS PRODUTOS DA  MELHOR QUALIDADE</h1>
        <p className="mt-1 text-slate-900">começe a ver e comprar os nossos produtos.</p>
        <p className="mt-2 flex justify-center ">
        
        <a href="#_" className=" relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-emerald-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group ">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-emerald-600 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round"  strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Começar a ver</span>
</a>
     </p>
        </div>

      </div>
      </div>
    );
 
};

export default HearderHome;