import React, {Component} from 'react';

let slidePic = require('./logotest.png');

const SlideTwo = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '400px'
  }
  return (
    <div className="slide"  style={background} >
      lololo
    </div>
  )
}

export default SlideTwo;
