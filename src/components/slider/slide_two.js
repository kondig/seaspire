import React from 'react';

let slidePic = require('./spire2.jpg');

const SlideTwo = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '700px'
  }
  let text = {
    height: '600px',
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

export default SlideTwo;
