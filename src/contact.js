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
              <li> <Dropdown listname={"FLEET"} listItems={stolos} /> </li>
              <li> <a href='#identifier2'>ABOUT US</a> </li>
              <li> <a href='#History'>HISTORY</a> </li>
              <li> <a href='./contact.js'>CONTACT</a> </li>
            </ul>
          </div>
          <div className="mainpic">
          </div>
        </header>

        <div className="site-footer">
          <img src={logo} alt="footer-logo" className="footer-logo" />
          <h3> Piraeus, Attiki, Greece <br/><br/> Phone: +30 210 1001001 <br/><br/> e-mail: ouremail@seaspire.com </h3>
          <h4>  </h4>
          <a href='https://www.linkedin.com/company/seaspire-maritime/' className='linkedin'> </a>
        </div>
        <h5> Disclaimer </h5>
      </div>
    );
  }
}
