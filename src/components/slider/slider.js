import React, {Component} from 'react';
import SlideOne from './slide_one';
import SlideTwo from './slide_two';
import SlideThree from './slide_three';
import RightButton from './rightButton';
import LeftButton from './leftButton';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCounter: 1,
      translateValue: 0
     };
    this.nextPic = this.nextPic.bind(this);
    this.previousPic = this.previousPic.bind(this);
  };
  // componentDidUpdate = () => {
  //   console.log(this.state.slideCounter);
  //   if (this.state.slideCounter < 1) { this.setState({ slideCounter: 3}) };
  //   if (this.state.slideCounter > 3) { this.setState({ slideCounter: 1}) };
  // }
  // renderSlides = () => {
  //   let sections = [];
  //   for (let i=0; i < 3; i++) {
  //     sections.push(<SlideOne key={i} />)
  //   return sections
  //   }
  // }

  render() {
    const { slideCounter, translateValue } = this.state;
    console.log(translateValue);
    return (
      <div className='slider'>
        <div className='sliderContainer'
          style={{
            height: '1300px',
            // transform: `translateY(${translateValue}px)`,
            transition: 'backgroundImage 2s ease-out'}} >
          {slideCounter === 1 ? <SlideOne /> : null }
          {slideCounter === 2 ? <SlideTwo  /> : null }
          {slideCounter === 3 ? <SlideThree  /> : null }
        </div>

          <RightButton nextPic={ this.nextPic } />
          <LeftButton previousPic={ this.previousPic } />
      </div>
    );
  }

  nextPic() {
    this.setState({
      translateValue: this.state.translateValue - this.slideWidth(),
      slideCounter: this.state.slideCounter + 1
    });
  }
  previousPic() {
    this.setState({
      translateValue: this.state.translateValue + this.slideWidth(),
      slideCounter: this.state.slideCounter - 1
    });
  }
  // slideWidth = () => {
  //   const slide = document.querySelector('.slide');
  //   console.log(slide.clientWidth);
  //   return slide.clientWidth;
  //
  //
  //
  // }
}

export {Slider}
