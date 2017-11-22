import React, {Component} from 'react';
import SlideOne from './slide_one';
import SlideTwo from './slide_two';
import SlideThree from './slide_three';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state ={slideCounter: 1}
  }
  render() {
    return (
      <div className='slider'>
          <SlideOne />
          <SlideTwo />
          <SlideThree />
      </div>
    );
  }
}

export {Slider}
