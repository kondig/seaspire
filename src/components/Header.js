import React from 'react';
import FontAwesome from 'react-fontawesome';
// import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
import { slide as Menu} from 'react-burger-menu';
// import logo from '../images/SeaSpire_logo.png';
// import {Dropdown} from './dropdown';





const Header = () => (
  <div>
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="#About_Us">About</a>
      <a className="menu-item" href="#Fleet"><FontAwesome name='ship'/> &nbsp; Fleet</a>
      <a className="menu-item" href="#contact">Contact</a>
    </Menu>
    <header className="App-header">
      <div className="header">
        <div className="menu">
          <ul>
            <li> <a href='#About_Us'>ABOUT US</a> </li>
            <li> <a href='#Fleet'>FLEET</a> </li>
            <li> <a href='#Services'>SERVICES</a> </li>
            <li> <a href='#History'>NEWS</a> </li>
            <li> <a href='#contact'>CONTACT</a> </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
)

export {Header}
