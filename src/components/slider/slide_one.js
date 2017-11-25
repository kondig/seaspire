import React from 'react';

let slidePic = require('./spire1.jpg');

const SlideOne = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px'
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

export default SlideOne ;
