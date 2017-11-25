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
    height: '400px',
    backgroundColor: '#AFBDC5',
  }
  return (
    <div>
      <div className="slide"  style={background} >
      </div>
      <div className='slideText' style={text} >
      </div>
    </div>
  )
}

export default SlideThree;
