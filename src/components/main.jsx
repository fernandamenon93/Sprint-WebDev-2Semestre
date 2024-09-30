import React from 'react';
import Nav from './nav';
import Banner from './banner';
import Live from './live';
import GetPoints from './getPoints';
import GetPowers from './getPowers';

const main = () => {
  return (
    <div>
        <Nav/>
        <Banner interval={5000} />
        <Live/>
        <GetPoints/>
        <GetPowers/>
    </div>
  )
}

export default main