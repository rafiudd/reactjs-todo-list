import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./index.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        
        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }
    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                text : this._inputElement.value,
                key : Date.now()
            };

            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(newItem)
                }
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItems(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items : filteredItems,
        });
    }
    
    render() {
        return (
            <div>
                <h1>React TodoList</h1>
                <div className="form">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} 
                            placeholder="Enter task">
                        </input>
                        <button className="submit-btn" type="submit">SUBMIT</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                                    delete={this.deleteItems}/>
            </div>
        )
    }
}
export default TodoList;