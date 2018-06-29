import React, { Component } from 'react';
import ToDoItem from '../toDoItem/toDoItem';
import './toDoList.css';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          list: [
              {
                  title: "asd",
                  description: "",
                  member: "",
                  dueDate: "",
                  tags: ["sdsa"]
              }
            ]
        };
      }

    render() {
        return (
        <ToDoItem />
        );
    }
}

export default ToDoList;
