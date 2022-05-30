import * as React from 'react';
import Image from 'next/image'
const  imCard = require('../../assets/undraw_social_sharing_re_pvmr.svg');
const  imIcon = require('../../assets/icons8-medical-equipment-64.png');

const  imIcon2 = require('../../assets/icons8-plano-de-saúde-100.png');

const  imIcon3 = require('../../assets/icons8-medical-64.png');


export class CardSkew extends React.Component{
  render() {
    return (

<div className="    ">


      <div className="flex  lg:justify-end mt-28 md:max-h-screen md:max-w-screen  sm:max-h-screen sm:max-w-screen">
     

<div className="bg-violet-500 w-24 h-1/4 rounded-tl-lg rounded-bl-lg  rounded-tr-lg drop-shadow-xl "><a className="lg:pl-4 sm:pr-2"><Image  src={imIcon} width="64" height="64" className=' object-center overflow-hidden' /></a></div>


        <div className="rounded-md border-2 border-teal-400 lg:w-2/5 md:2/3 h-72 transform skew-y-0 backdrop-blur-sm bg-teal-300/30 m-8 p-8 drop-shadow-xl ">
      

        <div className="lg:flex lg:justify-end lg:mt-24 sm:mt-36 lg:pl-44 lg:ml-32  lg:fixed">
      <div className=" grid grid-cols-1 content-center "><a className="text-xs  ">os melhores preços</a><a className="text-xs  ">a melhor qualidade de produto </a></div>
      </div>  
  <div className=" text-center grid content-center  w-full h-full   inline-block     ">
  
  <Image  src={imCard} width="412" height="412" className='fixed' />

  


</div>
</div>



      </div>
      <div className=" flex justify-end  lg:mr-12 " >
      <div className=" bg-sky-900 w-40 h-1/4    rounded-bl-lg rounded-br-lg rounded-tr-lg drop-shadow-xl  "><a className="pl-4 "><Image  src={imIcon2} width="64" height="64" className=' object-center overflow-hidden' /></a></div>
</div>
 
<div className="flex lg:justify-end sm:justify-start lg:justify-around lg:ml-36 sm:ml-36 ">
      <div className="bg-emerald-700 w-24 h-1/4 rounded-tl-lg rounded-bl-lg rounded-br-lg drop-shadow-xl  "><a className="pl-4 "><Image  src={imIcon3} width="64" height="64" className=' object-center overflow-hidden' />
</a></div>
</div>




      </div>

    );
  };
};