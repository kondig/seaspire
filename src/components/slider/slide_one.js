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
    height: '600px',
    backgroundColor: '#AFBDC5',
  }
  return (
    <div className="slide">
      <div  style={background} >
      </div>
      <div className='slideText' style={text} >
          <strong> New no 1 </strong>
          <p> text text text text text </p>
      </div>
    </div>

  )
}

export default SlideOne ;
