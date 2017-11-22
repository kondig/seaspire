import React, {Component} from 'react';

let slidePic = require('./shipfront.jpg');

const SlideOne = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px'
  }
  return (
    <div className="slide"  style={background} >
      lalalo
    </div>
  )
}

export default SlideOne ;
