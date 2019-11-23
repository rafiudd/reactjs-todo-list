import React, { Component } from "react";
import Flip from "react-flip-move";
class TodoItems extends Component {
    constructor(props) {
        super(props);
        
        this.CreateTask = this.CreateTask.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
    
    CreateTask(item) {
        return <li onClick={() => this.delete(item.key)} 
                key={item.key}> {item.text} </li>
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.CreateTask);
        return (
            <ul>
                <Flip duration={250} easing="ease-out">
                    {listItems}
                </Flip>
            </ul>
        );
    }
}

export default TodoItems;