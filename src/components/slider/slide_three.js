import React from 'react';

let slidePic = require('./spire3.jpg');

const SlideThree = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '700px',
  }
  let text = {
    height: '600px',
    backgroundColor: '#AFBDC5',
  }
  return (
    <div className="slide">
      <div style={background} >
      </div>
      <div className='slideText' style={text} >
        <strong> New no 3 </strong>
        <p> toxt toxt toxt text toxt </p>
      </div>
    </div>
  )
}

export default SlideThree;
