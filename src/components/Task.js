import React, { Component } from 'react';
import './Task.css'
class Task extends Component{
    
    styleCompleted(){

        return{
            color: this.props.task.done ? "green" : "red",
            background: this.props.task.done ? "gray" : "black",
            border: "1px solid black",
            padding: "2px",
            margin: "16px"

        }
    }
    
    render(){

        const { task } = this.props;
        const { title, description, id } = task

        return (
            <div>
                <p className="Task" style={this.styleCompleted()}>
                    { title} -
                    { description } -
                    { id } -
                <input type="checkbox" />
                <button>
                      x
                </button>
              </p>
            </div>
        )
    }
}

export default Task;