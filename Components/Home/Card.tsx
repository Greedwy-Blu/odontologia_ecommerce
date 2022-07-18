import * as React from 'react';
import Image from 'next/image'
import HearderHome from './hearderTextHome';
const  imCard = require('../../assets/undraw_social_sharing_re_pvmr.svg');
const  imIcon = require('../../assets/icons8-medical-equipment-64.png');

const  imIcon2 = require('../../assets/icons8-plano-de-saúde-100.png');

const  imIcon3 = require('../../assets/icons8-medical-64.png');
import styles from  '../../styles/animationEffect.module.css';


export class CardSkew extends React.Component{
  render() {
    return (

<div className={styles.cardIn}>
      

      <div className="sm:flex lg:justify-end mt-28  inline-block -translate-y-32">
     

<div className="bg-violet-500 w-24 h-1/4 rounded-tl-lg rounded-bl-lg  rounded-tr-lg drop-shadow-xl "><a className="lg:pl-4 sm:pr-2"><Image  src={imIcon} width="64" height="64" className=' object-center overflow-hidden' /></a></div>


<div className={styles.blobImage}><div className="translate-x-32 translate-y-6"><Image  src={imCard} width="160" height="212" className=' object-center' /></div>
</div>



      </div>
    




      </div>

    );
  };
};