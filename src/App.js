import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';
import Sticky from 'react-stickynode';
import scrollToComponent from 'react-scroll-to-component';
import { slide as Menu} from 'react-burger-menu';
import logo from './images/SeaSpire_logo.png';
// import {Dropdown} from './components/dropdown';
import {Slider} from './components/slider';




class App extends Component {
  render() {
    // const stolos = ["Tankers", "Bulk Carriers", "Ferries"];
    return (

      <div className="App">
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="#About_Us">About</a>
          <a className="menu-item" href="#Fleet"><FontAwesome name='ship'/> &nbsp; Fleet</a>
          <a className="menu-item" href="#contact">Contact</a>
        </Menu>
        <header className="App-header">
          <div className="mainlogo"></div>

          <div className="menu">
            <ul>
              <li> <a href='#About_Us'>ABOUT US</a> </li>
              <li> <a href='#Fleet'>FLEET</a> </li>
              <li> <a href='#History'>HISTORY</a> </li>
              <li> <a href='#Services'>SERVICES</a> </li>
              <li> <a href='#contact'>CONTACT</a> </li>
            </ul>
          </div>
          <Sticky enabled={true} top={50} bottomBoundary={1000} className='sticky' >
            <FontAwesome className='scrollArrow' onClick={() => scrollToComponent(this.Fleet, {offset: 0, align: 'top', duration: 2500})} name='chevron-down' data-hover='SCROLL DOWN' spin={false} size='2x' />
          </Sticky>

        </header>


        <div className="mainpic"></div>
        <div className="site-page">
        <div className="news-section"> <p className="news-title">NEWS</p></div>
          <Slider />
          <div className="about" id="About_Us">
            <section className="about_title" > ABOUT US </section>
          </div>
            <section className="about_text" >
            <strong> History </strong>
            <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
          <div className="fleet" id="Fleet" ref={(section) => {this.Fleet=section;}}>
            <section className="fleet_title" > FLEET </section>
          </div>
          <section className="fleet_text" >
              <strong> Our Fleet </strong>
              <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
          <div className="services" id="Services"> </div>
          <section className="services_text">
              <strong> Seaspire Maritime Services </strong>
              <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
          <div className="other" id="History"> </div>
          <section className="other_text">
              <strong> Some other section </strong>
              <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
        </div>

        <div className="site-footer" id="contact" >
          <img src={logo} alt="footer-logo" className="footer-logo" />
          <h3>
            <FontAwesome className='address' name='building'
              spin={false}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> &nbsp;<span className='addresstext'> Filellinon 1-3, Piraeus, Attiki, Greece </span>
            <br/><br/>
            <FontAwesome className='phone' name='phone'
              spin={false}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> &nbsp; +30 210 1001001
            <br/><br/>
            <FontAwesome className='email' name='envelope-open'
              spin={false}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> &nbsp;<span className='emailtext'> mail@seaspiremaritime.com </span>
            <br/><br/>
            <a href='https://www.linkedin.com/company/seaspire-maritime/' className='linkedin'>
              <FontAwesome className='linkedinIcon' name='linkedin-square'
                size='4x' spin={false}
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            </a>
          </h3>
        </div>
        <h5> Disclaimer </h5>
      </div>
    );
  }
}

export default App;
