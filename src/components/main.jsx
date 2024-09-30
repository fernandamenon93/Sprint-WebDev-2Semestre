import React from 'react';
import Nav from './nav';
import Banner from './banner';
import Live from './live';
import GetPoints from './getPoints';

const main = () => {
  return (
    <div>
        <Nav/>
        <Banner interval={5000} />
        <Live/>
        <GetPoints/>
    </div>
  )
}

export default main