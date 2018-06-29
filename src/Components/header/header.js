import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <h1> My To-Do List </h1>
        <input type="text" />
        <input type="button" value="Add" />
      </div>
    );
  }
}

export default Header;
