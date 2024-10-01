import React from 'react';
import Nav from './nav';
import Banner from './banner';
import Live from './live';
import GetPoints from './getPoints';
import GetPowers from './getPowers';
import Footer from './footer';
import Desafio from './desafio';

const main = () => {
  return (
    <div>
        <Nav/>
        <Banner interval={5000} />
        <Live/>
        <Desafio/>
        <GetPoints/>
        <GetPowers/>
        <Footer/>
    </div>
  )
}

export default main