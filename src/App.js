import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/header';
import ToDoList from './Components/toDoList/toDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList />
      </div>
    );
  }
}

export default App;
