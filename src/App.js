import React, { Component } from 'react';

import './App.css';

import logo from './images/SeaSpire_logo.png';

import {Dropdown} from './components/dropdown';

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
              <li> <a href='#identifier1'>ABOUT US</a> </li>
              <li> <a href='#identifier2'>FLEET</a> </li>
              <li> <a href='#History'>HISTORY</a> </li>
              <li> <a href='#contact'>CONTACT</a> </li>
              <li> <a href='services'>SERVICES</a> </li>
            </ul>
          </div>
          <div className="mainpic">
          </div>
        </header>



        <div className="site-page">
          <div className="fleet" id="identifier1"> </div>
          <section className="fleet_title"> </section>
          <section className="fleet_text" >
              <strong> Our Fleet </strong>
              <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
          </section>
          <div className="history" id="History"> </div>
          <section className="history_text">
              <strong> Seaspire Maritime Timeline </strong>
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
          <h3> Filellinon 1-3, Piraeus, Attiki, Greece <br/><br/> Phone: +30 210 1001001 <br/><br/> e-mail: mail@seaspiremaritime.com </h3>
          <h4>  </h4>
          <a href='https://www.linkedin.com/company/seaspire-maritime/' className='linkedin'> </a>
        </div>
        <h5> Disclaimer </h5>
      </div>
    );
  }
}

export default App;
