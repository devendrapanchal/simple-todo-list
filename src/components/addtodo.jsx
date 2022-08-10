import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";
        
        //Updating local component state
        this.setState({value:""});
    }

    addTodo = () => {
        //Call method reference in Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div className="input-group mb-2 mt-2 mr-2">
                <input type="text" className="form-control" id="todoValue" placeholder="Enter Todo Name" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline-secondary ml-2" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;