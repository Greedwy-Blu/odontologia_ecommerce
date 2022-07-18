// @flow
import * as React from 'react';
import { CardSkew } from '../Components/Home/Card';
import Nav from '../Components/Home/navbarHome';
import HearderHome  from '../Components/Home/hearderTextHome';
import TextSection from '../Components/Home/textSectIon';
import styles from  '../styles/animationEffect.module.css';
export function HomeEcommerce(){
 
    return (
      <div className="fixed
 container mx-auto  ">
        <Nav/>
      

<HearderHome/>
<CardSkew/>  
       </div>
    );
 
};