import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';
import logo from './images/SeaSpire_logo.png';
import {Dropdown} from './components/dropdown';
import {Slider} from './components/slider';


class App extends Component {
  render() {
    const stolos = ["Tankers", "Bulk Carriers", "Ferries"];
    return (
      <div className="App">
        <header className="App-header">
          <div className="mainlogo">
          </div>
          <div className="menu">
            <ul>
              <li> <a href='#About_Us'>ABOUT US</a> </li>
              <li> <a href='#Fleet'>FLEET</a> </li>
              <li> <a href='#History'>HISTORY</a> </li>
              <li> <a href='#Services'>SERVICES</a> </li>
              <li> <a href='#contact'>CONTACT</a> </li>
            </ul>
          </div>
          <div className="mainpic">
          </div>
          <FontAwesome className='ship' name='ship'/>
          <FontAwesome className='flask' name='flask' size='2x' spin={false}
          />
        </header>



        <div className="site-page">
          <Slider />
          <div className="about" id="About_Us">
            <section className="about_title" > ABOUT US </section>
          </div>

            <section className="about_text" >
            <strong> History </strong>
            <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
          <div className="fleet" id="Fleet"> </div>
          <section className="fleet_title"> </section>
          <section className="fleet_text" >
              <strong> Our Fleet </strong>
              <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
          <div className="services" id="Services"> </div>
          <section className="services_text">
              <strong> Seaspire Maritime Services </strong>
              <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
          <div className="other" > </div>
          <section className="other_text">
              <strong> News </strong>
              <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
        </div>

        <div className="site-footer" id="contact" >
          <img src={logo} alt="footer-logo" className="footer-logo" />
          <h3>
            <FontAwesome className='address' name='building'
              size='1x' spin={false}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> &nbsp; Filellinon 1-3, Piraeus, Attiki, Greece
            <br/><br/>
            <FontAwesome className='phone' name='phone'
              size='1x' spin={false}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> &nbsp; +30 210 1001001
            <br/><br/>
            <FontAwesome className='email' name='envelope-open'
              size='1x' spin={false}
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> &nbsp; mail@seaspiremaritime.com
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
